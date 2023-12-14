import React from "react";
import css from "./CastList.module.css";
import CastListItem from "../CastListItem/CastListItem";

const CastList = ({ dataCasts }) => {
  return (
    <ul className={css.listCast}>
      {dataCasts.map((item) => (
        <CastListItem key={item.id} dataCast={item} />
      ))}
    </ul>
  );
};

export default CastList;
