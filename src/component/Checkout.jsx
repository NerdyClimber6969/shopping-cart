import { Link } from "react-router-dom";

function Checkout({ products }) {
    const subTotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <div data-testid="checkout-component" className="checkout">
            <div className="sub-total">
                Sub total: <div data-testid="sub-total">${subTotal}</div>
            </div>
            <div className="tax">
                Tax: <div data-testid="tax"> ${subTotal * 0.2}</div>
            </div>
            <div className="total">
                Total: <div data-testid="total">${subTotal + subTotal * 0.2}</div>
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