import { useEffect, useState } from "react";
import fetchTrendingMovies from "../../api/fetchTrendingMovies";
import MovieList from "../../components/MovieList/MovieList"''

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const movies = await fetchTrendingMovies();
      setTrendingMovies(movies.results);
    };

    getTrendingMovies();
  }, []);

  return (
    <>
      <MovieList movies={trendingMovies} />
      </>
  );
};

export default HomePage;
