import React, { Component, useState } from 'react';
import "./Form.css"



function SubscriptionForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Susbcreve a nossa newsletter e fica a par das novidades</h2>
      <label htmlFor="email">Digite seu email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Inscrever</button>
    </form>
  );
}


export default SubscriptionForm;
