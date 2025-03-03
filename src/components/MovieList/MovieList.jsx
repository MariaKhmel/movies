import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
