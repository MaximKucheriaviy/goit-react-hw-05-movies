import { useState, useEffect } from "react";
import { FilmList } from "components/FilmList/FilmList";
import { api } from "servises/themoviedbAPI";
const Home = ({isLoading}) => {
    const [trendings, setTrendings] = useState([]);
    useEffect(() => {
        isLoading(true);
        api.getTrendings()
        .then(data => {
            // console.log(data.results);
            setTrendings(data.results);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() =>{
            isLoading(false);
        })
    }, [isLoading]);

    return <main>
        <h1>Trendings today</h1>
        {trendings.length > 0 && 
            <FilmList list={trendings} path={'movies/'}/>
        }
    </main>
}

export default Home;