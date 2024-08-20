import App from "./App";
import HomeMain from "./components/HomeMain";
import ShopMain from "./components/ShopMain";

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <HomeMain /> },
        { path: "shop", element: <ShopMain /> },
      ],
    },
];

export default routes;