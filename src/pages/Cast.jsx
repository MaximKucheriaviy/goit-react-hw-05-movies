import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CastInfo } from "components/CastInfo/CastInfo";


const Cast = ({api}) => {
    const {movieId} = useParams();
    const [cast, setCast] = useState([]);
    useEffect(() => {
        api.getMoviCredits(movieId)
        .then(data => {
            setCast(data.cast)
        })
        .catch(err => {
            console.log(err);
        })
    }, [movieId, api]);
    
    return <>
        {cast.length > 0 &&
            <ul>
                {cast.map((item, index) => <li key={item.id + index}><CastInfo cast={item}/></li>)}
            </ul>
        }
    </>  
}

export default Cast;