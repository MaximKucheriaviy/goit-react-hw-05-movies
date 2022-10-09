import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Review } from "components/Review/Review";
import { api } from "servises/themoviedbAPI";

const Reviews = ({isLoading}) => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        isLoading(true);
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
        .finally(() =>{
            isLoading(false);
        })
    }, [movieId, isLoading]);
    
    return <>
        {reviews.length > 0 ? 
        <ul>
           {reviews.map(item => <li key={item.author}><Review review={item}/></li>)}
        </ul>
        : <p>We don`t have anyu review to this movie.</p>}
    </>  
}

export default Reviews;