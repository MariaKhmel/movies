import { options } from "./apiConfig";

const fetchTrendingMovies = () => {
  return fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(res => res.json())
    .then(data => data)
}

export default fetchTrendingMovies;
