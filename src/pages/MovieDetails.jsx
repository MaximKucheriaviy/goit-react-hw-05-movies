import { useState, useEffect, Suspense } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import { FinmInfo } from "components/FilmInfo/FilmInfo";
import { StyledLink } from "./MovieDetailsStyled.jsx";
import { api } from "servises/themoviedbAPI";
import { Loader } from "components/Loader/Loader.jsx";

const MovieDetails = ({isLoading}) => {
    const location = useLocation();
    const {movieId} = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    useEffect(() => {
        isLoading(true);
        api.getMoviInfo(movieId)
        .then(data => {
            setMovieInfo(data);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            isLoading(false);
        })
    }, [movieId, isLoading]);

    return <main>
        <StyledLink to={location.state ? location.state.from : "/"}>go back</StyledLink>
        {movieInfo.title && <FinmInfo movieInfo={movieInfo} backLocation={location.state ?? "/"}/>}
        <Suspense fallback={<Loader/>}>
            <Outlet/>
        </Suspense>
    </main>
}

export default MovieDetails;