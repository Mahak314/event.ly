import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Homecontent() {
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
        <div className="content1">
          <span>{displayText}</span>
        </div>
        <button className="transparent-button">
          <Link to="/Eventspage" className="button-link">Browse Now→</Link>
        </button>
      </div>
    </div>
  );
}

export default Homecontent;