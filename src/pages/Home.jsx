import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TMDB from "js/themoviedbAPI"

const api = new TMDB("1cdff00a9c2b2133227357e455cd1931");

export const Home = () => {
    const [trendings, setTrendings] = useState([]);

    useEffect(() => {
        api.getTrendings()
        .then(data => {
            console.log(data.results);
            setTrendings(data.results);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return <main>
        <h1>Trindings today</h1>
        {trendings.length > 0 && 
        <ul>
            {trendings.map(({title, id}) => <li key={id}><NavLink to={`movies/${title}`}>{title}</NavLink></li>)}
        </ul>
        }
    </main>
}