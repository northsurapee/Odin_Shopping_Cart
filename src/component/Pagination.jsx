/* eslint-disable react/prop-types */
import { useSearchParams, useLocation, Link } from "react-router-dom";
import { isNumber } from "../utils";
import "../styles/Pagination.css"

const createRange = (startingNum, length) =>
  Array.from({ length }, (_, i) => startingNum + i);

function createPagination(currPage, totalPages, siblings = 3) {
  if (![currPage, totalPages, siblings].every((n) => isNumber(n) && n > 0))
    throw new Error("All parameters must be numbers and greater than zero");

  const DOTS = "...";

  // Only for the starting pages
  if (currPage - siblings <= 2) {
    return currPage + siblings + 1 >= totalPages
      ? createRange(1, totalPages)
      : [...createRange(1, currPage + siblings), DOTS, totalPages];
  }

  const startingPage = currPage - siblings;
  if (currPage >= totalPages - (siblings + 1)) {
    // ending
    const len = totalPages - startingPage + 1;
    return [1, DOTS, ...createRange(startingPage, len)];
  } else {
    // middle
    const len = siblings * 2 + 1;
    return [1, DOTS, ...createRange(startingPage, len), DOTS, totalPages];
  }
}

function getUrlParams(currParams) {
  const newParams = new URLSearchParams();

  currParams.has("search") ? newParams.append("search", currParams.get("search")) : null;
  currParams.has("sort") ? newParams.append("sort", currParams.get("sort")) : null;

  return newParams.size > 0 ? `&${newParams}` : "";
}

function Pagination({ currPage, totalPages, siblings, onPageChange }) {
  const location = useLocation();
  const [params] = useSearchParams();
  const pages = createPagination(currPage, totalPages, siblings);
  const extraParams = getUrlParams(params);

  return (
    <nav className="pagination-bar">
      {pages.map((page, i) => {
        if (page === "...") return <span key={i}>···</span>;

        const path = `${location.pathname}?page=${page}${extraParams}`;

        return currPage !== page ? (
          <Link
            key={i}
            to={path}
            className="other-page"
            onClick={onPageChange}
          >
            {page}
          </Link>
        ) : (
          <span
            key={i}
            className="current-page"
          >
            {page}
          </span>
        );
      })}
    </nav>
  );
}

export { Pagination };