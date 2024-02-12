<<<<<<< HEAD
=======
import React from "react";

>>>>>>> eee4cdd9cdd2f6b1d74676dc0f4d1b8387c30103
// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="" target="_blank">
        Priya Sharma
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Food<span>App</span>
      </strong>
    </div>
  );
};

export default Footer;
