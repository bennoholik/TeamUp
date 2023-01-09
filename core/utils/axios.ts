import axios, {
  // AxiosError,
  // AxiosInstance,
  AxiosRequestConfig,
  // AxiosResponse,
} from "axios";
import getConfig from "next/config";
import { getCookieToken } from "./cookie";

const {publicRuntimeConfig}=getConfig();



export const instance = axios.create({
  withCredentials: true,
  baseURL: publicRuntimeConfig.backendUrl,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    "Access-Control-Allow-Origin": "*",
  },
});
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getCookieToken();
    if (token) {
      config.headers = { authorization: token };
      return config;
    }
    return config;
  },
  () => {
    return;
  },
);
