import useBreedsFetch from "../hooks/useBreedsFetch";
import BreedCard from "./BreedCard";

const BreedsList = () => {
  const breeds = useBreedsFetch();

  return (
    <div className="list">
      {breeds.map(({ name, path }) => (
        <BreedCard key={name} name={name} path={path} />
      ))}
    </div>
  );
};

export default BreedsList;
