import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../api/fetchREviews";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    const getMovieCast = async () => {
      const reviews = await fetchReviews(movieId);
      setCast(reviews.results);
    };
    getMovieCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map((el) => (
          <li key={el.id}></li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
