import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export const Home = ({api}) => {
    const [trendings, setTrendings] = useState([]);
    const location = useLocation();
    useEffect(() => {
        api.getTrendings()
        .then(data => {
            // console.log(data.results);
            setTrendings(data.results);
        })
        .catch(err => {
            console.log(err);
        });
    }, [api]);

    return <main>
        <h1>Trendings today</h1>
        {trendings.length > 0 && 
            <ul>
                {trendings.map(({title, id}) => <li key={id}><NavLink to={`movies/${id}`} state={{from: location.pathname}}>{title}</NavLink></li>)}
            </ul>
        }
    </main>
}