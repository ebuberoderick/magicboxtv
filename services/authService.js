import {
  apiWithOutAuth,
  getApiResponse,
  getErrorResponse,
  http,
} from "./httpService";

export const fetchGenresAPI = () =>
  apiWithOutAuth
    .get("/api/content/genre/")
    .then(getApiResponse)
    .catch(getErrorResponse);

export const fetchMovieInfoAPI = (formdata) =>
  apiWithOutAuth
    .get(`/api/content/contents/${formdata}`)
    .then(getApiResponse)
    .catch(getErrorResponse);

export const getMsisdn = () =>
  apiWithOutAuth
    .get(`/msisdn`)
    .then(getApiResponse)
    .catch(getErrorResponse);

export const getMagicBoxMsisdn = async () => {
  try {
    const { data } = await http({ baseUrl : "http://magicbox.tv", method: "GET", url: "/msisdn"});
    return data
  } catch (error) {
    return error
  }
}

export const getContentsAPI = (params = {}) =>
  apiWithOutAuth
    .get(`/api/content/contents`, { params })
    .then(getApiResponse)
    .catch(getErrorResponse);

export const postCampaign = async (url, payload) => {
  if (!payload.clickid)
    return { status: false, data: { message: "Click ID not found" } };
  try {
    const res = await apiWithOutAuth.post(url, payload);
    return getApiResponse(res);
  } catch (error) {
    return getErrorResponse(error);
  }
};
