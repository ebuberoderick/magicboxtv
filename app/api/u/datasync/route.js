export async function POST(request, { params }) {
  try {
    const body = await request.json;

    const res = await fetch("https://api.magicbox.tv/api/v1/ums/datasync/", {
      method: "POST",
      body,
    });
    const response = await res.json();

    return Response.json(response.data, { status: response.status });
  } catch (error) {
    const err = error;
    return Response.json(err?.response?.data, {
      status: err?.response?.status ?? 500,
    });
  }
}
