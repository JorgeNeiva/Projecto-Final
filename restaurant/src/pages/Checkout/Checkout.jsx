import "./Checkout.css"

const Order = () => {
    return (
      <div>
        <h1 className="order-final"> Pedido Final</h1>
        <p>Ola</p>
        
       
       <form action="">
       <input type="text" placeholder="Nome" />
       <input type="text" placeholder="Morada" />
       <input type="tel" placeholder='Telemóvel'/>
       <input type="email" placeholder='E-mail'/>
       <button type="submit">Finalizar compra</button>      
       </form>
       </div>
       
    
    )
  }
  
  export default Order;