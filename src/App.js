import { useSelector } from "react-redux";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import CurrencyCalculator from "./Containers/CurrencyCalculator";
import Homepage from "./Containers/HomePage";
import Main from "./Routes";

function App() {
  const loader = useSelector((state) => state.loader);
  return <>{loader ? <Loader /> : <Main />}</>;
}

export default App;
