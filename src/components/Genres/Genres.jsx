const Genres = ({ genres }) => {
  return (
    <ul>
      {genres.map((el) => (
        <li key={el.id}>
          <p>{el.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Genres;
