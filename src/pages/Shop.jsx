import Header from "../component/Header"
import Footer from "../component/Footer"
import shopBackground from "../assets/mw2-hd.jpg"
import { useFetch } from "../hooks/useFetch"
import { useParams, useSearchParams } from "react-router-dom";
import "../styles/Shop.css"
import { ItemsList } from "./ ItemList";

export default function Shop() {
    const { category } = useParams();
    // const [searchParams] = useSearchParams();
    const currCategoryId = category || "abcat0712000";
    const currPage = 1;
    const sortBy = "customerReviewCount.dsc";
    const [loadingItems, errorItems, itemsData, anticipateFetch] = useFetch(`https://api.bestbuy.com/v1/products(categoryPath.id=${currCategoryId})?apiKey=wPuxAJ5Tl0BBktS2G1ihzmAT&sort=${sortBy}&show=categoryPath.id,categoryPath.name,customerReviewAverage,customerReviewCount,image,name,onSale,percentSavings,regularPrice,salePrice,shortDescription,sku&pageSize=18&page=${currPage}&format=json`);

    console.log(loadingItems);
    console.log(errorItems);
    console.log(itemsData);

    if (errorItems)
    return (
      <div>
        <h1>An error occurred while loading the data!</h1>
        <span>Please, try again...</span>
        </div>
    );

    return (
        <>
            <Header isBlack={false} />
            {!itemsData ? (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                <div className="shop-background">
                    <div className="img-container">
                        <img src={shopBackground} alt="shop-background"/>
                    </div>
                    <h1>GAMING STORE</h1>
                </div>
                <div className="shop-main">
                    <ItemsList items={itemsData.products}/>
                </div>
                </>
            )}
            <Footer />
        </>
    );
}