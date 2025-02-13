import axios from "axios";
// import Cookies from "js-cookie";
import ls from "localstorage-slim";
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.magicbox.tv/api/v1/";
// export const TOKEN = `Bearer ${Cookies.get("magicboxtv")}`
export const TOKEN = `Bearer ${ls.get("magicboxtv", { decrypt: true })}`


const timeoutConfig = {
  timeout: 30000,
  timeoutErrorMessage: "Server taking too long to respond. Try again.",
};

export const apiWithOutAuth = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  ...timeoutConfig,
});

export const apiWithAuth = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: TOKEN 
  },
  ...timeoutConfig,
});



apiWithOutAuth.interceptors.request.use(async(config) => {
  const msisdn = ls.get("magicboxtv", { decrypt: true })
  if (msisdn) {
    config.params = { ...config.params, msisdn };
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


apiWithAuth.interceptors.request.use(async(config) => {
  const msisdn = ls.get("magicboxtv", { decrypt: true })
  if (msisdn) {
    config.params = { ...config.params, msisdn };
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});



export const getApiResponse = (data) => {
  // errors
  return {
    status: true,
    data: data.data,
  };
};

export const getErrorResponse = (error) => {
  if (error.response.status === 401) {
    Cookies.remove('magicboxtv')
    window !== "undefined" && window.location.reload()
  }

  return {
    status: false,
    data: error?.response?.data,
  };
};