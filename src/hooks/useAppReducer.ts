import { useReducer } from "react";
import { AppState } from "../utils/types";
import {
  FetchBreedsActions,
  FETCH_BREEDS_ERROR,
  FETCH_BREEDS_INIT,
  FETCH_BREEDS_SUCCESS,
  FETCH_BREED_IMAGES_ERROR,
  FETCH_BREED_IMAGES_INIT,
  FETCH_BREED_IMAGES_SUCCESS,
} from "./actions";

const initialState: AppState = {
  loading: false,
  breeds: [],
  error: false,
};

const reducer = (state: AppState, action: FetchBreedsActions): AppState => {
  switch (action.type) {
    case FETCH_BREEDS_INIT: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_BREEDS_SUCCESS: {
      return {
        ...state,
        loading: false,
        breeds: action.payload,
      };
    }
    case FETCH_BREEDS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case FETCH_BREED_IMAGES_INIT: {
      return {
        ...state,
        breeds: state.breeds.map((b) =>
          b.id === action.payload
            ? { ...b, images: { ...b.images, loading: true } }
            : b
        ),
      };
    }
    case FETCH_BREED_IMAGES_SUCCESS: {
      return {
        ...state,
        breeds: state.breeds.map((b) =>
          b.id === action.payload.id
            ? { ...b, images: { loading: false, urls: action.payload.images } }
            : b
        ),
      };
    }
    case FETCH_BREED_IMAGES_ERROR: {
      return {
        ...state,
        breeds: state.breeds.map((b) =>
          b.id === action.payload
            ? { ...b, images: { ...b.images, loading: false } }
            : b
        ),
      };
    }
    default:
      return state;
  }
};

const useAppReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};

export default useAppReducer;
