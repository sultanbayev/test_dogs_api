import React from "react";
import { Breed } from "../utils/types";

type BreedCardProps = {
  breed: Breed;
  onImagesRequest: (id: string, path: string) => void;
};

const BreedCard = ({ breed, onImagesRequest }: BreedCardProps) => {
  const { id, name, path, images } = breed;

  const handleClick = () => {
    onImagesRequest(id, path);
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <button onClick={handleClick}>
        {images.loading
          ? "Загрузка..."
          : images.urls.length === 0
          ? "Показать"
          : "Обновить"}
      </button>
      <div className="images-list">
        {images.urls.map((url) => (
          <img key={url} className="image" src={url} height={200} alt={name} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(BreedCard);
