import { NextRequest, NextResponse } from "next/server";
import * as cookie from "cookie";
import crypto from "crypto";

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 minutes
const RATE_LIMIT_MAX_ATTEMPTS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (record.count >= RATE_LIMIT_MAX_ATTEMPTS) {
    return false;
  }
  
  record.count++;
  return true;
}

function generateSecureToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

export async function POST(request: NextRequest) {
  // Get client IP for rate limiting
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] 
    || request.headers.get("x-real-ip") 
    || "unknown";

  // Check rate limit
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { message: "Too many attempts. Please try again later." }, 
      { status: 429 }
    );
  }

  const body = await request.json();
  const { password } = body;
  const correctPassword = process.env.PAGE_ACCESS_PASSWORD;
  
  if (!correctPassword) {
    console.error("PAGE_ACCESS_PASSWORD environment variable is not set");
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }

  // Use constant-time comparison to prevent timing attacks
  const passwordBuffer = Buffer.from(password || "");
  const correctBuffer = Buffer.from(correctPassword);
  
  if (passwordBuffer.length !== correctBuffer.length || !crypto.timingSafeEqual(passwordBuffer, correctBuffer)) {
    return NextResponse.json({ message: "Incorrect password" }, { status: 401 });
  }

  // Generate a secure random token instead of static value
  const authToken = generateSecureToken();
  
  const response = NextResponse.json({ success: true }, { status: 200 });

  response.headers.set(
    "Set-Cookie",
    cookie.serialize("authToken", authToken, {
      httpOnly: true,
      secure: true, // Always use secure in production
      maxAge: 60 * 60,
      sameSite: "strict",
      path: "/",
    }),
  );

  return response;
}
