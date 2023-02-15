import './Navbar.css'
import { Navigate, useNavigate } from "react-router-dom";

function MainBar(){
    const navigate = useNavigate();

    function clickHome(){
        navigate('/')
    }

    function clickMeals(){
        navigate('/product-list')
    }

    function clickadd(){
        navigate ('/cart')

    } 




    return(
        <nav className="nav-bar">
            <button className="my-home" onClick={clickHome} >Home</button>
            <button className="meals" onClick={clickMeals}>Meals</button>
            <button className ="cart" onClick={clickadd}> Order</button>
        </nav>
            
    )
}


export default MainBar