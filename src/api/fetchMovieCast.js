const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGZjMzgzZTU5NzRlMmFjNTQ3YTZiNjU1ZDJkYTNiMCIsIm5iZiI6MTY5OTQ4NTM1NC42MTYsInN1YiI6IjY1NGMxNmFhNDFhNTYxMzM2YTI0OWZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._IOJlhxYcCifsMvMcRjCFRP4jv2Oe0nXKB0e0kdcs7Q";

const baseUrl = "https://api.themoviedb.org/3/movie";
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}


const fetchMovieCast = (movieId) => {
  return fetch(`${baseUrl}/${movieId}/credits`, options)
    .then(res => res.json())
    .then(data => data.cast);
};

export { fetchMovieCast };