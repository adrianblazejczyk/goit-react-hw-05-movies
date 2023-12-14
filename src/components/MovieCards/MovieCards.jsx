import css from "./MovieCards.module.css";
import { MovieCardsItem } from "../../components";

export const MovieCards = ({ data }) => {
  return (
    <ul className={css.listMovie}>
      {data.map((item) => (
        <MovieCardsItem key={item.id} dataFilm={item}></MovieCardsItem>
      ))}
    </ul>
  );
};
