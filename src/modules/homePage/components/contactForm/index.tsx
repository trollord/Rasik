import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_5g3ffli', // Replace with your EmailJS service ID
      'template_vt9r61r',
      formData,
      'A2aWUHE6R1nJV1nOh' // Replace with your EmailJS user ID (public key)
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </div>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default ContactForm;
