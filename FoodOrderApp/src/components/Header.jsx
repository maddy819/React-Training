import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
  const { totalQuantity } = useContext(CartContext);
  const { showCart } = useContext(UserProgressContext);

  const showCartModal = () => {
    showCart();
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button onClick={showCartModal} textOnly>
          Cart ({totalQuantity})
        </Button>
      </nav>
    </header>
  );
}
