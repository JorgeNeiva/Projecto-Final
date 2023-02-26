import { logDOM } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <section>
      {meal && (
        <>
          <img src={meal.imageUrl} alt={meal.name} />
          <h2>{meal.name}</h2>
          {meal.extras ? (
            <ul>
              {meal.extras.map((extra, i) => (
                <li key={i}>
                  <button>+</button>
                  <h4>{extra.name}</h4>
                </li>
              ))}
            </ul>
          ) : (
            <h2>No extras Available</h2>
          )}
        </>
      )}
    </section>
  );
};

export default FoodDetails;
