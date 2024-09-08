import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter, setFilterValue } from "../../redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);
  const handleFilter = (searchEvent) => {
    const value = searchEvent.target.value;
    const action = setFilterValue(value);
    dispatch(action);
  };

  return (
    <label className={css.searchBox}>
      <span>Find contact by name</span>
      <input
        className={css.searchInput}
        type="text"
        value={filterValue}
        onChange={handleFilter}
        required
      ></input>
    </label>
  );
}

export default SearchBox;
