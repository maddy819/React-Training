import { Link, useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const pageName = pathname.split("/")[1];

  return (
    <Navigation className="header border-gray-200 dark:bg-gray-900 p-4 px-8 rounded-t-lg bg-gradient-to-br from-[#8EBE43] to-lime-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Logo
          className="flex items-center space-x-4 rtl:space-x-reverse"
          to={"/"}
        ></Logo>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0">
            <li
              className={`px-3 py-1 rounded-lg ${
                pageName === "" || pageName === "restaurants" ? "active" : ""
              }`}
            >
              <Link
                className="text-lg block text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-blue-900"
                to={"/"}
              >
                HOME
              </Link>
            </li>
            <li
              className={`px-3 py-1 rounded-lg ${
                pageName === "about" ? "active" : ""
              }`}
            >
              <Link
                className="text-lg block text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-blue-900"
                to={"/about"}
              >
                ABOUT US
              </Link>
            </li>
            <li
              className={`px-3 py-1 rounded-lg ${
                pageName === "contact" ? "active" : ""
              }`}
            >
              <Link
                className="text-lg block text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-blue-900"
                to={"/contact"}
              >
                CONTACT US
              </Link>
            </li>
            <li
              className={`px-3 py-1 rounded-lg ${
                pageName === "cart" ? "active" : ""
              }`}
            >
              <Link
                className="text-lg block text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-blue-900"
                to={"/cart"}
              >
                CART
              </Link>
            </li>
            <li
              className={`px-3 py-1 rounded-lg ${
                pageName === "checkout" ? "active" : ""
              }`}
            >
              <Link
                className="text-lg block text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-blue-900"
                to={"/checkout"}
              >
                CHECKOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Navigation>
  );
};

export default Header;
