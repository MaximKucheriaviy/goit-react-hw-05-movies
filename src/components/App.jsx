import { Route, Routes } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { Header } from "./Header/Header";
import { Loader } from "./Loader/Loader";
import TMDB from "js/themoviedbAPI";

const Home = lazy(() => import("pages/Home"))
const Movies = lazy(() => import("pages/Movies"))
const MovieDetails = lazy(() => import("pages/MovieDetails"))
const Cast = lazy(() => import("pages/Cast"))
const Reviews = lazy(() => import("pages/Reviews"))

const api = new TMDB("1cdff00a9c2b2133227357e455cd1931");


export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <Header/>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home api={api} setIsLoading={setIsLoading}/>}/>
          <Route path="movies" element={<Movies api={api} setIsLoading={setIsLoading}/>}/>
          <Route path="movies/:movieId" element={<MovieDetails api={api} setIsLoading={setIsLoading}/>}>
            <Route path="cast" element={<Cast api={api}/>}/>
            <Route path="reviews" element={<Reviews api={api}/>}/>
          </Route>
        </Routes>
      </Suspense>
      {isLoading && <Loader/>}
    </div>
  );
};
