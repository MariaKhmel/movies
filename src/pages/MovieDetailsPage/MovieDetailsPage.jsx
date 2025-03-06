import { NavLink } from "react-router-dom";

const MovieDetailsPage = ({ movie }) => {
  return (
    <section>
      <div>
        <img />
        <div></div>
      </div>
      <div>
        <p>Additional information</p>
        <NavLink>Cast</NavLink>
        <NavLink>Reviews</NavLink>
      </div>
    </section>
  );
};

export default MovieDetailsPage;
// MovieCast і MovieReviews
