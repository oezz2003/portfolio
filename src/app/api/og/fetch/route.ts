import { NextResponse } from 'next/server';

export const runtime = 'edge';

// Allowed protocols
const ALLOWED_PROTOCOLS = ['http:', 'https:'];

// Blocked IP ranges (private, loopback, link-local, etc.)
function isBlockedIP(hostname: string): boolean {
  // Block obvious internal hostnames
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

function decodeHTMLEntities(text: string): string {
  return text.replace(/&(#?[a-zA-Z0-9]+);/g, (match, entity) => {
    const entities: { [key: string]: string } = {
      'amp': '&',
      'lt': '<',
      'gt': '>',
      'quot': '"',
      'apos': "'",
      '#x27': "'",
      '#39': "'",
      '#x26': '&',
      '#38': '&'
    };
    
    if (entity.startsWith('#')) {
      const code = entity.startsWith('#x') ? 
        parseInt(entity.slice(2), 16) : 
        parseInt(entity.slice(1), 10);
      return String.fromCharCode(code);
    }
    
    return entities[entity] || match;
  });
}

async function fetchWithTimeout(url: string, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { 
      signal: controller.signal,
      headers: {
        'User-Agent': 'bot'
      },
      redirect: 'follow',
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

async function extractMetadata(html: string) {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"[^>]*>/i) 
    || html.match(/<meta[^>]*content="([^"]+)"[^>]*name="description"[^>]*>/i)
    || html.match(/<meta[^>]*property="og:description"[^>]*content="([^"]+)"[^>]*>/i);
  const imageMatch = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"[^>]*>/i)
    || html.match(/<meta[^>]*content="([^"]+)"[^>]*property="og:image"[^>]*>/i);

  const title = titleMatch?.[1]?.trim() || '';
  const description = descMatch?.[1]?.trim() || '';
  const image = imageMatch?.[1]?.trim() || '';

  return {
    title: decodeHTMLEntities(title),
    description: decodeHTMLEntities(description),
    image: image,
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  // Validate the URL
  const validation = validateURL(url);
  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  try {
    const response = await fetchWithTimeout(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.status}`);
    }

    const html = await response.text();
    const metadata = await extractMetadata(html);

    return NextResponse.json({
      ...metadata,
      url,
    });
  } catch (error) {
    console.error('Error fetching metadata:', error instanceof Error ? error.message : String(error));
    
    return NextResponse.json({ 
      error: 'Failed to fetch metadata',
    }, { status: 500 });
  }
}
