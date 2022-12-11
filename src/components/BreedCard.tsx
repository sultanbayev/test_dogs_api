import React from "react";

type BreedCardProps = {
  name: string;
  path: string;
};

const BreedCard = ({ name, path }: BreedCardProps) => {
  return <div className="card">{name}</div>;
};

export default BreedCard;
