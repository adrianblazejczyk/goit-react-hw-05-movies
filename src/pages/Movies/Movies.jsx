import css from "./Movies.module.css";
import { searchMovies } from "../../services/apiTMDB";
import { MovieCards, SearchBar } from "../../components";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const [dataFilms, setDataFilms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchQuery(searchParams.get("query") || "");
  }, [searchParams]);

  useEffect(() => {}, [dataFilms]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlerOnClick = (eve) => {
    eve.preventDefault();
    setSearchParams({ query: searchQuery });
    searchMovies(searchQuery)
      .then(function (response) {
        setDataFilms(response.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  return (
    <main className={css.main}>
      <h1 className={css.titlePage}> Wyszkiwarka filmów </h1>
      <SearchBar
        handlerOnClick={handlerOnClick}
        searchQuery={searchQuery}
        handleInputChange={handleInputChange}
      />
      <MovieCards data={dataFilms} />
    </main>
  );
};

export default Movies;
