const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGZjMzgzZTU5NzRlMmFjNTQ3YTZiNjU1ZDJkYTNiMCIsIm5iZiI6MTY5OTQ4NTM1NC42MTYsInN1YiI6IjY1NGMxNmFhNDFhNTYxMzM2YTI0OWZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._IOJlhxYcCifsMvMcRjCFRP4jv2Oe0nXKB0e0kdcs7Q";

const baseUrl = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
const options = {
  headers: {
    Authorization: API_KEY
  }
}
const fetchTrendingMovies = () => {
  return fetch(`${baseUrl}&page=1`, options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(console.error(=>cl);
  )
}
export default fetchTrendingMovies;

// fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));