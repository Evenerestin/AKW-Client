import "../css/Home.css";
import Typewriter from "../components/Typewriter";

const Home = () => {
  return (
    <header>
      <div className="siteTitle">
        <Typewriter class="typewriter" word="Arteterapia"/>
        <h3>Dla kreatywnych nie ma granic</h3>
      </div>
    </header>
  );
};

export default Home;
