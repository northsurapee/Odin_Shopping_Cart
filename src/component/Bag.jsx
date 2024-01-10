/* eslint-disable react/prop-types */
import Slidebar from "./Slidebar";
import BagItem from "./BagItem";

export default function Bag({initialBagItem, isOpen, onClose, onDelete}) {
    console.log("Render-Bag")
    return (
        <Slidebar
            title={"Shopping Bag"}
            isOpen={isOpen}
            onClose={onClose}
        >
            {initialBagItem.length === 0 ? (
                <p>No items have been added to your bag.</p>
            ) : (
                initialBagItem.map((item) => (
                    <BagItem 
                        key={item.name}
                        imgURL={item.image}
                        name={item.name}
                        price={item.onSale ? (item.salePrice) : (item.regularPrice)}
                        onDelete={onDelete}
                    />
                ))
            )}
        </Slidebar>
    );
}