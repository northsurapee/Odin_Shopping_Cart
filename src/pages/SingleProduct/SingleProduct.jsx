import "../../styles/SingleProduct.css"
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Price from "../../component/Price";
import { Carousel } from "./Carousel";

export default function SingleProduct() {

    const { id } = useParams();
    const [loading, error, rawData] = useFetch(`https://api.bestbuy.com/v1/products(sku=${id})?apiKey=wPuxAJ5Tl0BBktS2G1ihzmAT&show=addToCartUrl,categoryPath.id,categoryPath.name,color,customerReviewAverage,customerReviewCount,description,details.name,details.value,features.feature,image,images,includedItemList.includedItem,longDescription,manufacturer,modelNumber,name,onSale,regularPrice,salePrice,shortDescription,sku,productVariations&format=json`);
    
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
                <Price
                    regularPrice={data.regularPrice}
                    salePrice={data.salePrice}
                    onSale={data.onSale}
                />
                <Carousel images={data.images} />
            </div>
            <Footer />
        </>
    );
}

