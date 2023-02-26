import "./ProductList.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const FoodList = () => {
  const [listOFmeals, setlistOFmeals] = useState([]);
  const [quantity, setQuantity] = useState(6);
  let loadedMeals = listOFmeals.slice(0, quantity);

  useEffect(() => {
    fetchData();
  }, [listOFmeals, quantity]);

  const fetchData = async () => {
    try {
      const resp = await fetch("./data/meals.json");
      const data = await resp.json();
      setlistOFmeals(data.meals);
    } catch (err) {
      console.error(err);
    }
  };

  const loadMeals = () => {
    setQuantity(quantity + 6);
  };

  return (
    <div className="page-container">
      <div className="search-bar-container">
        <input className="search-bar" type="text" placeholder="Search..." />
      </div>
      {loadedMeals && (
        <ul className="meal-main">
          {loadedMeals.map((meal) => (
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
                  <p>{meal.price}</p>
                </div>
                <div className="actions-container">
                  <Link to={`/food_details/${meal.id}`}>
                    <button className="more-info">Detalhe</button>
                  </Link>
                  <Link to="/cart">
                    <button className="add-cart">Adicionar</button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button className="more-meals" onClick={loadMeals}>More Meals</button>
    </div>
  );
};

export default FoodList;
