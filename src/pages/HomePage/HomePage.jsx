import { useEffect, useState } from "react";
import fetchTrendingMovies from "../../api/fetchTrendingMovies";

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
      <div>HomePage</div>
    </>
  );
};

export default HomePage;
