import { Link, useLocation } from "react-router-dom";
import GokIcon from "../assets/GokIcon";
import InstagramIcon from "../assets/InstagramIcon";
import Logo from "../assets/Logo";
import MenuData from "../assets/MenuData";
import "../css/Navbar.css";
import MenuItem from "./MenuItem";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  return (
    <nav className={`flex ${isHomePage ? "homePath" : ""}`}>
      <Link to="/" className="navLogo">
        <Logo />
        {/* <PaintSplash /> */}
      </Link>
      <div className="navigation flex">
        <ul className="flex menuItems">
          {MenuData.map((itemData, index) => {
            return <MenuItem itemData={itemData} key={index} />;
          })}
        </ul>
        <div className="socialIcons flex">
          <a
            href="https://www.instagram.com/arteterapia.akw/"
            target="_blank"
            rel="noopener noreferrer"
            className="gridCenter instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.kultura.pawlowice.pl/zajecia/plastyka-dla-dzieci-i-mlodziezy/art-eqipa"
            target="_blank"
            rel="noopener noreferrer"
            className="gridCenter gok"
          >
            <GokIcon />
          </a>
          {/* <a href="" className="social facebookGok"></a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
