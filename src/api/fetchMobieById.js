import { baseUrl, options } from "./apiConfig";

const fetchMovieById = movieId => {
  return fetch(`${baseUrl}/${movieId}`, options).then(res => res.json()).then(data => data)
}

export default fetchMovieById;