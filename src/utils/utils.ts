import { Breed, BreedsResponseMessage } from "./types";
import { v4 as uuidv4 } from "uuid";

const capitalizeName = (name: string): string => {
  return name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
};

export const parseMessage = (message: BreedsResponseMessage): Breed[] => {
  const breeds: Breed[] = [];
  Object.keys(message).forEach((breed) => {
    if (message[breed].length === 0) {
      breeds.push({
        id: uuidv4(),
        name: capitalizeName(breed),
        path: `${breed}`,
        images: { loading: false, urls: [] },
      });
    } else {
      message[breed].forEach((subBreed: string) => {
        breeds.push({
          id: uuidv4(),
          name: capitalizeName(`${breed} ${subBreed}`),
          path: `${breed}/${subBreed}`,
          images: { loading: false, urls: [] },
        });
      });
    }
  });

  return breeds;
};
