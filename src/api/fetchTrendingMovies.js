import { baseUrl, options } from "./apiConfig";

const fetchTrendingMovies = () => {
  return fetch(`${baseUrl}&page=1`, options)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));
}

export default fetchTrendingMovies;
