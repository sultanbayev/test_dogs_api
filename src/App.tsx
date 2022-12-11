import BreedsList from "./components/BreedsList";
import "./App.css";
import useBreedsReducer from "./hooks/useApp";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";

const App = () => {
  const { state } = useBreedsReducer();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (state.error) {
      setModalOpen(true);
    }
  }, [state.error]);

  return (
    <>
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
      <div className="main">
        {state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <BreedsList breeds={state.breeds} />
        )}
      </div>
    </>
  );
};

export default App;
