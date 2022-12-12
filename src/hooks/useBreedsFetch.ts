import React, { useEffect } from "react";
import { getBreeds } from "../utils/api";
import { parseMessage } from "../utils/utils";
import {
  FetchBreedsActions,
  fetchBreedsError,
  fetchBreedsInit,
  fetchBreedsSuccess,
} from "./actions";

const useBreedsFetch = (dispatch: React.Dispatch<FetchBreedsActions>) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchBreedsInit());
        const response = await getBreeds();
        dispatch(fetchBreedsSuccess(parseMessage(response.message)));
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
