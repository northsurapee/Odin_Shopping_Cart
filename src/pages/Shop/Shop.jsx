import { useFetch } from "../../hooks/useFetch";
import { useParams, useSearchParams } from "react-router-dom";
import "../../styles/Shop.css";
import { ItemsList } from "./ ItemList";
import { Pagination } from "../../component/Pagination";
import { useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { categoriesData } from "./categoriesData";
import { SortItems } from "./SortItems";

export default function Shop() {
  console.log("Render-Shop");
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const currCategoryId = category || "abcat0712000";
  const currPage = searchParams?.get("page") || 1;
  const sortBy = searchParams?.get("sort") || "customerReviewCount.dsc";

  const categories = categoriesData.subCategories;

  // apiKey=wPuxAJ5Tl0BBktS2G1ihzmAT
  const [loadingItems, errorItems, itemsData, anticipateFetch] = useFetch(
    `https://api.bestbuy.com/v1/products(categoryPath.id=${currCategoryId})?apiKey=uGV5YibQ4AjP08YuJ5hL5ir1&sort=${sortBy}&show=categoryPath.id,categoryPath.name,customerReviewAverage,customerReviewCount,image,name,onSale,percentSavings,regularPrice,salePrice,shortDescription,sku&pageSize=18&page=${currPage}&format=json`,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [category, currPage]);

  if (errorItems)
    return (
      <>
        <div className="error">
          <h1>An error occurred while loading the data!</h1>
          <span>Please, try again...</span>
        </div>
      </>
    );

  return (
    <>
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
            <div
              className="middle-result"
              style={{ opacity: loadingItems ? 0.5 : 1 }}
            >
              <div className="top-result">
                <span className="total-item">{itemsData.total} items</span>
                <SortItems onChange={anticipateFetch} />
              </div>
              <ItemsList items={itemsData.products} />
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
    </>
  );
}
