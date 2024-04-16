import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/contactus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        console.log('Data saved to MongoDB');
        // You can perform any additional actions here (e.g., clear the form).
        setFormData({
          name: '',
          email: '',
          feedback: '',
        });
      } else {
        console.error('Error saving data');
        setFormData({
          name: '',
          email: '',
          feedback: '',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app-container">
    <div className="main-content">
      <h1 className="contact-heading">Contact <span className="colored-text">Us</span> </h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            id="feedback"
            placeholder="Your Feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="form-textarea"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <div className="alert alert-light" role="alert">
        Note: The website is still under development. We're trying to bring the best stuff for you🤍
      </div>
    </div>
    </div>
  );
}

export default ContactUs;
