import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../api/fetchREviews";
import ReviewsList from "../ReviewsList/ReviewsList";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const reviews = await fetchReviews(movieId);
        setReviews(reviews.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p>We do not have any reviews for this movie</p>
      )}
    </div>
  );
};

export default MovieReviews;
