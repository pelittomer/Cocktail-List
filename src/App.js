import { Route, Routes } from "react-router-dom";
import SingleCocktail from "./page/SingleCocktail";
import HomePage from "./page/HomePage"
import ErrorPage from "./page/ErrorPage"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="cocktail/:id" element={<SingleCocktail />} />
      </Routes>

    </div>
  );
}

export default App;
