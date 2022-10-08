import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Review } from "components/Review/Review";

const Reviews = ({api}) => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        api.getMoviReviews(movieId)
        .then(data => {
            if(!data.results.length){
                return;
            }
            setReviews(data.results);
        })
        .catch(err => {
            console.log(err);
        })
    }, [movieId, api]);
    
    return <>
        {reviews.length > 0 ? 
        <ul>
           {reviews.map(item => <li key={item.author}><Review review={item}/></li>)}
        </ul>
        : <p>We don`t have anyu review to this movie.</p>}
    </>  
}

export default Reviews;