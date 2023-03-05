import React, { useEffect } from "react";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import "./Contacts.css";
import ContactForm from "../Form/Form";

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
    <div >
      {contact && (
        <div>
          <div className="contact-details">
            <h1>{contact.Name}</h1>
            <p>{contact.Address}</p>
            <p>{contact.Email}</p>
            <p>{contact.Phone}</p>
            <p>{contact.PostalCode}</p>
          </div>
          
          <div className="contacts-map">
              <iframe
                title="Localização"
                width="600"
                height="400"
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.825199206108!2d-9.257488284811293!3d39.08767917954182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1f2db8223fe3d5%3A0x1fe7497bfdc7c746!2sAv.%20Gen.%20Humberto%20Delgado%206%2C%202560-272%20Torres%20Vedras!5e0!3m2!1spt-PT!2spt!4v1677454165256!5m2!1spt-PT!2spt"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
            ></iframe>
          </div>
            <ContactForm></ContactForm>
        </div>
      )}
    </div>
  );
};
export default Contacts;
