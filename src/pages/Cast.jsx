import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CastInfo } from "components/CastInfo/CastInfo";
import { api } from "servises/themoviedbAPI";

const Cast = ({isLoading}) => {
    const {movieId} = useParams();
    const [cast, setCast] = useState([]);
    useEffect(() => {
        isLoading(true)
        api.getMoviCredits(movieId)
        .then(data => {
            setCast(data.cast)
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            isLoading(false);
        })
    }, [movieId, isLoading]);
    
    return <>
        {cast.length > 0 &&
            <ul>
                {cast.map((item, index) => <li key={item.id + index}><CastInfo cast={item}/></li>)}
            </ul>
            
        }
    </>  
}

export default Cast;