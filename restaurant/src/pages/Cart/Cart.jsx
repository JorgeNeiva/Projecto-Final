import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
    const {cartState, removeFromCart, totalPrice} = useCart();

    useEffect(() => {
    },[totalPrice])
    
    return(
        <div className="cart-container"> 
            <h1 className="cart-title">Este é o teu pedido</h1>
            <ul className="cart-list">
            {cartState && cartState.map(meal => (
                <li key={meal.cartItemId} className="cart-item">
                    <button className="item-cancel" onClick={() => removeFromCart(meal.cartItemId)}>X</button>
                    <span className="meal-name">{meal.name} - {meal.price}€</span>
                    <br />
                    {meal.extras.map((extra) => (
                        <div key={extra.id}>
                        {extra.checked ? (
                            <span> - {extra.name}</span>
                        ): (undefined)}
                        </div>
                    ))}
                </li>
            ))}
            </ul>
            <div className="cart-total">
                <h4>Total</h4>
                <p>{totalPrice} €</p>
            </div>
            <Link to="/checkout">
                     <button className="button-checkout">Finalizar pedido</button>
            </Link>
        </div>
    )
}


export default Cart
