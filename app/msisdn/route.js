import { headers } from "next/headers";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.magicbox.tv/api/v1/";

export async function GET(request, { params }) {
  const headersList = await headers();
  const msisdn = headersList.get("msisdn");

  return Response.json({ msisdn }, { status: 200 });
}