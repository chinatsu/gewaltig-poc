import { getEnv } from "@/util/env";
import axios from "axios";

export async function getApi() {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const client = axios.create({
    baseURL: backendUrl(),
    timeout: 10000,
    headers,
  });

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (getEnv().ENVIRONMENT === "development")
        console.log(JSON.stringify(error, null, 2));
      return Promise.reject(error);
    },
  );
  return client;
}

function backendUrl() {
  return getEnv().ENVIRONMENT !== "development"
    ? "https://gewaltig.net/api"
    : "http://localhost:8080";
}