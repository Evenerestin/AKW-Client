import { Link } from "react-router-dom";
import MenuData from "../assets/MenuData";
import "../css/Art.css";

const Art = () => {
  const tworczoscItem = MenuData.find((item) => item.title === "Twórczość");
  return (
    <div id="art" className="flex">
      <div className="subpageNavigation flex">
        {tworczoscItem.submenu.map((submenuItem, index) => (
          // <div key={index} className="submenuWrapper">
          //   <h1>{submenuItem.title}</h1>
          //   <Link to={submenuItem.url}>
          //     <img src={submenuItem.cover} alt="subpage cover" />
          //   </Link>
          // </div>
          <div key={index} className="wrapper">
            <div className="imageWrapper">
              <Link to={submenuItem.url}>
                <img src={submenuItem.cover} alt="subpage cover" />
              </Link>
            </div>
            <div className="headerWrapper">
              <h1>{submenuItem.title}</h1>
            </div>
            <div className="textWrapper">
              <h2>{submenuItem.title}</h2>
              <p>zobacz prace →</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Art;
