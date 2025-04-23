import { baseUrl, options } from "./apiConfig";

const fetchReviews = (movieId) => {
  return fetch(`${baseUrl}/${movieId}/reviews`, options)
    .then(res => res.json())

}

export { fetchReviews };