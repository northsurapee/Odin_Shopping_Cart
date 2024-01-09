/* eslint-disable react/prop-types */
import "../styles/Price.css"

export default function Price({ regularPrice, salePrice, onSale }) {
  const createPriceElement = (price) => {
    return (
      <div>
        <span className="price-symbol">$</span>
        <span className="price-value">{price}</span>
      </div>
    );
  };

  return (
    <div className="price-container">
      {onSale ? (
        <>
          <span className="regular-price">${regularPrice}</span>
          {createPriceElement(salePrice)}
        </>
      ) : (
        <>{createPriceElement(regularPrice)}</>
      )}
    </div>
  );
}
