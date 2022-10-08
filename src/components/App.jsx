import { Header } from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import { Cast } from "pages/Cast";
import { Reviews } from "pages/Reviews";
import TMDB from "js/themoviedbAPI";

const api = new TMDB("1cdff00a9c2b2133227357e455cd1931");

export const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home api={api}/>}/>
        <Route path="/movies" element={<div>FIND SYSTEM</div>}/>
        <Route path="/movies/:movieId" element={<MovieDetails api={api}/>}>
          <Route path="cast" element={<Cast api={api}/>}/>
          <Route path="reviews" element={<Reviews api={api}/>}/>
        </Route>
      </Routes>
    </div>
  );
};
