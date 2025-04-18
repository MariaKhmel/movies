import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import fetchMovieById from "../../api/fetchMobieById";
import Genres from "../../components/Genres/Genres";

import css from "./MovieDetailsPage.module.css";
import { baseImgUrl, defaultPoster } from "../../helpers/detFullImgPath";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    const handleSearch = async () => {
      const movie = await fetchMovieById(movieId);
      setMovie(movie);
      setGenresList(movie.genres);
    };

    handleSearch();
  }, [movieId]);
  const { title, overview, genres, vote_average, poster_path } = movie;
  const roundedScore = Math.round(vote_average * 10);

  return (
    <main>
      <div className={css.movieCard}>
        <div className={css.posterCard}>
          <img
            src={`${baseImgUrl}${poster_path ?? defaultPoster}`}
            alt={title}
          />
        </div>
        <div>
          <p className={css.highlightTitle}>{title}</p>
          <p>User score : {roundedScore}% </p>
          <p className={css.highlightTitle}>Overview</p>
          <p>{overview}</p>
          <p className={css.highlightTitle}>Genres</p>
          <Genres genres={genres ? genresList : []} />
        </div>
      </div>
      <ul className={css.additionalInfoBlock}>
        <p>Additional information</p>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieDetailsPage;
