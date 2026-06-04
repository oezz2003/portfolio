import { NextRequest, NextResponse } from 'next/server';

// Allowed protocols
const ALLOWED_PROTOCOLS = ['http:', 'https:'];

// Blocked IP ranges (private, loopback, link-local, etc.)
function isBlockedIP(hostname: string): boolean {
  const blockedHostnames = [
    'localhost',
    '127.0.0.1',
    '::1',
    '0.0.0.0',
    'internal',
    'intranet',
  ];
  
  if (blockedHostnames.some(h => hostname.toLowerCase().includes(h))) {
    return true;
  }
  
  // Block IP addresses that look like internal IPs
  const internalIPPatterns = [
    /^10\./,
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
    /^192\.168\./,
    /^127\./,
    /^0\./,
    /^169\.254\./,
  ];
  
  return internalIPPatterns.some(pattern => pattern.test(hostname));
}

function validateURL(urlString: string): { valid: boolean; error?: string } {
  let parsedUrl: URL;
  
  try {
    parsedUrl = new URL(urlString);
  } catch {
    return { valid: false, error: 'Invalid URL format' };
  }
  
  // Check protocol
  if (!ALLOWED_PROTOCOLS.includes(parsedUrl.protocol)) {
    return { 
      valid: false, 
      error: `Protocol ${parsedUrl.protocol} is not allowed. Only HTTP and HTTPS are permitted.` 
    };
  }
  
  // Check for blocked hostnames/IPs
  if (isBlockedIP(parsedUrl.hostname)) {
    return { 
      valid: false, 
      error: 'Access to internal/private addresses is not allowed.' 
    };
  }
  
  return { valid: true };
}

export async function GET(request: NextRequest) {
  try {
    // Get the URL parameter
    const url = new URL(request.url);
    const imageUrl = url.searchParams.get('url');
    
    if (!imageUrl) {
      return NextResponse.json({ error: 'Missing URL parameter' }, { status: 400 });
    }
    
    // Validate the URL
    const validation = validateURL(imageUrl);
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }
    
    // Fetch the image
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ImageProxy/1.0)',
      },
      redirect: 'follow',
    });
    
    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch image: ${response.status}` },
        { status: response.status }
      );
    }
    
    // Get the image data
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    
    // Only allow image content types
    if (!contentType.startsWith('image/')) {
      return NextResponse.json(
        { error: 'URL does not point to an image' },
        { status: 400 }
      );
    }
    
    const imageData = await response.arrayBuffer();
    
    // Return the image with appropriate headers
    return new NextResponse(imageData, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (error) {
    console.error('Error proxying image:', error);
    return NextResponse.json(
      { error: 'Failed to proxy image' },
      { status: 500 }
    );
  }
}
