import './Navbar.css'
import { Link } from "react-router-dom";




const MainBar = () => {
    return(
        <nav className="nav-bar">
            <button className="my-home" >Home</button>
            <button className="meals">Meals</button>
            <input className="cart" type="submit" value="Order" />
        </nav>
            
    )
}


export default MainBar