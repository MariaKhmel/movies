import { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  useEffect(() => {}, [movieId]);
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
