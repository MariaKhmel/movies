import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import fetchMoviesByName from "../../api/fetchMoviesByName";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieSearchValue = searchParams.get("query") || "";

  useEffect(() => {
    if (movieSearchValue === null) {
      return;
    }

    const movies = fetchMoviesByName(movieSearchValue);

    //move search by api
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
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="input" />
        <button type="submit">Search</button>
      </form>
    </main>
  );
};

export default MoviesPage;
