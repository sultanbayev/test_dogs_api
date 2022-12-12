export type BreedsResponse = {
  message: BreedsResponseMessage;
  status: string;
};

export type BreedImagesResponse = {
  message: string[];
  status: string;
};

export type BreedsResponseMessage = {
  [breed: string]: string[];
};

export type Breed = {
  id: string;
  name: string;
  path: string;
  images: { loading: boolean; urls: string[] };
};

export type AppState = {
  loading: boolean;
  breeds: Breed[];
  error: boolean;
};
