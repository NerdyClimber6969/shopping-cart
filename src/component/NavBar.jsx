import { Link } from "react-router-dom";

function NavBar({numberOfProducts=0}) {
    return (
        <nav
            className="nav-bar"
            data-testid="nav-bar"
        >   
            <h1>Online Shop</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li>
                    <Link to="/cart">Cart</Link>
                    <div data-testid="num-of-item-in-cart">{numberOfProducts}</div>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;