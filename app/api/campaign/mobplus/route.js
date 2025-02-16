import { http } from "../../../services/httpService";

import axios from "axios";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.magicbox.tv/api/v1/";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;

  const clickid = searchParams.get("clickid");
  const partner = searchParams.get("partner");
  const telco = searchParams.get("telco");
  const pubid = searchParams.get("pubid");

  if (!clickid) {
    console.log("No clickid found. Campaign not sent.");
    return new Response(JSON.stringify({ message: "Click Id not found" }), {
      status: 400,
    });
  }
  const payload = {
    clickid: searchParams.get("clickid"),
  };
  if (partner) payload.partner = partner;
  if (telco) payload.telco = telco;
  if (pubid) payload.pubid = pubid;

  axios
    .post("https://api.magicbox.tv/api/v1/ums/provider/mobplus", payload)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

  //   const config = {
  //     baseURL: API_BASE_URL,
  //     method: "POST",
  //     url: "ums/provider/mobplus/",
  //     body: JSON.stringify(payload),
  //   };

  //   const response = await http(config);

  //   const res = await fetch(
  //     "https://api.magicbox.tv/api/v1/ums/provider/mobplus/",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       //   body: JSON.stringify(payload),
  //       body: payload,
  //     }
  //   );
  //   const response = await res.json();

  //   console.log(`response is ${response}`);

  return new Response(
    { message: "sent" },
    {
      status: 200,
    }
  );
}
