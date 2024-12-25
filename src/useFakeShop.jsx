import { useState, useEffect } from "react"

const API = 'https://fakestoreapi.com/products?limit=12'

function useFakeShop() {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fecthPorducts = async () => {
            const response = await fetch(API)
            const productsJson = await response.json();
            setLoading(false);
            setProducts(productsJson);
        };

        fecthPorducts();
    }, []);

    return { products, loading };
};

export default useFakeShop;