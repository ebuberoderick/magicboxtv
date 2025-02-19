import { headers } from "next/headers";
import { http } from "../../../services/httpService";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.magicbox.tv/api/v1/";

export async function GET(request, { params }) {
  const slugs = (await params).url;
  const url = slugs.join("/");
  const searchParams = request.nextUrl.searchParams;
  const urlParams = Object.fromEntries(searchParams.entries());

  const headersList = await headers();
  const msisdn = headersList.get("msisdn");

  const config = {
    baseURL: API_BASE_URL,
    method: "GET",
    url,
    params: urlParams,
  };

  if (msisdn) {
    config.headers = {
      Msisdn: msisdn,
    };
  }

  try {
    const response = await http(config);

    return Response.json(response.data, { status: response.status });
  } catch (error) {
    const err = error?.response;
    return Response.json(err?.data, { status: err?.status ?? 500 });
  }
}

export async function POST(request, { params }) {
  const slugs = (await params).url;
  const url = slugs.join("/");
  const body = await request.json();
  const searchParams = request.nextUrl.searchParams;
  const urlParams = Object.fromEntries(searchParams.entries());

  const headersList = await headers();
  const msisdn = headersList.get("msisdn");

  console.log(msisdn, url);

  const config = {
    baseURL: API_BASE_URL,
    method: "POST",
    url,
    data: body,
    params: urlParams,
  };

  if (msisdn) {
    config.headers = {
      Msisdn: msisdn,
    };
  }

  try {
    const response = await http(config);

    return Response.json(
      { ...response.data, msisdn },
      { status: response.status }
    );
  } catch (error) {
    const err = error?.response;
    return Response.json(err?.data, { status: err?.status ?? 500 });
  }
}
