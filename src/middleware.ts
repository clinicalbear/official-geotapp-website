import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // 1. Bypass static files and API
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/static') ||
        PUBLIC_FILE.test(pathname)
    ) {
        return NextResponse.next();
    }

    // 2. Check if already on /en
    if (pathname.startsWith('/en')) {
        return NextResponse.next();
    }

    // 3. GeoIP Detection
    const country = (req as any).geo?.country ||
        req.headers.get('x-country') ||
        req.headers.get('cf-ipcountry') ||
        req.headers.get('x-vercel-ip-country') ||
        'IT'; // Default to IT (includes localhost)

    // 4. Redirect Logic
    // If NOT Italy, redirect to /en
    if (country !== 'IT' && country !== 'it') {
        // Avoid redirect loops if logic is flawed, but simple enough here.
        const url = req.nextUrl.clone();
        url.pathname = `/en${pathname === '/' ? '' : pathname}`;
        return NextResponse.redirect(url);
    }

    // 5. Default (IT/Localhost) -> Stay on root
    return NextResponse.next();
}

export const config = {
    matcher: [
        // Skip all internal paths (_next, etc)
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
