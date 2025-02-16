import { http, apiWithOutAuth } from "../../../../services/httpService";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;

  const clickid = searchParams.get("clickid");
  const partner = searchParams.get("partner");
  const telco = searchParams.get("telco");
  const pubid = searchParams.get("pubid");

  if (!clickid) {
    console.log("No clickid found. Campaign not sent.");
    return Response.json(
      { message: "Click Id not found" },
      {
        status: 400,
      }
    );
  }
  const payload = {
    clickid: searchParams.get("clickid"),
  };
  if (partner) payload.partner = partner;
  if (telco) payload.telco = telco;
  if (pubid) payload.pubid = pubid;

  const config = {
    baseURL: "https://api.magicbox.tv/api/v1/",
    method: "POST",
    url: "ums/provider/mobplus/",
    data: payload,
  };

  const response = await apiWithOutAuth
    .post("/api/content/genre/")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  //   const response = await http(config);

  return Response.json(response.data, { status: response.status });
}
