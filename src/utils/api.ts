import axios from "axios";
import { BreedImagesResponse, BreedsResponse } from "./types";

const api = axios.create({
  baseURL: "https://dog.ceo/api",
});

export const getBreeds = (): Promise<BreedsResponse> =>
  api.get("/breeds/list/all").then((response) => response.data);

export const getBreedImages = (
  path: string,
  signal: AbortSignal
): Promise<BreedImagesResponse> =>
  api
    .get(`/breed/${path}/images/random/3`, { signal })
    .then((response) => response.data);
