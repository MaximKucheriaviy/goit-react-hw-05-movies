import { Header } from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";


export const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Home/>}/>
        <Route path="/movies/:movieId" element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
};
