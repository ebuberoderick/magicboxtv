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
