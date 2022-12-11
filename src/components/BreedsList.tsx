import { Breed } from "../utils/types";
import BreedCard from "./BreedCard";

type BreedsListProps = {
  breeds: Breed[];
};

const BreedsList = ({ breeds }: BreedsListProps) => {
  return (
    <div className="list">
      <h1>Breeds List:</h1>
      {breeds.map(({ name, path }) => (
        <BreedCard key={name} name={name} path={path} />
      ))}
    </div>
  );
};

export default BreedsList;
