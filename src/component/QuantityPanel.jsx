import "../style/QuantityPanel.css"

function QuantityPanel({quantity, onChange, onIncrement, onDecrement}) {
    return (
        <div className="quantity-pandel">
            <button data-testid="decrement-button" className="btn" onClick={onDecrement}>-</button>
            <input data-testid="quantity-input" 
                className="quantity-input" 
                type="number" 
                min="0" 
                max="99" 
                value={quantity} 
                onChange={onChange}
                onWheel={() => document.activeElement.blur()}
            />
            <button data-testid="increment-button" className="btn" onClick={onIncrement}>+</button>
        </div>
    );
};

export default QuantityPanel;