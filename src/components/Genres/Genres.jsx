import css from "./Genres.module.css";

const Genres = ({ genres }) => {
  return (
    <ul className={css.genresList}>
      {genres.map((el) => (
        <li key={el.id}>
          <p>{el.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Genres;
