
import './Navbar.css'

const MainBar = () => {
    return(
        <nav className="nav-bar">
            <input className="my-home" type="submit" value='Home' />
            <input className="search-bar" type="text" placeholder="Search..." />
            <input className="contacts" type="submit" value= "Where are we" />
            <input className="cart" type="submit" value="Order" />
        </nav>
            
    )
}


export default MainBar