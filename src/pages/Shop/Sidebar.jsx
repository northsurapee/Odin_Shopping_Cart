/* eslint-disable react/prop-types */
import { useSearchParams, Link } from "react-router-dom";
import "../../styles/Sidebar.css"; // Import the external CSS file

export function Sidebar({ currCategory, categories, onCategoryChange }) {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.has("sort") ? `?sort=${searchParams.get("sort")}` : "";

  const categoriesList = categories.map((c) => {
    const isActive = currCategory === c.id;

    return (
      <li key={c.id} className="mb-1">
        {isActive ? (
          <span className={`category-link active`}>{c.name}</span>
        ) : (
          <Link
            to={`/shop/category/${c.id}${sortBy}`}
            className={`category-link`}
            onClick={onCategoryChange}
          >
            {c.name}
          </Link>
        )}
      </li>
    );
  });

  return (
    <div className="sidebar-container">
      <div className="sidebar-sticky">
        <h2 className="sidebar-heading">Categories</h2>
        {currCategory && (
          <Link
            to={`/shop${sortBy}`}
            className="clear-category-link"
            onClick={onCategoryChange}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear Category
          </Link>
        )}
        <ul>{categoriesList}</ul>
      </div>
    </div>
  );
}
