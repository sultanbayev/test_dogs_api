import axios from "axios";
import { BreedsResponse } from "./types";

const api = axios.create({
  baseURL: "https://dog.ceo/api",
});

export const getBreeds = (): Promise<BreedsResponse> =>
  api.get("/breeds/list/all").then((response) => response.data);

export default api;
