import { useContext, useState, createContext, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';

const CartContext = createContext()
export const useCart = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    const [cartState, setCartState] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let updatedTotalPrice = 0;

        cartState.forEach((meal) => {
            updatedTotalPrice += meal.price
        });

        setTotalPrice(updatedTotalPrice)

    }, [cartState])

    const addMealToCart = (meal) => {
        const cartItemId = uuidv4();
        const mealUpdated = { ...meal, cartItemId }
        setCartState([...cartState, mealUpdated]);
    }

    const removeFromCart = (cartItemId) => {
        const updatedCart = cartState.filter((meal) => meal.cartItemId !== cartItemId)
        setCartState([...updatedCart]);
    }

    return (
        <CartContext.Provider
            value={{
                addMealToCart,
                removeFromCart,
                totalPrice,
                cartState
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;