
import Restaurante from "../../assets/images/restaurante.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="entry-contain">
      <h1 className="title">
        <img src="" alt="" />
        
        Taberna Balcão</h1>
      <img
        className="entry-image"
        src={Restaurante}
        alt="Balcão de restaurante"
      />
    </div>
  );
};

export default Home;
