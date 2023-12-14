import css from "./ReviewsListItem.module.css";
export const ReviewsListItem = ({ dataReview }) => {
  return (
    <section className={css.reviewSection}>
      <h3>Author {dataReview.author} </h3>
      <p> {dataReview.content} </p>
    </section>
  );
};
