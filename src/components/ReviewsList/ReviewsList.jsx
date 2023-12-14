import { ReviewsListItem } from "../../components";
export const ReviewsList = ({ dataReviews }) => {
  return (
    <ul>
      {dataReviews.map((item) => (
        <ReviewsListItem key={item.id} dataReview={item} />
      ))}
    </ul>
  );
};
