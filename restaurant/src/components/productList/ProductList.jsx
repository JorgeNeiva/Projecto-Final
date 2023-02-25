
import './ProductList.css'
import Picanha from '../../assets/images/picanha.png'
import Pizza from '../../assets/images/Pizza.png'
import { useNavigate } from 'react-router-dom'

function FoodList(){
    const navigate = useNavigate();

    function clickDetails(){
        navigate ('/food_details');
    }

    function clickAdd(){
        navigate ('/cart')
    }



    return(
        <div>
            <input className="search-bar" type="text" placeholder="Procura refeições..." />
            <ul  className = 'meal-main'>
                <li className='meal-box' >
                    <div >
                        <div className='meal'>
                            <img className='meal-img' src = {Picanha} alt="Prato em cima da mesa" />
                        </div>
                         <div>
                             <h1>Picanha</h1>
                             <h2>Deliciosa Picanha Argentina</h2>
                             <p>15.90€</p>
                             <button className="more-info" onClick={clickDetails}>Detalhe</button>
                             <button className="add-cart" onClick={clickAdd}> Adicionar </button>
                           
                         </div>
                    </div>
                </li>
                <li className='meal-box' >
                    <div >
                        <div className='meal'>
                            <img src = {Pizza} alt="Prato em cima da mesa" />
                        </div>
                         <div>
                             <h1>Pizza</h1>
                             <h2>A nossa Pizza no forno</h2>
                             <p>12.90€</p>
                             <button className="more-info" onClick={clickDetails}>Detalhe</button>
                             <button className="add-cart" onClick={clickAdd}> Adicionar </button>
                         </div>
                    </div>
                </li>
                <li className='meal-box' >
                    <div >
                        <div className='meal'>
                            <img src = {Picanha} alt="Prato em cima da mesa" />
                        </div>
                         <div>
                             <h1>Picanha</h1>
                             <h2>Deliciosa Picanha Argentina</h2>
                             <p>15.90€</p>
                             <button className="more-info" onClick={clickDetails}>Detalhe</button>
                             <button className="add-cart" onClick={clickAdd}> Adicionar </button>
                         </div>
                    </div>
                </li>
                <li className='meal-box' >
                    <div >
                        <div className='meal'>
                            <img src = {Pizza} alt="Prato em cima da mesa" />
                        </div>
                         <div>
                             <h1>Pizza</h1>
                             <h2>A nossa Pizza no forno</h2>
                             <p>12.90€</p>
                             <button className="more-info" onClick={clickDetails}>Detalhe</button>
                             <button className="add-cart" onClick={clickAdd}> Adicionar </button>
                         </div>
                    </div>
                </li>
                <li className='meal-box' >
                    <div >
                        <div className='meal'>
                            <img src = {Picanha} alt="Prato em cima da mesa" />
                        </div>
                         <div>
                             <h1>Picanha</h1>
                             <h2>Deliciosa Picanha Argentina</h2>
                             <p>15.90€</p>
                             <button className="more-info" onClick={clickDetails}>Detalhe</button>
                             <button className="add-cart" onClick={clickAdd}> Adicionar </button>
                         </div>
                    </div>
                </li>
                <li className='meal-box' >
                    <div >
                        <div className='meal'>
                            <img src = {Pizza} alt="Prato em cima da mesa" />
                        </div>
                         <div>
                             <h1>Pizza</h1>
                             <h2>A nossa Pizza no forno</h2>
                             <p>12.90€</p>
                             <button className="more-info" onClick={clickDetails}>Detalhe</button>
                             <button className="add-cart" onClick={clickAdd}> Adicionar </button>
                         </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}


export default FoodList 