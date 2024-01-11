/* eslint-disable react/prop-types */
import Slidebar from "./Slidebar";
import BagItem from "./BagItem";
import "../styles/Bag.css"

export default function Bag({ initialBagItem, isOpen, onClose, onDelete, onIncrease, onDecrease }) {
    let totalPrice = 0;
    console.log("Render-Bag");
    console.log(initialBagItem)
    initialBagItem.forEach(([item, count]) => {
        console.log(item)
        console.log(count)
        totalPrice += (item.onSale ? item.salePrice : item.regularPrice) * count;
    });
    function roundToDecimalPlaces(number, decimalPlaces) {
        const factor = 10 ** decimalPlaces;
        console.log(Math.round(number * factor) / factor);
        return Math.round(number * factor) / factor;
    }
    
    return (
        <Slidebar
            title={"Shopping Bag"}
            isOpen={isOpen}
            onClose={onClose}
        >
            {initialBagItem.length === 0 ? (
                <p className="empty-bag">No items have been added to your bag.</p>
            ) : (
                <div className="children-container">
                    <div className="bag-items-container">
                        {initialBagItem.map(([item, count]) => (
                            <BagItem
                                key={item.name}
                                imgURL={item.image}
                                name={item.name}
                                price={item.onSale ? item.salePrice : item.regularPrice}
                                onDelete={onDelete}
                                onIncrease={onIncrease}
                                onDecrease={onDecrease}
                                count={count}
                            />
                        ))}
                    </div>
                    <div className="checkout-container">
                            <div className="top">
                                <p className="subtotal">Subtotal:</p>
                                <b className="total-price">$ {roundToDecimalPlaces(totalPrice,2)}</b>
                            </div>
                            <div className="button-container">
                                <button>CHECKOUT</button>
                            </div>
                            
                    </div>
                </div>
            )}
        </Slidebar>
    );
}
