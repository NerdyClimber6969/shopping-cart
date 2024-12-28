import { Link } from "react-router-dom";
import { round } from "../helper.jsx"

function Checkout({ cartItems }) {
    const subTotal = round(cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0), 2);
    const tax = round(subTotal * 0.2, 2);
    const total = round(subTotal + tax, 2);

    return (
        <div data-testid="checkout-component" className="checkout">
            <div className="sub-total">
                Sub total: <div data-testid="sub-total">${subTotal}</div>
            </div>
            <div className="tax">
                Tax: <div data-testid="tax"> ${tax}</div>
            </div>
            <div className="total">
                Total: <div data-testid="total">${total}</div>
            </div>
            <hr/>
            <div className="button-container">
                <Link to="/shop">Continue Shopping</Link>
                <Link to="/processpayment">Process Payment</Link>
            </div>
        </div>
    )
};

export default Checkout;