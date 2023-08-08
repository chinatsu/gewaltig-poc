import { getEnv } from "@/util/env";
import axios from "axios";

export async function getApi() {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const client = axios.create({
    baseURL: backendUrl(),
    timeout: 1000,
    headers,
  });

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (getEnv().NODE_ENV !== "production")
        console.log(JSON.stringify(error, null, 2));
      return Promise.reject(error);
    },
  );
  return client;
}

function backendUrl() {
  return getEnv().NODE_ENV === "production"
    ? "https://gewaltig.net/api"
    : "http://localhost:8080";
}