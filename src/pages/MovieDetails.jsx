import { useState, useEffect, Suspense } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import { FinmInfo } from "components/FilmInfo/FilmInfo";
import { StyledLink } from "./MovieDetailsStyled.jsx";

const MovieDetails = ({api, setIsLoading}) => {
    const location = useLocation();
    const {movieId} = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    useEffect(() => {
        api.getMoviInfo(movieId)
        .then(data => {
            setMovieInfo(data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [movieId, api, setIsLoading]);

    return <main>
        <StyledLink to={location.state ? location.state.from : "/"}>go back</StyledLink>
        {movieInfo.title && <FinmInfo movieInfo={movieInfo} backLocation={location.state ?? "/"}/>}
        <Suspense>
            <Outlet/>
        </Suspense>
    </main>
}

export default MovieDetails;