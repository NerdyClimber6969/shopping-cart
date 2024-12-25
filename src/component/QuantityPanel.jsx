function QuantityPanel({quantity, onChange, onUpdateCart=() => null}) {
    function handleIncrement() {
        onChange(quantity + 1);
        onUpdateCart();
    };

    function handleDecrement() {
        onChange(Math.max(0, quantity - 1));
        onUpdateCart();
    };

    return (
        <div className="quantity-pandel">
            <button data-testid="decrement-button" onClick={handleDecrement}>-</button>
            <input data-testid="product-quantity" type="number" min="0" max="99" value={quantity} onChange={(e) => onChange(e.target.value)}/>
            <button data-testid="increment-button" onClick={handleIncrement}>+</button>
        </div>
    );
};

export default QuantityPanel;