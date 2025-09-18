import "./search-bar.styles.css";

const SearchBar = ({ onChangeHandler }) => {
  return (
    <input
      type="search"
      className="search-bar-container"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBar;
