import "./ProductList.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMeals } from "../../context/MealsContext";

const FoodList = () => {
  const [quantity, setQuantity] = useState(6);
  const {meals} = useMeals();
  let listOfMeals =  meals.slice(0, quantity);

  useEffect( () => {
  },[meals, quantity])

  const loadMeals = () => {
    setQuantity(quantity + 6);
  };

  return (
    <div className="page-container">
      {listOfMeals && (
        <ul className="meal-main">
          {listOfMeals.map((meal) => (
            <li className="item-meal" key={meal.id}>
              <div className="card-meal">
                <div className="meal-image">
                  <img
                    className="meal-img"
                    src={meal.imageUrl}
                    alt="Prato em cima da mesa"
                  />
                </div>
                <div>
                  <h1>{meal.name}</h1>
                  <h2>{meal.description}</h2>
                  <p>{meal.price} €</p>
                </div>
                <div className="actions-container">
                  <Link to={`/food_details/${meal.id}`}>
                    <button className="more-info">Detalhe</button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="button-container">
      <button className="more-meals" onClick={loadMeals}>Mais Refeições</button>
      </div>
    </div>
  );
};

export default FoodList;
