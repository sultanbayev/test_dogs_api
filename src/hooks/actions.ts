import { Breed } from "../utils/types";

export const FETCH_BREEDS_INIT = "FETCH_BREEDS_INIT";
export const FETCH_BREEDS_SUCCESS = "FETCH_BREEDS_SUCCESS";
export const FETCH_BREEDS_ERROR = "FETCH_BREEDS_ERROR";

interface FetchBreedsInit {
  type: typeof FETCH_BREEDS_INIT;
}

interface FetchBreedsSuccess {
  type: typeof FETCH_BREEDS_SUCCESS;
  payload: Breed[];
}

interface FetchBreedsError {
  type: typeof FETCH_BREEDS_ERROR;
}

export type FetchBreedsAction =
  | FetchBreedsInit
  | FetchBreedsSuccess
  | FetchBreedsError;

export function fetchBreedsInit(): FetchBreedsInit {
  return {
    type: FETCH_BREEDS_INIT,
  };
}
export function fetchBreedsSuccess(breeds: Breed[]): FetchBreedsSuccess {
  return {
    type: FETCH_BREEDS_SUCCESS,
    payload: breeds,
  };
}
export function fetchBreedsError(): FetchBreedsError {
  return {
    type: FETCH_BREEDS_ERROR,
  };
}
