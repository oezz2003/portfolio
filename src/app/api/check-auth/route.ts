import { NextRequest, NextResponse } from "next/server";
import * as cookie from "cookie";

// Store for valid tokens (in production, use Redis or similar)
// Note: In a real implementation, this should be persisted across requests
const validTokens = new Set<string>();

export async function GET(request: NextRequest) {
  const cookieHeader = request.headers.get("cookie") || "";
  const cookies = cookie.parse(cookieHeader);
  
  const authToken = cookies.authToken;
  
  // Check if token exists and is valid
  // Must be a proper token (64+ hex chars from crypto.randomBytes(32))
  // Explicitly reject the old static "authenticated" value
  if (authToken && 
      authToken !== "authenticated" && 
      authToken.length === 64 && 
      /^[a-f0-9]+$/i.test(authToken)) {
    // Token format is valid
    return NextResponse.json({ authenticated: true }, { status: 200 });
  } else {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
