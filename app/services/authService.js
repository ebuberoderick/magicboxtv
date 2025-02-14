import { apiWithAuth, apiWithOutAuth, getApiResponse, getErrorResponse } from "./httpService";


export const fetchGenresAPI = () => apiWithOutAuth.get("/content/genre/").then(getApiResponse).catch(getErrorResponse);
export const fetchGenresMovieAPI = (formdata) => apiWithOutAuth.get(`content/contents/?genre=${formdata.slug}`).then(getApiResponse).catch(getErrorResponse);
export const fetchSeriesAPI = () => apiWithOutAuth.get("/content/contents/?category=tv-series").then(getApiResponse).catch(getErrorResponse);
export const fetchAPI = (formdata) => apiWithOutAuth.get(`/content/contents/?${formdata}`).then(getApiResponse).catch(getErrorResponse);
export const fetchMovieInfoAPI = (formdata) => apiWithOutAuth.get(`content/contents/${formdata}`).then(getApiResponse).catch(getErrorResponse);


// https://api.magicbox.tv/api/v1/content/contents/?category=tv-series
// https://api.magicbox.tv/api/v1/content/contents/?genre=animation
// http://api.magicbox.tv/api/v1/content/genre/
// http://api.magicbox.tv/api/v1/content/contents/?featured
// http://api.magicbox.tv/api/v1/content/contents/?featured
// http://api.magicbox.tv/api/v1/content/contents/?featured2
// http://api.magicbox.tv/api/v1/content/contents/?latest