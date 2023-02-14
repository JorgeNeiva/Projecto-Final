import { Link } from "react-router-dom";

const FoodDetails = () => {
    return(
        <section>
        <h1>São os detalhes</h1>
        <button><Link to='/product-list'>Back To Meals </Link></button>
        </section>
   )
}


export default FoodDetails;