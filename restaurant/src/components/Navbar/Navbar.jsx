
import './Navbar.css'

const SearchBar = () => {
    return(
        <nav className="nav-bar">
            <input className="search-bar" type="text" placeholder="Search..." />
            <input className="cart" type="submit" value="Cesta" />
        </nav>
            
    )
}


export default SearchBar