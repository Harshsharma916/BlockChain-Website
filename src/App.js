import { useSelector } from "react-redux";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import Homepage from "./Containers/HomePage";

function App() {
  const loader = useSelector((state) => state.loader);
  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <>
          {/* <Header /> */}
          <Homepage />
        </>
      )}
    </div>
  );
}

export default App;
