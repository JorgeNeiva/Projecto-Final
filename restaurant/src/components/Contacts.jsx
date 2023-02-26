import React, { useEffect } from "react";
import { useState } from "react";

const Contacts = () => {
  const [contact, setContact] = useState(undefined);

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    try {
      const resp = await fetch(
        "https://63f0a399ff1b45a1a43e7d50.mockapi.io/Contacts/6"
      );
      const dataContact = await resp.json();
      setContact(dataContact);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      {contact && (
        <div>
          <div className="contact-details">
            <h1>{contact.Name}</h1>
            <p>{contact.Adress}</p>
            <p>{contact.Email}</p>
            <p>{contact.Phone}</p>
            <p>{contact.PostalCode}</p>
          </div>
          <div className="map">
            <iframe
              title="cenas"
              width="600"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Torres%20Vedras&t=k&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
export default Contacts;
