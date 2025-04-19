import { baseUrl, options } from "./apiConfig";

const fetchMoviesByName = (query) => {
  return fetch(`${baseUrl}&page=1&query=${query}`, options)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));
}

export default fetchMoviesByName;