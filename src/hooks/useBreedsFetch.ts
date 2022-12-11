import { useEffect, useState } from "react";
import { getBreeds } from "../utils/api";
import { Breed } from "../utils/types";
import { parseBreedsMessage } from "../utils/utils";

const useBreedsFetch = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { message } = await getBreeds();
        setBreeds(parseBreedsMessage(message));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return breeds;
};

export default useBreedsFetch;
