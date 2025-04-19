import { baseUrl, options } from "./apiConfig";

const fetchMovieCast = (movieId) => {
  return fetch(`${baseUrl}/${movieId}/credits`, options)
    .then(res => res.json())
    .then(data => data.cast);
};

export { fetchMovieCast };