import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Token will exist if user is logged in
  const Token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl.clone();
  // Allow the requests if the followings are true
  // 1) its a request for next-auth session & provider fetching
  //2) the token exits

  if (pathname.includes("/api/auth") || Token) {
    return NextResponse.next();
  }

//   redirect to login page if no token and requesting a protected route
if(!Token && pathname != '/login'){
    return NextResponse.redirect(new URL('/login', req.url))

}

}

// if you get in your console log few errors stg like this: "SyntaxError: Unexpected token <", just add following in your middleware.js
export const config = {
  matcher: "/",
  };