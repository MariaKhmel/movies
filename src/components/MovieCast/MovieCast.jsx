import { useEffect } from "react";
import { fetchMovieCast } from "../../api/fetchMovieCast";
import { useParams, useSearchParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  useEffect(() => {
    const getCast = async () => {
      const res = await fetchMovieCast(movieId);
      console.log(res);
    };
    getCast();
  }, [movieId]);

  return <div>MovieCast</div>;
};

export default MovieCast;
