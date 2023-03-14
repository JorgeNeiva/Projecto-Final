import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useMeals } from "../../context/MealsContext";
import "./Details.css";

const FoodDetails = () => {
  const { id } = useParams();
  const { meals } = useMeals();
  const { addMealToCart } = useCart();
  const [ meal, setMeal] = useState(undefined);

  useEffect( () => {
    const meal = meals.find((meal) => meal.id === +id)
    setMeal(meal);
  }, [id, meals])
  

  const toggleExtraOnMeal = (value, extraId) => {
    setMeal({
      ...meal, 
      extras: meal.extras.map((extra) => extra.id === extraId ? {...extra, checked: value} : extra )})
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
                <li key={i} className="item-extra">
                   <input type="checkbox" onChange={(event) => toggleExtraOnMeal(event.target.checked , extra.id)} ></input>
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
