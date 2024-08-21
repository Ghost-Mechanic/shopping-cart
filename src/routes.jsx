import App from "./App";
import HomeMain from "./components/HomeMain";
import ShopMain from "./components/ShopMain";
import CartMain from "./components/CartMain";

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <HomeMain /> },
        { path: "shop", element: <ShopMain /> },
        { path: "cart", element: <CartMain /> },
      ],
    },
];

export default routes;