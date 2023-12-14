import css from "./SearchBar.module.css";
export const SearchBar = ({
  handlerOnClick,
  searchQuery,
  handleInputChange,
}) => {
  return (
    <form onSubmit={handlerOnClick}>
      <label>
        <input
          className={css.input}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="search for films"
        />
      </label>
      <button className={css.button} type="submit">
        Wyślij
      </button>
    </form>
  );
};
