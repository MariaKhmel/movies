import { useEffect } from "react";
import { fetchMovieCast } from "../../api/fetchMovieCast";

const MovieCast = ({ movieId }) => {
  useEffect(() => {
    const res = fetchMovieCast(movieId);
    console.log(res);
  }, [movieId]);

  return <div>MovieCast</div>;
};

export default MovieCast;
