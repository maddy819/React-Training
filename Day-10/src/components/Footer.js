import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer flex p-2 border-slate-300 h-12 text-white justify-center items-center rounded-b-lg bg-gradient-to-br from-[#8EBE43] to-lime-300">
      <span>
        Created By <FontAwesomeIcon icon="heart" /> &nbsp;
      </span>
      <span>
        <a href="" target="_blank">
          Shubham Agrawal &nbsp;
        </a>
        <FontAwesomeIcon icon="copyright" /> &nbsp;
      </span>
      {year}
      <strong>
        &nbsp; Food<span>App</span>
      </strong>
    </div>
  );
};

export default Footer;
