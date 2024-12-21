import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <p>This is a mock online Shop</p>
            <Link to="shop">Click here to go to Shop</Link>
        </>
    );
};

export default Home;