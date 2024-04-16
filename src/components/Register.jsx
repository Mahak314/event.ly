import React, { useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
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
  
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Invalid email address');
      return;
    }
  
    if (pass.length < 6) {
      setEmailError('Password must be at least 6 characters long');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, pass }),
      });
  
      if (response.status === 201) {
        navigate('/Homepage1');
      } else {
        setEmailError('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }  

    // If email and password are valid, you can proceed with registration
    // You can add your registration logic here

    // After successful registration, you can navigate to another page
    // navigate("/Homepage1");
  }
  const user = { name, email, pass };
  return (
    <div className="main-content">
      <div className={`auth-form-container ${fadeIn ? 'fade-in' : ''}`}>
        <h2 className="registerh2">Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Full Name" required />
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
          <div className="error">{emailError}</div>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" required />
          <button type="submit" className="login-button1">Register</button>
        </form>
        <button className="link-btn">
          <Link to="/Loginpage">Already have an account? Login here.</Link>
        </button>
      </div>
    </div>
  );
}

export default Register;
