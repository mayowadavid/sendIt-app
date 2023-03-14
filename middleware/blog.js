// blogRedirectMiddleware.js

const { NextRequest, NextResponse } = require('next/server');

export function middleware(req, ev) {
  const host = req.headers.get('host');
  
  if (host && host.startsWith('blog.')) {
    return NextResponse.redirect(`/blog`, { status: 301 });
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/", '/((?!api|_next/static|_next/image|favicon.ico).*)',
],
}

