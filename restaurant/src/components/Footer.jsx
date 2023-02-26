import './Footer.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Footer(){
    const navigate = useNavigate();

    function clickAbout(){
        navigate('/contacts')
    }

    return(
        <footer className='footer-contain'>
            <button className='about-button' onClick={clickAbout}>Onde estamos</button>
        </footer>
    )
}


export default Footer;