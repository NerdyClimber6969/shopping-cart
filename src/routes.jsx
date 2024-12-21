import App from "./App";
import Home from "./component/Home.jsx";
import Shop from "./component/Shop.jsx";
import Cart from "./component/Cart.jsx";
import ProcessPaymentPage from "./component/ProcessPaymentPage.jsx";
import Checkout from "./component/Checkout.jsx";

const routes = [
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/cart", element: <Cart /> },
      { path: "/processpayment", element: <ProcessPaymentPage /> },
      { path: "/checkout", element: <Checkout />},
    ],
    element: <App />,
  },
];

export default routes;