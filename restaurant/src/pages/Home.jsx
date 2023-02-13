import { Link } from "react-router-dom";
import Restaurante from '../assets/images/restaurante.png'
import './Home.css'

const Home = ()=> {
    return(
        <div className="entry-contain">
            <h1>Welcome and Enjoy.</h1>
            <img src={Restaurante} alt="Balcão de restaurante" />
        </div>
    )
}

export default Home;