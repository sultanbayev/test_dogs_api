export type BreedsResponse = {
  message: BreedsResponseMessage;
  status: string;
};

export type BreedsResponseMessage = {
  [breed: string]: string[];
};

export type Breed = {
  name: string;
  path: string;
};