import axios, { AxiosError } from "axios";
import { BreedsResponse } from "./types";

const api = axios.create({
  baseURL: "https://dog.ceo/api",
});

api.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    const { data, status } = error.response!;
    switch (status) {
      case 400:
        console.error(data);
        break;
      case 401:
        console.error("unauthorised");
        break;
      case 404:
        console.error("/not-found");
        break;
      case 500:
        console.error("/server-error");
        break;
    }
    return Promise.reject(error);
  }
);

export const getBreeds = (): Promise<BreedsResponse> =>
  api.get("/breeds/list/all").then((response) => response.data);

export default api;
