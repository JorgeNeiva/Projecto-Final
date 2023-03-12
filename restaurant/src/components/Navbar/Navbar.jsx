import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import Logo from "../../assets/images/LogoB.T.png";
import { useCart } from "../../context/CartContext";
import { useMeals } from "../../context/MealsContext";

const MainBar = () => {
  const {cartState} = useCart();
  const {showMealsBySearching} = useMeals();

  const handleSearchBarValue = (event) => {
    const value = event.target.value
    showMealsBySearching(value.toLowerCase());
  }

  return (
    <nav className="nav-bar">
      <Link to="/">
        <button className="my-home">
        <img className="logo" src={Logo}alt="Logo" />
        </button>
      </Link>
      <Link to="/product-list" className="link-meals">
        <button className="meals">
          Refeições
        </button>
      </Link>
      <div className="search-bar-container">
        <input className="search-bar" type="text" placeholder="O que te está a apetecer?" onChange={handleSearchBarValue} />
      </div>
      <Link to="/cart" className="link-cart">
        <button className="cart">
          <BsCart2 />
          <div className="cart-text-container">
            <p>Carrinho</p>
          </div>
          <div className="cart-items">{cartState.length}</div>
        </button>
      </Link>
    </nav>
  );
}

export default MainBar;
