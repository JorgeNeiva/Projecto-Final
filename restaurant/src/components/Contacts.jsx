import { useNavigate } from 'react-router-dom'
import Facebook from '../assets/logos/facebook.png'
import Instagram from '../assets/logos/instagram.png'
import React, { useState, useEffect } from 'react';

function Contacts() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://63f0a399ff1b45a1a43e7d50.mockapi.io/Contacts/6')
      .then(response => response.json())
      .then(data => console.log(data));

  }, []);


}

         // <img src = {Facebook}></img>
         // <img src = {Instagram}></img>






export default Contacts;

