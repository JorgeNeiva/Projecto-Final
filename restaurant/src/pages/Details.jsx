import { Navigate, useNavigate } from "react-router-dom";

function FoodDetails(){
    const navigate = useNavigate();


function productClick(){
    navigate('/product-list');
}

    return(
        <section>
        <h1>São os detalhes</h1>
        </section>
   )
}


export default FoodDetails;