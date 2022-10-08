// import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TMDB from "js/themoviedbAPI"

// const api = new TMDB("1cdff00a9c2b2133227357e455cd1931");

export const MovieDetails = () => {
    const {movieId} = useParams();
    return <main>
        <h1>{movieId}</h1>
    </main>
}