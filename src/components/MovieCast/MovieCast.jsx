import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../api/fetchMovieCast";
import { useParams } from "react-router-dom";
import CastCard from "../CastCard/CastCard";
import css from "./MovieCast.module.css";

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

  const slicedCast = movieCast.slice(0, 5);

  return (
    <ul>
      {slicedCast.map((el) => (
        <li key={el.id} className={css.card}>
          <CastCard castMember={el} />
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
