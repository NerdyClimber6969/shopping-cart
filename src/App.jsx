import { Outlet } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import useFakeShop from "./useFakeShop.jsx";
import NavBar from "./component/NavBar.jsx"
import "./style/App.css"

function App() {
  const { products, loading } = useFakeShop();
  const [cartLength, setCartLength] = useState(0);
  const cartRef = useRef();

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      cartRef.current = JSON.parse(savedCart)
    } else {
      cartRef.current = [];
    };

    setCartLength(cartRef.current.length)
  }, []);

  return (
    <div className="app">
      <NavBar cartLength={cartLength}/>
      <Outlet context={{products, loading, cartLength, setCartLength, cartRef}}/>
    </div>
  );
};

export default App
