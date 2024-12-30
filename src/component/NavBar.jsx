import { Link } from "react-router-dom";
import "../style/NavBar.css"

function NavBar({cartLength=0}) {
    return (
        <nav
            className="nav-bar"
            data-testid="nav-bar"
        >   
            <h1>Online Shop</h1>
            <ul>
                <li><Link className="link-btn" to="/">Home</Link></li>
                <li><Link className="link-btn" to="/shop">Shop</Link></li>
                <li>
                    <Link className="link-btn" to="/cart">
                        Cart
                        <div data-testid="num-of-item-in-cart">{cartLength}</div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;