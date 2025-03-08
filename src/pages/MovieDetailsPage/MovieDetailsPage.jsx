import { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import fetchMovieById from "../../api/fetchMobieById";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  useEffect(() => {
    const handleSearch = async () => {
      const movie = fetchMovieById(movieId);
      console.log(movie);
    };
  }, [movieId]);
  return (
    <main>
      <div>
        <img />
        <div>
          {/* <p>{title}</p> */}
          <p>User score : {}</p>
          <p>Overview</p>
          <p>Genres</p>
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
