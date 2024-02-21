import { memo, useRef } from "react";

const BackToTop = ({ children, ...props }) => {
  const backToTop = useRef();

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      backToTop.current.style.display = "block";
    } else {
      backToTop.current.style.display = "none";
    }
  };

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  window.onscroll = () => scrollFunction();

  return (
    <button
      ref={backToTop}
      {...props}
      onClick={topFunction}
      id="myBtn"
      title="Go to top"
    >
      {children}
    </button>
  );
};

export default memo(BackToTop);
