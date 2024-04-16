import React from 'react';
import logo from '../images/img1.png';
import social1 from '../images/ig.png';
import social2 from '../images/fb.png';
import social3 from '../images/twitter.png';
import { Link } from 'react-router-dom';

function Navbar2() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Your Logo" className="logo" />
          <div className="evently">
            event.ly
          </div>
        </div>
        <ul className="rotated-links">
          <li className="rotated-link-item"><Link to="/Homepage1"><span>Home</span></Link></li>
          <li className="rotated-link-item"><Link to="/Eventspage"><span>Events</span></Link></li>
          <li className="rotated-link-item"><Link to="/Aboutpage"><span>About</span></Link></li>
          <li className="rotated-link-item"><Link to="/Contactuspage"><span>Contact</span></Link></li>
          {/* Add more links as needed */}
        </ul>
        <div className="sidefooter">
          <div className="social-icons"> 
          <a href="https://instagram.com/event._ly?igshid=MzRlODBiNWFlZA==">
          <img src={social1} alt="IG" className="image-link" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61552018621565">
          <img src={social2} alt="IG" className="image-link1" />
          </a>
          <a href="https://x.com/event__ly?s=21">
          <img src={social3} alt="IG" className="image-link2" />
          </a>
          </div>
          <p>© 2023 event.ly</p> 
        </div>
      </div>
    </div>
  );
}
export default Navbar2;