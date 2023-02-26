import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";

function MainBar() {
  const navigate = useNavigate();

  function clickHome() {
    navigate("/");
  }

  function clickMeals() {
    navigate("/product-list");
  }

  function clickadd() {
    navigate("/cart");
  }

  return (
    <nav className="nav-bar">
      <button className="my-home" onClick={clickHome}>
        Home
      </button>
      <button className="meals" onClick={clickMeals}>
        Refeições
      </button>
      <button className="cart" onClick={clickadd}>
        <BsCart2 />
        <div className="cart-text-container">
          <p>Carrinho</p>
        </div>
        <div className="cart-items">1</div>
      </button>
    </nav>
  );
}

export default MainBar;
