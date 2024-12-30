import { Link } from "react-router-dom";
import "../style/Home.css";

function Home() {
    return (
        <div className="home">
            <p>This is a mock online Shop</p>
            <Link className="link-btn" to="shop">Click here to go to Shop</Link>
        </div>
    );
};

export default Home;