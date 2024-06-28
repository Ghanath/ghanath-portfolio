import React, { useRef } from "react";

import "./contactFormStyles.css"; // Import the CSS file for styles

import Swal from 'sweetalert2'

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f6af4aab-2d6e-482d-a23e-f391710fd5f2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Sucess",
        text: "Your message has been sent!",
        icon: "success"
      });
    }
  };



  return (
    <div className="contact-form-container">
      <form onSubmit={onSubmit}>
        <label htmlFor="user_name">Name</label>
        <input type="text" id="user_name" name="name" required />

        <label htmlFor="user_email">Email</label>
        <input type="email" id="user_email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
