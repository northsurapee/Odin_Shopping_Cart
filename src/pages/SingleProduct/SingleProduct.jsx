import "../../styles/SingleProduct.css"
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Price from "../../component/Price";
import { Carousel } from "./Carousel";
import { AdditionalInfo } from "./AdditionalInfo";
import Rating from "../../component/Rating";
import { decode } from "html-entities";

export default function SingleProduct() {

    const { id } = useParams();
    const [loading, error, rawData] = useFetch(`https://api.bestbuy.com/v1/products(sku=${id})?apiKey=wPuxAJ5Tl0BBktS2G1ihzmAT&show=addToCartUrl,categoryPath.id,categoryPath.name,color,customerReviewAverage,customerReviewCount,description,details.name,details.value,features.feature,image,images,includedItemList.includedItem,longDescription,manufacturer,modelNumber,name,onSale,regularPrice,salePrice,shortDescription,sku,productVariations&format=json`);
    console.log(rawData)
    if (loading || error) return (
        <>
            <Header isBlack={true} />
            <div className="loader-container">
                <div className="loader"></div>
            </div>
            <Footer />
        </>
    );
    const data = rawData.products[0];

    return (
        <>
            <Header isBlack={true} />
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
                            Proin varius magna nec laoreet viverra. Maecenas eleifend, diam et vulputate
                            facilisis, nunc purus fermentum neque, vitae vestibulum lectus nunc a
                            turpis. Curabitur tincidunt arcu et ex posuere, id imperdiet purus iaculis.
                            Fusce efficitur tincidunt purus vitae sagittis. Nunc commodo nibh eget
                            condimentum iaculis. Ut erat massa, gravida eget urna sit amet, tristique
                            posuere erat. Aliquam eu mollis massa. Proin venenatis lectus vitae
                            scelerisque dapibus. Duis auctor lectus id nisi viverra congue. Curabitur et
                            semper purus. Cras vel lacus sit amet nulla rutrum venenatis et vel nunc.
                            Curabitur dignissim auctor mollis. Integer mattis vehicula elit ac
                            scelerisque. Nullam tempor massa erat, et feugiat massa luctus a. Nullam
                            viverra malesuada purus at fermentum. Pellentesque id imperdiet ex.
                        </p>
                    </div>
                    {/* onClick={addItem} */}
                    <button type="button" className="add-to-bag-button">
                        ADD TO BAG
                    </button>
                </div>
            </div>
            <AdditionalInfo
                    features={data.features}
                    included={data.includedItemList}
                    details={data.details}
            />
            <Footer />
        </>
    );
}

