import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import fetchMovieById from "../../api/fetchMobieById";
import Genres from "../../components/Genres/Genres";

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
        <div>
          <p>{movie.title}</p>
          <p>User score : {}</p>
          <p>Overview</p>
          <p>{movie.overview}</p>
          <p>Genres</p>
          <Genres genres={genresList} />
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
