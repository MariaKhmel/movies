import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../api/fetchREviews";

const MovieReviews = () => {
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      const reviews = await fetchReviews(movieId);
      console.log(reviews);
    };
    getMovieCast();
  }, []);

  return <div>MovieReviews</div>;
};

export default MovieReviews;
