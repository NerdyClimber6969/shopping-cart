import { Link, Outlet } from "react-router-dom";
import NavBar from "./component/NavBar.jsx"

function App() {
  return (
    <div className="app">
      <NavBar/>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default App
