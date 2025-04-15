import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../api/fetchMovieCast";
import { useParams, useSearchParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const res = await fetchMovieCast(movieId);
        setMovieCast(res);
      } catch (error) {
        console.log(error);
      }
    };

    getCast();
  }, [movieId]);

  return <div>MovieCast</div>;
};

export default MovieCast;
