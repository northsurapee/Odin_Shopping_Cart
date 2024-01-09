/* eslint-disable react/prop-types */
import { useId } from "react";
import { useSearchParams } from "react-router-dom";
import "../../styles/SortItems.css"

export function SortItems({ onChange }) {
  const selectId = useId();
  const [searchParams, setSearchParams] = useSearchParams();
  const inputValue = searchParams.get("sort") || "";

  return (
    <div className="sort-container">
      <span className="sort-by-text">Sort by</span>
      <select
        name={selectId}
        id={selectId}
        className="selector"
        value={inputValue}
        onChange={(e) => {
          searchParams.delete("page");
          // Select sort option
          if (e.target.value !== "") {
            searchParams.set("sort", e.target.value);
          // Default
          } else {
            searchParams.delete("sort");
          }
          setSearchParams(searchParams);

          onChange();
        }}
      >
        <option value="">Popularity</option>
        <option value="regularPrice.asc">Price Low to High</option>
        <option value="regularPrice.dsc">Price High to Low</option>
        <option value="name.asc">A - Z</option>
        <option value="name.dsc">Z - A</option>
      </select>
    </div>
  );
}