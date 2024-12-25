import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import QuantityPanel from "./QuantityPanel.jsx";
import "../style/ProductCard.css"
 
function ProductCard({ id, image, title, orderQuantity=0, price }) {
    const [quantity, setQuantity] = useState(orderQuantity);
    const { cartRef, setCartLength } = useOutletContext();

    const addToCart = () => {
        const existingItem = cartRef.current.find((item) => item.id === id);

        if (existingItem) {
            existingItem.quantity = quantity
        } else {
            cartRef.current.push({
                id: id, 
                title: title, 
                quantity: quantity,
                price: price,
            });
            setCartLength(cartRef.current.length);
        };

        localStorage.setItem('cart', JSON.stringify(cartRef.current));
    };

    return (
        <div data-testid="product-card" className="product-card">
            <div className="product-info">
                <div className="img-container">
                    <img src={image} alt={title} data-testid="product-image"/>
                </div>
                <h3 data-testid="product-name">{title}</h3>
                <p data-testid="product-price">{price}</p>
            </div>
            <QuantityPanel 
                quantity={quantity} 
                onChange={setQuantity}
            />
            <button onClick={addToCart}>Add to cart</button>
        </div>
    );
};

export default ProductCard;