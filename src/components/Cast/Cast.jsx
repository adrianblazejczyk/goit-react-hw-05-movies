import { getMovieCredits } from "../../services/apiTMDB";
import CastList from "../CastList/CastList";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
const Cast = () => {
  const { productId } = useParams();
  const [dataCasts, setDataCasts] = useState();

  useEffect(() => {
    getMovieCredits(productId)
      .then((response) => {
        setDataCasts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  return (
    <>
      {dataCasts ? (
        <section>
          <CastList dataCasts={dataCasts.cast} />
        </section>
      ) : (
        <section>
          <p>Not fund</p>
        </section>
      )}
    </>
  );
};
export default Cast;
