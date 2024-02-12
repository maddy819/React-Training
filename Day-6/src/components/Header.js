import { LOGO_URL } from "../utills/constants";
<<<<<<< HEAD
=======
import React from "react";
>>>>>>> eee4cdd9cdd2f6b1d74676dc0f4d1b8387c30103

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
