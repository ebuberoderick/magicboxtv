import {
  apiWithOutAuth,
  getApiResponse,
  getErrorResponse,
} from "./httpService";

export const fetchGenresAPI = () =>
  apiWithOutAuth
    .get("/content/genre/")
    .then(getApiResponse)
    .catch(getErrorResponse);

export const fetchMovieInfoAPI = (formdata) =>
  apiWithOutAuth
    .get(`/content/contents/${formdata}`)
    .then(getApiResponse)
    .catch(getErrorResponse);

export const getMsisdn = () =>
  apiWithOutAuth
    .get(`/msisdn`)
    .then(getApiResponse)
    .catch(getErrorResponse);

export const getContentsAPI = (params = {}) =>
  apiWithOutAuth
    .get(`/content/contents`, { params })
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
