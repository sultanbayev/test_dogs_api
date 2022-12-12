import { useCallback } from "react";
import { getBreedImages } from "../utils/api";
import {
  fetchBreedImagesError,
  fetchBreedImagesInit,
  fetchBreedImagesSuccess,
  FetchBreedsActions,
  fetchBreedsError,
} from "./actions";

const useImagesRequest = (dispatch: React.Dispatch<FetchBreedsActions>) => {
  const handleImagesRequest = useCallback(
    async (id: string, path: string) => {
      try {
        dispatch(fetchBreedImagesInit(id));
        const response = await getBreedImages(path);
        dispatch(fetchBreedImagesSuccess(id, response.message));
      } catch (error) {
        console.log(error);
        dispatch(fetchBreedImagesError(id));
        dispatch(fetchBreedsError());
      }
    },
    //eslint-disable-next-line
    []
  );

  return handleImagesRequest;
};

export default useImagesRequest;
