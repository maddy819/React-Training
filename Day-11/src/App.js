import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SearchContextProvider from "../src/context/SearchContext";

import Home from "./Pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./Pages/Error";
import Loading from "./components/Loading";
import BackToTop from "./components/BackToTop";

const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Restaurant = lazy(() => import("./Pages/Restaurant"));
const Cart = lazy(() => import("./Pages/Cart"));
const Checkout = lazy(() => import("./Pages/Checkout"));

library.add(fab, faHeart, faCopyright);

const AppLayout = () => {
  return (
    <div className="font-Acme layout md:container sm:container md:mx-auto border-2 md:max-w-6xl my-8 md:my-8 bg-white rounded-t-lg rounded-b-lg shadow-2xl">
      <SearchContextProvider>
        <Header />
        <Outlet />
        <Footer />
        <BackToTop className="px-10">Back To Top</BackToTop>
      </SearchContextProvider>
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
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<Loading />}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<Loading />}>
            <Restaurant />
          </Suspense>
        ),
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
