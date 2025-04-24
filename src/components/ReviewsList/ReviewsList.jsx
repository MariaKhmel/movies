const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((el) => (
        <li key={el.id}></li>
      ))}
    </ul>
  );
};

export default ReviewsList;
