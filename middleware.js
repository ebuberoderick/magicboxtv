import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const headersList = await headers();
  const msisdn = headersList.get("msisdn");
  const requestHeaders = new Headers(request.headers)
  console.log({ middleware: msisdn, browser: requestHeaders.get("msisdn") });
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
