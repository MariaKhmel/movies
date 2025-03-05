import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import fetchMoviesByName from "../../api/fetchMoviesByName";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieSearchValue = searchParams.get("query") || "";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movieSearchValue === null) {
      return;
    }
    const handleSearch = async () => {
      try {
        const movies = await fetchMoviesByName(movieSearchValue);
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      }
    };

    handleSearch();
  }, [movieSearchValue]);

  const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputValue = form.elements.input.value;
    if (inputValue === "") {
      alert("Please enter a value!");
    }
    updateQueryString(inputValue);
    form.reset();
  };

  return (
    <main>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <input type="text" name="input" />
        <button type="submit">Search</button>
      </form>
      {movieSearchValue && <MovieList movies={movies} />}
    </main>
  );
};

export default MoviesPage;
