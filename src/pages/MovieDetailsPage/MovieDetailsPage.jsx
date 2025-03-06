import { Link, Outlet } from "react-router-dom";

const MovieDetailsPage = ({ movie }) => {
  return (
    <main>
      <div>
        <img />
        <div></div>
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
