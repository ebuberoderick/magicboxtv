import axios from "axios";
import ls from "localstorage-slim";
import { redirect } from 'next/navigation'

export const TOKEN = `Bearer ${ls.get("magicboxtv", { decrypt: true })}`;

export const apiWithOutAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST_URL || "http://localhost:3000",
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const apiWithAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST_URL || "http://localhost:3000",
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: TOKEN,
  },
});

apiWithOutAuth.interceptors.request.use(
  async (config) => {
    const msisdn = ls.get("magicboxtv", { decrypt: true });
    if (msisdn) {
      config.params = { ...config.params, msisdn };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiWithAuth.interceptors.request.use(
  async (config) => {
    const msisdn = ls.get("magicboxtv", { decrypt: true });
    if (msisdn) {
      config.params = { ...config.params, msisdn };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const http = async ({ requireToken = false, ...config }) => {
  const axiosInstance = requireToken ? apiWithAuth : apiWithOutAuth;
  const response = await axiosInstance(config);

  return response;
};

export const getApiResponse = (data) => {
  return {
    status: true,
    data: data.data,
  };
};

export const getErrorResponse = (error) => {
  if (error?.response?.status === 401) {
    Cookies.remove("magicboxtv");
    window !== "undefined" && window.location.reload();
  }
  if (error?.response?.status === 403) {
    redirect(error?.response?.data?.redirect_url);
  }

  return {
    status: false,
    data: error?.response?.data,
  };
};
