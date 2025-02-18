export async function middleware(request) {
  const headersList = await headers();
  const msisdn = headersList.get("msisdn");
  console.log({ middleware: msisdn });
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
