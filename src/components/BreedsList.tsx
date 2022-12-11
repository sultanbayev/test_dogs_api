import { Breed } from "../utils/types";
import BreedCard from "./BreedCard";

type BreedsListProps = {
  breeds: Breed[];
};

const BreedsList = ({ breeds }: BreedsListProps) => {
  return (
    <div className="list">
      {breeds.map(({ name, path }) => (
        <BreedCard key={name} name={name} path={path} />
      ))}
    </div>
  );
};

export default BreedsList;
