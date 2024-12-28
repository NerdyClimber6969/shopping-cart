function QuantityPanel({quantity, onChange, onIncrement, onDecrement}) {
    return (
        <div className="quantity-pandel">
            <button data-testid="decrement-button" className="button" onClick={onDecrement}>-</button>
            <input data-testid="quantity-input" className="quantity-input" type="number" min="0" max="99" value={quantity} onChange={onChange}/>
            <button data-testid="increment-button" className="button" onClick={onIncrement}>+</button>
        </div>
    );
};

export default QuantityPanel;