import { NextRequest, NextResponse } from "next/server";
import { DASHBOARD_PAGES } from "./config/pages-url.config";
import { EnumTokens } from "./services/auth-token.service";

const PUBLIC_PATHS = ["/auth/login", "/auth/register"];

export default async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const {url, cookies} = request

    const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN);
    const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN);

    const isAuthorized = !!refreshToken;
    const isPublicPath = PUBLIC_PATHS.some((path) => pathname.startsWith(path));
    const isAuthPage = url.includes('/auth')
    
    if(isAuthPage && refreshToken && accessToken){
        return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, request.url))
    }

    if(isAuthPage){
        return NextResponse.next()
    }

    if (!isAuthorized && !isPublicPath) {
        return NextResponse.redirect(new URL(DASHBOARD_PAGES.LOGIN , request.url));
    }

    return NextResponse.next()
    
}

export const config = {
    matcher: [
        '/',
        '/auth/:path*',
    ]
};