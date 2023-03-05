import './Footer.css'
import { Navigate, useNavigate } from 'react-router-dom';
import ShareButtons from '../Social/Social';

function Footer(){
    const navigate = useNavigate();

    function clickAbout(){
        navigate('/contacts')
    }

    return(
        <footer className='footer-contain'>
            <div >
                <button className='about-button'  onClick={clickAbout}>Onde estamos</button>
            </div>
            <div className="social-buttons">
                <ShareButtons ></ShareButtons>
            </div>
            
        </footer>
    )
}


export default Footer;