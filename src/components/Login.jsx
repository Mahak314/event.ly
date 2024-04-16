import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailError, setEmailError] = useState('');
  const [error, setError] = useState('');
  const [fadeIn, setFadeIn] = useState(false);

  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    // Add the fade-in class after a short delay
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500); // Adjust the delay as needed

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({email,pass});
    // Send the email and password to the server for login verification
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, pass }),
      });

      if (response.ok) {
        // Handle successful login, e.g., store authentication token
        const data = await response.json();
        // Redirect to a protected page or the homepage
        navigate("/Homepage1");
      } else {
        // Handle login error (e.g., display an error message)
        setError('Login failed. Please check your email and password.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  return (
    <div className="main-content">
      <div className={`auth-form-container ${fadeIn ? 'fade-in' : ''}`}>
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Email"
            required
          />
          <div className="error">{emailError}</div>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          {error && <div className="error">{error}</div>} {/* Display error message */}
          <button type="submit" className="login-button1">Log In</button>
        </form>
        <button className="link-btn">
          <Link to="/Registerpage">Don't have an account? Register here.</Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
