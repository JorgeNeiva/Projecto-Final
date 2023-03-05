import { useNavigate } from 'react-router-dom'

const Cart = () => {
    return(
        <div className="your-cart">
            <h1>Este é o teu pedido</h1>
             <ul>
                <li>Pedido 1</li>
                <li>Pedido 2</li>
                <li>Pedido 3</li>
            </ul>
            <button >Finalizar pedido</button>

            <form action="">
            <input type="text" placeholder="Nome" />
            <input type="tel" placeholder='Morada'></input>
            <input type="email" placeholder='E-mail'></input>
            <input type="submit"></input>
            </form>

            
        

        </div>

 
    
            
    )
}


export default Cart
