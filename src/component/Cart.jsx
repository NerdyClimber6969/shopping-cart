import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Checkout from "./Checkout.jsx"

function Cart() {
    const { cartRef } = useOutletContext();
    const [cartItems, setCartItems] = useState(cartRef.current);

    return (
        <>
            <p>This is a cart</p>
            <div className="cart-item-container">
                {
                    cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            Product: {item.title}
                            quantity: {item.quantity}
                        </div>
                    ))
                }
            </div>
            <Checkout cartItems={cartItems}/>
        </>
    );
};

export default Cart;