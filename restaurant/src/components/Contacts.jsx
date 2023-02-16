import { useNavigate } from 'react-router-dom'
import Facebook from '../assets/logos/facebook.png'
import Instagram from '../assets/logos/instagram.png'


const Contacts = () => {
    return(
        <section className="nav-bar">
            <h2>Este é o nosso contacto:</h2>
            <p>910000000</p>
            <img src = {Facebook}></img>
            <img src = {Instagram}></img>
        </section>

    )
}





export default Contacts;

