import { baseUrl, options } from "./apiConfig";

const fetchReviews = (movieId) => {
  return fetch(`${baseUrl}/${movieId}/reviews?language=en-US&page=1`, options)
    .then(res => res.json())
}

export { fetchReviews };