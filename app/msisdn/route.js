import { headers } from "next/headers";

export async function GET(request, { params }) {
  const headersList = await headers();
  const msisdn = headersList.get("msisdn");

  return Response.json({ msisdn }, { status: 200 });
}