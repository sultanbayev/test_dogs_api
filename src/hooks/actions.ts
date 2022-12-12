import { Breed } from "../utils/types";

export const FETCH_BREEDS_INIT = "FETCH_BREEDS_INIT";
export const FETCH_BREEDS_SUCCESS = "FETCH_BREEDS_SUCCESS";
export const FETCH_BREEDS_ERROR = "FETCH_BREEDS_ERROR";

export const FETCH_BREED_IMAGES_INIT = "FETCH_BREED_IMAGES_INIT";
export const FETCH_BREED_IMAGES_SUCCESS = "FETCH_BREED_IMAGES_SUCCESS";
export const FETCH_BREED_IMAGES_ERROR = "FETCH_BREED_IMAGES_ERROR";

interface FetchBreedsInitAction {
  type: typeof FETCH_BREEDS_INIT;
}

interface FetchBreedsSuccessAction {
  type: typeof FETCH_BREEDS_SUCCESS;
  payload: Breed[];
}

interface FetchBreedsErrorAction {
  type: typeof FETCH_BREEDS_ERROR;
}

interface FetchBreedImagesInitAction {
  type: typeof FETCH_BREED_IMAGES_INIT;
  payload: string;
}

interface FetchBreedImagesSuccessAction {
  type: typeof FETCH_BREED_IMAGES_SUCCESS;
  payload: { id: string; images: string[] };
}

interface FetchBreedImagesErrorAction {
  type: typeof FETCH_BREED_IMAGES_ERROR;
  payload: string;
}

export type FetchBreedsActions =
  | FetchBreedsInitAction
  | FetchBreedsSuccessAction
  | FetchBreedsErrorAction
  | FetchBreedImagesInitAction
  | FetchBreedImagesSuccessAction
  | FetchBreedImagesErrorAction;

export const fetchBreedsInit = (): FetchBreedsActions => {
  return {
    type: FETCH_BREEDS_INIT,
  };
};

export const fetchBreedsSuccess = (breeds: Breed[]): FetchBreedsActions => {
  return {
    type: FETCH_BREEDS_SUCCESS,
    payload: breeds,
  };
};

export const fetchBreedsError = (): FetchBreedsActions => {
  return {
    type: FETCH_BREEDS_ERROR,
  };
};

export const fetchBreedImagesInit = (id: string): FetchBreedsActions => {
  return {
    type: FETCH_BREED_IMAGES_INIT,
    payload: id,
  };
};

export const fetchBreedImagesSuccess = (
  id: string,
  images: string[]
): FetchBreedsActions => {
  return {
    type: FETCH_BREED_IMAGES_SUCCESS,
    payload: { id, images },
  };
};

export const fetchBreedImagesError = (id: string): FetchBreedsActions => {
  return {
    type: FETCH_BREED_IMAGES_ERROR,
    payload: id,
  };
};
