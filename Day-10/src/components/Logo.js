import { Link } from "react-router-dom";
import logo from "../../public/logo2.png";

const Logo = ({ ...props }) => {
  return (
    <Link {...props}>
      <img className="rounded-lg h-24 w-24 rounded-lg" src={logo} />
    </Link>
  );
};

export default Logo;
