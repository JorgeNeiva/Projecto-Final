
import './Navbar.css'

const SearchBar = () => {
    return(
        <nav className="nav-bar">
            <input className="search-bar" type="text" placeholder="Search..." />
            <input className="cart" type="button" placeholder="Carrinho" />
        </nav>
            
    )
}


export default SearchBar