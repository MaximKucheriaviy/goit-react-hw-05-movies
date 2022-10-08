import { useState, useEffect } from "react";
import { FilmList } from "components/FilmList/FilmList";

const Home = ({api, setIsLoading}) => {
    const [trendings, setTrendings] = useState([]);
    useEffect(() => {
        api.getTrendings()
        .then(data => {
            // console.log(data.results);
            setTrendings(data.results);
        })
        .catch(err => {
            console.log(err);
        })
    }, [api, setIsLoading]);

    return <main>
        <h1>Trendings today</h1>
        {trendings.length > 0 && 
            <FilmList list={trendings} path={'movies/'}/>
        }
    </main>
}

export default Home;