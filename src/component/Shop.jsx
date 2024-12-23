import { Link } from "react-router-dom";
import useFakeShop from "../useFakeShop.jsx";
import ProductCard from "./ProductCard.jsx";


function Shop() {
    const { products, loading } = useFakeShop();

    if (loading) return (
        <div className='loadingSpinnerContainer'>
          <div className='loadingSpinner'/>
          <p> Loading ... </p>
        </div>
    );

    return (
        <>
            <p>This is a online Shop</p>
            <div className="product-list">
                {products.map((product) => (<ProductCard product={product}/>))}
            </div>
        </>
    )
}

export default Shop;