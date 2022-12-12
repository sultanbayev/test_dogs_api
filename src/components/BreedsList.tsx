import { Breed } from "../utils/types";
import BreedCard from "./BreedCard";

type BreedsListProps = {
  breeds: Breed[];
  onImagesRequest: (id: string, path: string) => void;
};

const BreedsList = ({ breeds, onImagesRequest }: BreedsListProps) => {
  return (
    <div className="list">
      <h1>Breeds List:</h1>
      {breeds.map((breed) => (
        <BreedCard
          key={breed.id}
          breed={breed}
          onImagesRequest={onImagesRequest}
        />
      ))}
    </div>
  );
};

export default BreedsList;
