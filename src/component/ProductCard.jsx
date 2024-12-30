import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import QuantityPanel from "./QuantityPanel.jsx";
import "../style/ProductCard.css"
 
function ProductCard({ id, image, title, orderQuantity=0, price }) {
    const [quantity, setQuantity] = useState(orderQuantity);
    const { cartLocalStorage, setCartLength } = useOutletContext();

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(Math.max(0, quantity - 1));
    };

    const addToCart = () => {
        const existingItem = cartLocalStorage.find((item) => item.id === id);

        if (existingItem) {
            existingItem.quantity = quantity
        } else {
            cartLocalStorage.push({
                id: id, 
                image: image,
                title: title, 
                quantity: quantity,
                price: price,
            });
            setCartLength(cartLocalStorage.length);
        };

        localStorage.setItem('cart', JSON.stringify(cartLocalStorage));
    };

    return (
        <div data-testid="product-card" className="product-card">
            <div className="image-container">
                <img src={image} alt={title} data-testid="product-image"/>
            </div>
            <div>
                <h3 data-testid="product-name" className="product-name">{title}</h3>
                <p data-testid="product-price" className="product-price">$ {price}</p>
            </div>
            <div className="wrapper">
                <QuantityPanel 
                    quantity={quantity} 
                    onChange={setQuantity}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                />
                <button className="btn" onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    );
};

export default ProductCard;