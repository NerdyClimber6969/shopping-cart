import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard.jsx";
import "../style/Shop.css"

function Shop() {
    const { loading, products } = useOutletContext();

    if (loading) return (
        <div className='loadingSpinnerContainer'>
          <div className='loadingSpinner'/>
          <p> Loading ... </p>
        </div>
    );

    return (
        <div className="shop">
            <p>This is a online Shop</p>
            <div className="product-list">
                {
                    products.map((product) => (
                        <ProductCard 
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price} 
                            key={product.id}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Shop;