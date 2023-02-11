
import './ProductList.css'
import Picanha from '../../assets/images/picanha.png'

const FoodList = () => {
    return(
        <ul  className = 'meal-main'>
                <li className='meal-box' >
                    <div className='meal'>
                        <div>
                            <img src = {Picanha} alt="Prato em cima da mesa" />
                        </div>
                         <div>
                             <h1>Picanha</h1>
                             <h2>Deliciosa Picanha Argentina</h2>
                             <p>15.90€</p>
                             <input className="more-info" type="submit" value="Detalhe" />
                             <input className="add-cart" type="submit" value="Encomendar" />
                         </div>
                    </div>
                </li>
                <li className='meal-box' >
                    <div className='meal'>
                        <div className='meal-img'>
                            <img src = {Picanha} alt="Prato em cima da mesa" />
                        </div>
                         <div>
                             <h1>Picanha</h1>
                             <h2>Deliciosa Picanha Argentina</h2>
                             <p>15.90€</p>
                             <input className="more-info" type="submit" value="Detalhe" />
                             <input className="add-cart" type="submit" value="Encomendar" />
                         </div>
                    </div>
                </li>
                <li className='meal-box' >
                    <div className='meal'>
                        <div>
                            <img src = {Picanha} alt="Prato em cima da mesa" />
                        </div>
                         <div>
                             <h1>Picanha</h1>
                             <h2>Deliciosa Picanha Argentina</h2>
                             <p>15.90€</p>
                             <input className="more-info" type="submit" value="Detalhe" />
                             <input className="add-cart" type="submit" value="Encomendar" />
                         </div>
                    </div>
                </li>
                <li className='meal-box' >
                    <div className='meal'>
                        <div>
                            <img src = {Picanha} alt="Prato em cima da mesa" />
                        </div>
                         <div>
                             <h1>Picanha</h1>
                             <h2>Deliciosa Picanha Argentina</h2>
                             <p>15.90€</p>
                             <input className="more-info" type="submit" value="Detalhe" />
                             <input className="add-cart" type="submit" value="Encomendar" />
                         </div>
                    </div>
                </li>
                <li className='meal-box' >
                    <div className='meal'>
                        <div>
                            <img src = {Picanha} alt="Prato em cima da mesa" />
                        </div>
                         <div>
                             <h1>Picanha</h1>
                             <h2>Deliciosa Picanha Argentina</h2>
                             <p>15.90€</p>
                             <input className="more-info" type="submit" value="Detalhe" />
                             <input className="add-cart" type="submit" value="Encomendar" />
                         </div>
                    </div>
                </li>
        </ul>
    )
}


export default FoodList 