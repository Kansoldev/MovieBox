import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;
