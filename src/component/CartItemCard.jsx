import { useOutletContext } from "react-router-dom";
import QuantityPanel from "./QuantityPanel";
import "../style/CartItemCard.css";

function CartItemCard({ id, image, title, quantity, price, onQuantityUpdate, onRemove }) {
    const { cartLocalStorage } = useOutletContext();
    const subtotal = Math.round(quantity * price * 100) / 100;

    const handleQuantityChange = (itemId, value) => {
        const targetItem = cartLocalStorage.find((item) => item.id === itemId);
        targetItem.quantity = value;
        onQuantityUpdate(itemId, {...targetItem});
    };

    return (
        <>
            <tr className="cart-item-card">
                <td className="cart-item-info">
                    <div className="image-container">
                        <img src={image} alt={title} className="cart-item-image"/>
                    </div>   
                </td>  
                <td className="cart-item-info">
                    <div className="cart-item-title">{title}</div>
                </td>
                <td className="cart-item-info">
                    <div className="cart-item-price">{price}</div> 
                </td>
                <td className="cart-item-info">
                    <QuantityPanel 
                        quantity={quantity} 
                        onChange={(e) => handleQuantityChange(id, e.target.value)} 
                        onIncrement={() => handleQuantityChange(id, quantity + 1)}
                        onDecrement={() => handleQuantityChange(id, Math.max(0, quantity - 1))}
                    />
                </td>
                <td className="cart-item-info">
                    <div className="cart-item-subtotal">{subtotal}</div>
                </td>
            </tr>
            <botton onClick={() => onRemove(id)}>Remove</botton>
        </>
    )
};

export default CartItemCard;