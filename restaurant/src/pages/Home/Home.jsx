import Restaurante from "../../assets/images/restaurante.png";
import Logo from "../../assets/images/LogoB.T.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="entry-image-container">
      <img
        className="entry-image"
        src={Logo}
        alt="Balcão de restaurante"
      />
    </div>
  );
};

export default Home;
