import { Routes, Route } from "react-router-dom";
import CurrencyCalculator from "../Containers/CurrencyCalculator";
import Homepage from "../Containers/HomePage";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/convertToBTC" element={<CurrencyCalculator />} />
    </Routes>
  );
};

export default Main;
