import React, { useState } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validate form fields
  const validateForm = () => {
    let formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) {
      formErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }

    return formErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000);
      return;
    }

    try {
      // Send data to backend
      const response = await axios.post('https://portfolio-main-vval.onrender.com/api/contact', formData);
      if (response.data.success) {
        setStatusMessage('Message sent successfully! Check Your Gmail');

        // Send email using EmailJS
        await emailjs.send(
          'service_pwxx8yt',  // Replace with your EmailJS service ID
          'template_teiu2hc', // Replace with your EmailJS template ID
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          'OU8LjdmI6Dh1TFy2l'   // Replace with your EmailJS public key
        );

        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        setStatusMessage('Failed to send message.');
      }
    } catch (error) {
      setStatusMessage('Error occurred while sending message.');
    }
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className='section__title'>Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email. 👋</p>
        </div>
        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                placeholder="Insert your name"
                className={`contact__form-input ${errors.name ? 'error' : ''}`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                placeholder="Insert your email"
                className={`contact__form-input ${errors.email ? 'error' : ''}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
          </div>
          <div className="contact__form-div">
            <textarea
              name="subject"
              cols="30"
              rows="2"
              className={`contact__form-input ${errors.subject ? 'error' : ''}`}
              placeholder="Insert your subject"
              value={formData.subject}
              onChange={handleChange}
              style={{ resize: 'none' }}
            ></textarea>
            {errors.subject && <p className="error-message">{errors.subject}</p>}
          </div>
          <div className="contact__form-div">
            <textarea
              name="message"
              cols="30"
              rows="10"
              className={`contact__form-input contact__form-area ${errors.message ? 'error' : ''}`}
              placeholder="Leave your message"
              value={formData.message}
              onChange={handleChange}
              style={{ resize: 'none' }}
            ></textarea>
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>
          <button className="btn send-btn" type="submit">Send Message</button>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </form>
      </div>
      {showPopup && (
        <div className="popup-message">
          <p>All fields are required. Please fill in the missing information.</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
