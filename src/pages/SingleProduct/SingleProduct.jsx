/* eslint-disable react/prop-types */
import "../../styles/SingleProduct.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Price from "../../component/Price";
import { Carousel } from "./Carousel";
import { AdditionalInfo } from "./AdditionalInfo";
import Rating from "../../component/Rating";
import { decode } from "html-entities";

export default function SingleProduct({ onAdd }) {
  console.log("Render-SingleProduct");
  const { id } = useParams();
  const [loading, error, rawData] = useFetch(
    `https://api.bestbuy.com/v1/products(sku=${id})?apiKey=uGV5YibQ4AjP08YuJ5hL5ir1&show=addToCartUrl,categoryPath.id,categoryPath.name,color,customerReviewAverage,customerReviewCount,description,details.name,details.value,features.feature,image,images,includedItemList.includedItem,longDescription,manufacturer,modelNumber,name,onSale,regularPrice,salePrice,shortDescription,sku,productVariations&format=json`,
  );
  if (loading || error)
    return (
      <>
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      </>
    );
  const data = rawData.products[0];

  return (
    <>
      <div className="main-product">
        <div className="carousel-container">
          <Carousel images={data.images} />
        </div>
        <div className="info-container">
          <div className="model-sku-container">
            <div className="model-container">
              <b>Model: </b>
              {data.modelNumber}
            </div>
            <div className="sku-container">
              <b>SKU: </b>
              {data.sku}
            </div>
          </div>
          <h1 className="product-name">{data.name}</h1>
          <Rating
            itemRating={data.customerReviewAverage}
            reviewCount={data.customerReviewCount}
            showRating={true}
          />
          <Price
            regularPrice={data.regularPrice}
            salePrice={data.salePrice}
            onSale={data.onSale}
          />
          {data.color && (
            <div className="color-container">
              <b>Color: </b>
              {data.color}
            </div>
          )}
          <hr className="underline"></hr>
          <div className="description-container">
            <p>{decode(data.longDescription)}</p>
            <br />
            <p>
              Proin varius magna nec laoreet viverra. Maecenas eleifend, diam et
              vulputate facilisis, nunc purus fermentum neque, vitae vestibulum
              lectus nunc a turpis. Curabitur tincidunt arcu et ex posuere, id
              imperdiet purus iaculis. Fusce efficitur tincidunt purus vitae
              sagittis. Nunc commodo nibh eget condimentum iaculis. Ut erat
              massa, gravida eget urna sit amet, tristique posuere erat. Aliquam
              eu mollis massa. Proin venenatis lectus vitae scelerisque dapibus.
              Duis auctor lectus id nisi viverra congue. Curabitur et semper
              purus. Cras vel lacus sit amet nulla rutrum venenatis et vel nunc.
              Curabitur dignissim auctor mollis. Integer mattis vehicula elit ac
              scelerisque. Nullam tempor massa erat, et feugiat massa luctus a.
              Nullam viverra malesuada purus at fermentum. Pellentesque id
              imperdiet ex.
            </p>
          </div>
          <button
            type="button"
            className="add-to-bag-button"
            onClick={() => onAdd(data)}
          >
            ADD TO BAG
          </button>
        </div>
      </div>
      <AdditionalInfo
        features={data.features}
        included={data.includedItemList}
        details={data.details}
      />
    </>
  );
}
