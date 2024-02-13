import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faCopyright } from "@fortawesome/free-solid-svg-icons";
import Restaurant from "./Pages/Restaurant";
import Error from "./Pages/Error";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

library.add(fab, faHeart, faCopyright);

const AppLayout = () => {
  return (
    <div className="font-Acme layout md:container sm:container md:mx-auto border-2 md:max-w-6xl my-8 md:my-8 bg-white rounded-t-lg rounded-b-lg shadow-2xl">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurant />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={router}>
    <AppLayout />
  </RouterProvider>
);
