import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <form>
        <label>
          Nome:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Mensagem:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default ContactForm;
