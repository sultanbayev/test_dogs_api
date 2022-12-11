import { useReducer } from "react";
import { AppState } from "../utils/types";
import {
  FetchBreedsAction,
  FETCH_BREEDS_ERROR,
  FETCH_BREEDS_INIT,
  FETCH_BREEDS_SUCCESS,
} from "./actions";
import useBreedsFetch from "./useBreedsFetch";

const initialState: AppState = {
  loading: false,
  breeds: [],
  error: false,
};

const reducer = (state: AppState, action: FetchBreedsAction): AppState => {
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
    default:
      return state;
  }
};

const useBreedsReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useBreedsFetch(dispatch);

  return { state, dispatch };
};

export default useBreedsReducer;
