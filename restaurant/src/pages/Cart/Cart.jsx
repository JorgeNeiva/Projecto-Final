import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Cart = () => {
    const {cartState, removeFromCart, totalPrice} = useCart();

    useEffect(() => {
    },[totalPrice])
    
    return(
        <div className="your-cart">
            <h1>Este é o teu pedido</h1>
            <ul>
            {cartState && cartState.map(meal => (
                <li key={meal.cartItemId}>
                    <button onClick={() => removeFromCart(meal.cartItemId)}>X</button>
                    <span>{meal.name} - {meal.price}</span>
                    <br />
                    {meal.extras.map((extra) => (
                        <div key={extra.id}>
                        {extra.checked ? (
                            <span>{extra.name}</span>
                        ): (undefined)}
                        </div>
                    ))}
                </li>
            ))}
            </ul>
            <div>
                <h4>Total</h4>
                <p>{totalPrice} €</p>
            </div>
            <Link to="/checkout">
                     <button >Finalizar pedido</button>
            </Link>
        </div>
    )
}


export default Cart
