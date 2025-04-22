import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../api/fetchREviews";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    const getMovieCast = async () => {
      const reviews = await fetchReviews(movieId);
      setReviews(reviews.results);
    };
    getMovieCast();
  }, [movieId]);
};

export default MovieReviews;
