import { useContext, useState, createContext } from "react"

const MealsContext = createContext()
export const useMeals = () => useContext(MealsContext)

const MealsProvider = ({ children }) => {
    const [mealsState, setMealsState] = useState([]);
    const [meals, setMeals] = useState([]);


    const fetchMeals = async () => {
        try {
            const resp = await fetch("./data/meals.json");
            const data = await resp.json();
            setMealsState(data.meals);
            setMeals(data.meals)
        } catch (err) {
            console.error(err);
        }
    };

    const showMealsBySearching = (value) => {
        console.log(value);
        if (value.length < 3) {
            setMeals(mealsState);
            return;
        }

        const mealsSearched = meals.filter((meal) => meal.name.toLowerCase().includes(value));
        setMeals(mealsSearched);
    }

    return (
        <MealsContext.Provider
            value={{
                mealsState,
                meals,
                fetchMeals,
                showMealsBySearching
            }}>
            {children}
        </MealsContext.Provider>
    )
}

export default MealsProvider;