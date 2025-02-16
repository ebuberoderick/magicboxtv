import { cache } from "react";
import {
  apiWithAuth,
  apiWithOutAuth,
  getApiResponse,
  getErrorResponse,
} from "./httpService";

export const fetchGenresAPI = cache(() =>
  apiWithOutAuth
    .get("/api/content/genre/")
    .then(getApiResponse)
    .catch(getErrorResponse)
);
export const fetchGenresMovieAPI = cache((formdata) =>
  apiWithOutAuth
    .get(`/api/content/contents/?genre=${formdata.slug}`)
    .then(getApiResponse)
    .catch(getErrorResponse)
);
export const fetchSeriesAPI = cache(() =>
  apiWithOutAuth
    .get("/api/content/contents/?category=tv-series")
    .then(getApiResponse)
    .catch(getErrorResponse)
);
export const fetchAPI = cache((formdata) =>
  apiWithOutAuth
    .get(`/api/content/contents/?${formdata}`)
    .then(getApiResponse)
    .catch(getErrorResponse)
);
export const fetchMovieInfoAPI = cache((formdata) =>
  apiWithOutAuth
    .get(`/api/content/contents/${formdata}`)
    .then(getApiResponse)
    .catch(getErrorResponse)
);
