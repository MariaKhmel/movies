import { Link, Outlet } from "react-router-dom";

const MovieDetailsPage = ({ movie }) => {
  // const { title } = movie;
  return (
    <main>
      <div>
        <img />
        <div>
          {/* <p>{title}</p> */}
          <p>User score : {}</p>
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
