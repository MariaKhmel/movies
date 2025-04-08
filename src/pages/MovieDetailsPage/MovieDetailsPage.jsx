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

  return (
    <main>
      <div>
        <img />
        <div className={css.movieInfo}>
          <p className={css.highlightTitle}>{movie.title}</p>
          <p>User score : {}</p>
          <p className={css.highlightTitle}>Overview</p>
          <p>{movie.overview}</p>
          <p className={css.highlightTitle}>Genres</p>
          <Genres genres={genresList} />
        </div>
      </div>
      <div>
        <div>
          <img src={`https://image.tmdb.org/t/p/original/${movie.file_path}`} />
        </div>
        <p>Additional information</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </main>
  );
};

export default MovieDetailsPage;
