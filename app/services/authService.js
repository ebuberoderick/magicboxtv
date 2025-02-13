import { apiWithAuth, apiWithOutAuth, getApiResponse, getErrorResponse } from "./httpService";


export const fetchGenresAPI = () => apiWithOutAuth.get("/content/genre/").then(getApiResponse).catch(getErrorResponse);
