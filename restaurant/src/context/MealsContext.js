import { useContext, useState, createContext} from "react"

const MealsContext = createContext()
export const useMeals = () => useContext(MealsContext)

const MealsProvider = ({children})=>{
    const [mealsState, setMealsState ] = useState([]);
    const [mealsShown, setMealShown ]= useState([])
   
    const fetchMeals = async () => {
        try {
        const resp = await fetch("./data/meals.json");
        const data = await resp.json();
        setMealsState(data.meals);
        setMealShown(data.meals)
        } catch (err) {
        console.error(err);
        }
    };

    const showMealsBySearching = (value) => {
        if(value.length < 3) {
            setMealShown(mealsState);
            return;
        }

        const mealsToShow = mealsState.filter((meal) => meal.name.toLowerCase().includes(value))

        setMealShown(mealsToShow);
    }

    return(
        <MealsContext.Provider 
        value={{
            mealsState,
            mealsShown,
            fetchMeals,
            showMealsBySearching,
            }}>
            {children}
        </MealsContext.Provider>
    )
}

export default MealsProvider;