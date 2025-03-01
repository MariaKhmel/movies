import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieSearchValue = searchParams.get("query") || "";

  useEffect(() => {
    if (movieSearchValue === null) {
      return;
    }

    //move search by api
  }, [movieSearchValue]);

  return (
    <main>
      <form>
        <input type="text" name="input" />
        <button type="submit">Search</button>
      </form>
    </main>
  );
};

export default MoviesPage;
