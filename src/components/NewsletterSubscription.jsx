import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [eData, setEData] = useState({
    email: '',
  });
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target; // Change 'email' to 'name'
    setEData({ ...eData, [name]: value }); // Change 'edata' to 'eData'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/newslettersubscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eData), // Change 'edata' to 'eData'
      });
      if (response.status === 200) {
        console.log('Data saved to MongoDB');
        // You can perform any additional actions here (e.g., clear the form).
      } else {
        console.error('Error saving data');
      }
    } catch (error) {
      console.error(error);
    }
    setSubscribed(true);
  };
  
  return (
    <div className="newsletter-subscription">
      <h2>Subscribe to Our Newsletter</h2>
      {subscribed ? (
        <p>Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={eData.email} // Change 'email' to 'eData.email'
            onChange={handleChange}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
};

export default NewsletterSubscription;