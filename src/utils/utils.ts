import { Breed, BreedsResponseMessage } from "./types";

const capitalizeName = (name: string): string => {
  return name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
};

export const parseBreedsMessage = (message: BreedsResponseMessage): Breed[] => {
  const breeds: Breed[] = [];
  Object.keys(message).forEach((breed) => {
    if (message[breed].length === 0) {
      breeds.push({ name: capitalizeName(breed), path: `/${breed}` });
    } else {
      message[breed].forEach((subBreed: string) => {
        breeds.push({
          name: capitalizeName(`${breed} ${subBreed}`),
          path: `/${breed}/${subBreed}`,
        });
      });
    }
  });

  return breeds;
};
