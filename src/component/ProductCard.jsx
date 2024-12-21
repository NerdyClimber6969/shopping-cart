import { useState } from "react";

function ProductCard({ product, addToCart }) {
    const [quantity, setQuantity] = useState(0);
    const handleIncrement = () => setQuantity(quantity + 1);
    const handleDecrement = () => setQuantity(Math.max(0, quantity - 1));

    return (
        <div data-testid="product-card">
            <img src={product.image} alt={product.name} data-testid="product-image"/>
            <h3 data-testid="product-name">{product.name}</h3>
            <p data-testid="product-price">{product.price}</p>
            <div>
                <button data-testid="decrement-button" onClick={handleDecrement}>-</button>
                <input data-testid="product-quantity" type="number" value={quantity} readOnly/>
                <button data-testid="increment-button" onClick={handleIncrement}>+</button>
            </div>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    );
};

export default ProductCard