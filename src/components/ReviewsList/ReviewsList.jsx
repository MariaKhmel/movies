import css from "./ReviewsList.module.css";

const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((el) => (
        <li key={el.id} className={css.reviewItem}>
          <p>{el.author_details.name}</p>
          <p>{el.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsList;
