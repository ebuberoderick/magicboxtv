import { cache } from "react";
import {
  apiWithAuth,
  apiWithOutAuth,
  getApiResponse,
  getErrorResponse,
} from "./httpService";

export const fetchGenresAPI = () =>
  apiWithOutAuth
    .get("/api/content/genre/")
    .then(getApiResponse)
    .catch(getErrorResponse);

export const fetchGenresMovieAPI = (formdata) =>
  apiWithOutAuth
    .get(`/api/content/contents/?genre=${formdata.slug}`)
    .then(getApiResponse)
    .catch(getErrorResponse);

export const fetchSeriesAPI = () =>
  apiWithOutAuth
    .get("/api/content/contents/?category=tv-series")
    .then(getApiResponse)
    .catch(getErrorResponse);

export const fetchAPI = (formdata) =>
  apiWithOutAuth
    .get(`/api/content/contents/?${formdata}`)
    .then(getApiResponse)
    .catch(getErrorResponse);

export const fetchMovieInfoAPI = (formdata) =>
  apiWithOutAuth
    .get(`/api/content/contents/${formdata}`)
    .then(getApiResponse)
    .catch(getErrorResponse);

export const postCampaign = async (url, payload) => {
  if (!payload.clickid)
    return { status: false, data: { message: "Click ID not found" } };
  try {
    const res = await apiWithOutAuth.post(url, payload);
    return getApiResponse(res);
  } catch (error) {
    console.log(error?.response?.data, "lol");
    return getErrorResponse(error);
  }
};
