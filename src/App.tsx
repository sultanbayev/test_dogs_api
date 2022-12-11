import BreedsList from "./components/BreedsList";
import "./App.css";
import useBreedsReducer from "./hooks/useApp";

const App = () => {
  const { state } = useBreedsReducer();

  if (state.loading) {
    return <div>Loading...</div>;
  } else {
    return <BreedsList breeds={state.breeds} />;
  }
};

export default App;
