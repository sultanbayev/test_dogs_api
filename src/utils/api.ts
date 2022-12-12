import axios from "axios";
import { BreedImagesResponse, BreedsResponse } from "./types";

const api = axios.create({
  baseURL: "https://dog.ceo/api",
});

export const getBreeds = (): Promise<BreedsResponse> =>
  api.get("/breeds/list/all").then((response) => response.data);

export const getBreedImages = (path: string): Promise<BreedImagesResponse> =>
  api.get(`/breed/${path}/images/random/3`).then((response) => response.data);
