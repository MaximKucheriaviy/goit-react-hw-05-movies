import { SearchForm } from "components/SearchFrom/SearchFrom"
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { FilmList } from "components/FilmList/FilmList";



const Movies = ({api, setIsLoading}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    const [films, setFilms] = useState([]);
    useEffect(() => {
        if(!keyword){
            return;
        }
        setIsLoading(true);
        api.getMoviByKeyword(keyword)
        .then(data => {
            if(data.results.length === 0){
                return;
            }
            setFilms(data.results);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [keyword, api, setIsLoading])
    return<main>
        <SearchForm onSubmit={setSearchParams}/>
        {films.length > 0 && 
            <FilmList list={films}/>
        }
    </main>
}

export default Movies;