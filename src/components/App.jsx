import { Route, Routes} from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { Header } from "./Header/Header";
import { Loader } from "./Loader/Loader";


const Home = lazy(() => import("pages/Home"))
const Movies = lazy(() => import("pages/Movies"))
const MovieDetails = lazy(() => import("pages/MovieDetails"))
const Cast = lazy(() => import("pages/Cast"))
const Reviews = lazy(() => import("pages/Reviews"))




export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <Header/>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home isLoading={setIsLoading}/>}/>
          <Route path="movies" element={<Movies isLoading={setIsLoading}/>}/>
          <Route path="movies/:movieId" element={<MovieDetails isLoading={setIsLoading}/>}>
            <Route path="cast" element={<Cast isLoading={setIsLoading}/>}/>
            <Route path="reviews" element={<Reviews isLoading={setIsLoading}/>}/>
          </Route>
        </Routes>
      </Suspense>
      {isLoading && <Loader/>}
    </div>
  );
};
