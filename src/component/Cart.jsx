import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Checkout from "./Checkout.jsx"
import CartItemCard from "./CartItemCard.jsx";

function Cart() {
    const { cartLocalStorage, setCartLength } = useOutletContext();
    const [cartItems, setCartItems] = useState(cartLocalStorage);

    const handleQuantityUpdate = (itemId, updatedItem) => {
        const newCartItems = cartItems.map((item) => (item.id === itemId ? updatedItem : item));
        localStorage.setItem("cart", JSON.stringify(newCartItems));
        setCartItems(newCartItems);
    };

    const handleRemoveItem = (itemId) => {
        const newCartItems = cartItems.filter((item) => (item.id !== itemId));
        localStorage.setItem("cart", JSON.stringify(newCartItems));
        setCartItems(newCartItems);
        setCartLength(newCartItems.length);
    };

    if (cartItems.length === 0) {
        return (
            <>
                <p>This is a cart</p>
                <div>no item in cart</div>
            </>
        );
    };
 
    return (
        <>
            <p>This is a cart</p>
            <table className="cart-item-summary">
                <thead>
                    <tr>

                        <th colSpan="2">Product</th>
                        <th>Price</th>   
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map((item) => (
                            <CartItemCard 
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                quantity={item.quantity}
                                price={item.price}
                                onQuantityUpdate = {handleQuantityUpdate}
                                onRemove = {handleRemoveItem}
                                key={item.id}
                            />
                        ))
                    }
                </tbody>
            </table>
            <Checkout cartItems={cartItems}/>
        </>
    );
};

export default Cart;