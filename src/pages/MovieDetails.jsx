import { useState, useEffect } from "react";
import { useParams, NavLink, useLocation, Outlet } from "react-router-dom";
import { FinmInfo } from "components/FilmInfo/FilmInfo";

export const MovieDetails = ({api}) => {
    const location = useLocation();
    console.log(location);
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
    }, [movieId, api]);

    return <main>
        <NavLink to={location.state ? location.state.from : "/"}>go back</NavLink>
        {movieInfo.title && <FinmInfo movieInfo={movieInfo} backLocation={location.state ?? "/"}/>}
        <Outlet/>
    </main>
}