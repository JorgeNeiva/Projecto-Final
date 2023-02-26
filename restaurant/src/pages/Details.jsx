import { logDOM } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

const FoodDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(undefined);

  useEffect(() => {
    fetchMealDetails(id);
  }, [id]);

  const fetchMealDetails = async (id) => {
    try {
      const resp = await fetch("../data/meals.json");
      const data = await resp.json();
      const mealDetails = data.meals.find((meal) => meal.id === +id);
      setMeal(mealDetails);
    } catch (err) {
      console.error(err);
    }
  };

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
                  <button className="details-add" >+</button>
                  <h4>{extra.name}</h4>
                </li>
              ))}
            </ul>
           
          ) : (
            <h2>No extras Available</h2>
          )}
         </div>
        </>
      )}
    </section>
  );
};

export default FoodDetails;
