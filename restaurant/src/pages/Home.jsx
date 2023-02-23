import { Link } from "react-router-dom";
import Restaurante from '../assets/images/restaurante.png'
import './Home.css'

const Home = ()=> {
    return(
        <div className="entry-contain">
            <h2>Welcome</h2>
            <h1>WestIndia</h1>
            <h2>Restaurant</h2>
            <img src={Restaurante} alt="Balcão de restaurante" />
        </div>
    )
}

export default Home;