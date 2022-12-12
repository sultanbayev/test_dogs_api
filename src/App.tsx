import BreedsList from "./components/BreedsList";
import "./App.css";
import useAppReducer from "./hooks/useAppReducer";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";
import useBreedsFetch from "./hooks/useBreedsFetch";
import useImagesRequest from "./hooks/useImagesRequest";

const App = () => {
  const { state, dispatch } = useAppReducer();
  const { open, setOpen } = useModal(state.error);
  useBreedsFetch(dispatch);
  const handleImagesRequest = useImagesRequest(dispatch);

  return (
    <>
      {open && <Modal onClose={() => setOpen(false)} />}
      <div className="main">
        {state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <BreedsList
            breeds={state.breeds}
            onImagesRequest={handleImagesRequest}
          />
        )}
      </div>
    </>
  );
};

export default App;
