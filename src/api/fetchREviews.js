import { baseUrl, options } from "./apiConfig";

const fetchReviews = (movieId) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, options)
    .then(res => res.json())

}

export { fetchReviews };