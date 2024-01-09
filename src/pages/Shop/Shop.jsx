import Header from "../../component/Header"
import Footer from "../../component/Footer"
import { useFetch } from "../../hooks/useFetch"
import { useParams, useSearchParams } from "react-router-dom";
import "../../styles/Shop.css"
import { ItemsList } from "./ ItemList";
import { Pagination } from "../../component/Pagination";
import { useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { categoriesData } from "./categoriesData";

export default function Shop() {
    const { category } = useParams();
    const [searchParams] = useSearchParams();
    const currCategoryId = category || "abcat0712000";
    const currPage = searchParams?.get("page") || 1;
    const sortBy = "customerReviewCount.dsc";
    const categories = categoriesData.subCategories;
    const [loadingItems, errorItems, itemsData, anticipateFetch] = useFetch(`https://api.bestbuy.com/v1/products(categoryPath.id=${currCategoryId})?apiKey=wPuxAJ5Tl0BBktS2G1ihzmAT&sort=${sortBy}&show=categoryPath.id,categoryPath.name,customerReviewAverage,customerReviewCount,image,name,onSale,percentSavings,regularPrice,salePrice,shortDescription,sku&pageSize=18&page=${currPage}&format=json`);

    console.log(loadingItems);
    console.log(errorItems);
    console.log(itemsData);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, [category, currPage]);

    if (errorItems)
    return (
        <>
            <Header isBlack={true} />
                <div className="error">
                    <h1>An error occurred while loading the data!</h1>
                    <span>Please, try again...</span>
                </div>
            <Footer />
        </>
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
                    <h1>GAMING STORE</h1>
                </div>
                <div className="shop-main">
                    <div className="left-side-bar">
                        <Sidebar
                            currCategory={category}
                            categories={categories}
                            onCategoryChange={anticipateFetch}
                        />
                    </div>
                    <div className="middle-result" style={{ opacity: loadingItems ? 0.5 : 1 }}>
                        <div className="top-result">
                            <span className="total-item">{itemsData.total} items</span>
                        </div>
                        <ItemsList items={itemsData.products}/>
                        <div>
                        {+itemsData.totalPages && (
                            <Pagination
                            currPage={+currPage}
                            totalPages={+itemsData.totalPages}
                            siblings={3}
                            onPageChange={anticipateFetch}
                            />
                        )}
                        </div>
                    </div>
                </div>
                </>
            )}
            <Footer />
        </>
    );
}