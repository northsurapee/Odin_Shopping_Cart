/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Rating from "../component/Rating";
import "../styles/ItemList.css"

export function ItemsList({ items }) {
  return (
    <div className="item-container">
      {items.map((item) => {
        return (
          <Link
            // to={`/product/${item.sku}`}
            className="item-link"
            key={item.sku}
          >
            <div className="top">
                <div className="image-container">
                    <img src={item.image} alt="item-image"/>
                </div>
                <p className="item-name">{item.name}</p>
                <Rating
                    itemRating={item.customerReviewAverage}
                    reviewCount={item.customerReviewCount}
                />
            </div>
            <span className="price">
              {item.onSale ? (
                <>
                  ${item.salePrice}
                  <div className="sale">
                    Sale
                  </div>
                </>
              ) : (
                <>${item.regularPrice}</>
              )}
            </span>
          </Link>
        );
      })}
    </div>
  );
}