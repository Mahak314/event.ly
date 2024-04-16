import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Content() {
  const text = "Looking for the latest events?";
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 70); // Adjust the typing speed here (in milliseconds)

    return () => clearTimeout(timeout);
  }, [currentIndex]);
  return (
    <div className="app-container">
      <div className="main-content">
        <div className="top-right-buttons">
          <button className="login-button"><Link to="/Loginpage">Login</Link></button>
          <button className="signup-button"><Link to="/Registerpage">Sign Up</Link></button>
        </div>
        <div className="content">
          <span>{displayText}</span>
        </div>
        <button className="transparent-button1">
          <Link to="/Loginpage" className="button-link">Browse Now→</Link>
        </button>
      </div>
    </div>
  );
}

export default Content;