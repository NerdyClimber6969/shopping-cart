import { Outlet } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import useFakeShop from "./useFakeShop.jsx";
import NavBar from "./component/NavBar.jsx"
import "./style/App.css"

function App() {
  const { products, loading } = useFakeShop();
  const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartLength, setCartLength] = useState(cartLocalStorage.length);
  
  return (
    <div className="app">
      <NavBar cartLength={cartLength}/>
      <Outlet context={{products, loading, cartLength, setCartLength, cartLocalStorage}}/>
    </div>
  );
};

export default App
