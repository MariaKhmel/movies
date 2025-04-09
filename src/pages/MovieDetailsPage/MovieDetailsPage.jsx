import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import fetchMovieById from "../../api/fetchMobieById";
import Genres from "../../components/Genres/Genres";

import css from "./MovieDetailsPage.module.css";

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
  const defaultPoster =
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

  return (
    <main>
      <div className={css.movieCard}>
        <div className={css.posterCard}>
          <img
            src={`https://image.tmdb.org/t/p/original/${
              poster_path ?? defaultPoster
            }`}
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
      <div>
        <p>Additional information</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </main>
  );
};

export default MovieDetailsPage;
