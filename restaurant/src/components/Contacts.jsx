import { useNavigate } from 'react-router-dom'
import Facebook from '../assets/logos/facebook.png'
import Instagram from '../assets/logos/instagram.png'
import React, { useState, useEffect } from 'react';

function Contacts() {
  const [webApiContact, setWebApiContact] = useState(null);

  useEffect(() => {
    fetch('https://63f0a399ff1b45a1a43e7d50.mockapi.io/Contacts/6')
      .then(response => response.json())
      .then(data => setWebApiContact(data));

  }, []);

  return(
    <div>
      <h1>{webApiContact.Name}</h1>
      <p>{webApiContact.Address}</p>
      <p>{webApiContact.PostalCode}</p>
      <p>{webApiContact.Phone}</p>
      <p>{webApiContact.Email}</p>
    </div>
  )
}

// <img src = {Facebook}></img>
// <img src = {Instagram}></img>

export default Contacts;

