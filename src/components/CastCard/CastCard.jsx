const CastCard = ({ castMember }) => {
  const { original_name, character, profile_path } = castMember;
  return (
    <div>
      <img alt={original_name} />
      <p>{original_name}</p>
      <p>Character:{character}</p>
    </div>
  );
};

export default CastCard;
