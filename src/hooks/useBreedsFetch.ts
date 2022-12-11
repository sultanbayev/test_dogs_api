import React, { useEffect } from "react";
import { getBreeds } from "../utils/api";
import { BreedsResponse } from "../utils/types";
import { parseBreedsMessage } from "../utils/utils";
import {
  FetchBreedsAction,
  fetchBreedsError,
  fetchBreedsInit,
  fetchBreedsSuccess,
} from "./actions";

const useBreedsFetch = (dispatch: React.Dispatch<FetchBreedsAction>) => {
  const onSuccess = (response: BreedsResponse) =>
    fetchBreedsSuccess(parseBreedsMessage(response.message));

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchBreedsInit());
        const response = await getBreeds();

        if (response.status === "success") {
          dispatch(onSuccess(response));
        } else {
          dispatch(fetchBreedsError());
        }
      } catch (error) {
        console.error(error);
        dispatch(fetchBreedsError());
      }
    };

    fetchData();

    //eslint-disable-next-line
  }, []);
};

export default useBreedsFetch;
