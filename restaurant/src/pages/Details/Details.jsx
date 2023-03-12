import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useMeals } from "../../context/MealsContext";
import "./Details.css";

const FoodDetails = () => {
  const { id } = useParams();
  const { mealsShown } = useMeals();
  const { addMealToCart } = useCart();
  const [ meal, setMeal] = useState(undefined);

  useEffect( () => {
    fetchMealByID();
  }, [])

  useEffect(() => {
    
  }, [meal])

  const fetchMealByID = () => {
    const meal = mealsShown.find((meal) => meal.id === +id)
    setMeal(meal);
  }

  const checkExtraOnMeal = (event, extraId) => {
    const value = event.target.checked;
    const newMeal = {...meal};
    const extra = newMeal.extras.find((extra) => extra.id === extraId);
    extra.checked = value;

    setMeal(newMeal)
}

  return (
    <section className="main-details">
      {meal && (
        <>
          <div className="details-container">
          <img className="details-img" src={meal.imageUrl}  alt={meal.name} />
          <h2 className="details-name">  {meal.name}</h2>
          {meal.extras ? (
            <ul className="details-extra" >
              {meal.extras.map((extra, i) => (
                <li key={i}>
                   <input type="checkbox" onChange={(e) => checkExtraOnMeal(e, extra.id)} ></input>
                  <h4>{extra.name}</h4>
                </li>

              ))}
            </ul>
          ) : (
            <h2>No extras Available</h2>
          )}
          <Link to="/product-list">
            <button className="add-cart-details" onClick={() => addMealToCart(meal)}>Adicionar</button>
          </Link> 
         </div>
        </>
      )}
    </section>
  );
};

export default FoodDetails;
