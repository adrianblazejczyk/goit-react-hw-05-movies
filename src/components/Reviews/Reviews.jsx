import { getMovieReviews } from "../../services/apiTMDB";
import { ReviewsList } from "../../components";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Reviews = () => {
  const { productId } = useParams();
  const [dataReviews, setDataReviews] = useState();

  useEffect(() => {
    getMovieReviews(productId)
      .then((response) => {
        setDataReviews(response.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, [productId]);

  return (
    dataReviews && (
      <section>
        {console.log(dataReviews.lenght)}
        <ReviewsList dataReviews={dataReviews} />
      </section>
    )
  );
};

export default Reviews;
