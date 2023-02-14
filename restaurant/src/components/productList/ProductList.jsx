
import './ProductList.css'
import Picanha from '../../assets/images/picanha.png'
import Pizza from '../../assets/images/Pizza.png'

const FoodList = () => {
    return(
        <div>
            <input className="search-bar" type="text" placeholder="Search..." />
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
                             <input className="more-info" type="submit" value="Detalhe" />
                             <input className="add-cart" type="submit" value="Encomendar" />
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
                             <input className="more-info" type="submit" value="Detalhe" />
                             <input className="add-cart" type="submit" value="Encomendar" />
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
                             <input className="more-info" type="submit" value="Detalhe" />
                             <input className="add-cart" type="submit" value="Encomendar" />
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
                             <input className="more-info" type="submit" value="Detalhe" />
                             <input className="add-cart" type="submit" value="Encomendar" />
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
                             <input className="more-info" type="submit" value="Detalhe" />
                             <input className="add-cart" type="submit" value="Encomendar" />
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
                             <input className="more-info" type="submit" value="Detalhe" />
                             <input className="add-cart" type="submit" value="Encomendar" />
                         </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}


export default FoodList 