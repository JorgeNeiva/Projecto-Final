
import './ProductList.css'
import Picanha from '../../assets/picanha.png'

const FoodList = () => {
    return(
        <ul>
            <div>
                <li className='meal'>
                    <div>
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
            </div>
            <li>
                <img src = {Picanha} alt="Prato em cima da mesa" />
                <h1>Picanha</h1>
                <h2>Deliciosa Picanha Argentina</h2>
                <p>15.90€</p>
                <input className="more-info" type="submit" value="Detalhe" />
                <input className="add-cart" type="submit" value="Encomendar" />
            </li>
            <li>
            <img src = {Picanha} alt="Prato em cima da mesa" />
                <h1>Picanha</h1>
                <h2>Deliciosa Picanha Argentina</h2>
                <p>15.90€</p>
                <input className="more-info" type="submit" value="Detalhe" />
                <input className="add-cart" type="submit" value="Encomendar" />
            </li>
            <li>
            <img src = {Picanha} alt="Prato em cima da mesa" />
                <h1>Picanha</h1>
                <h2>Deliciosa Picanha Argentina</h2>
                <p>15.90€</p>
                <input className="more-info" type="submit" value="Detalhe" />
                <input className="add-cart" type="submit" value="Encomendar" />
            </li>
            <li>
                <img src = {Picanha} alt="Prato em cima da mesa" />
                <h1>Picanha</h1>
                <h2>Deliciosa Picanha Argentina</h2>
                <p>15.90€</p>
                <input className="more-info" type="submit" value="Detalhe" />
                <input className="add-cart" type="submit" value="Encomendar" />
            </li>
            <li>
            <img src = {Picanha} alt="Prato em cima da mesa" />
                <h1>Picanha</h1>
                <h2>Deliciosa Picanha Argentina</h2>
                <p>15.90€</p>
                <input className="more-info" type="submit" value="Detalhe" />
                <input className="add-cart" type="submit" value="Encomendar" />
            </li>
        </ul>
    )
}


export default FoodList 