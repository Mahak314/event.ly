import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const element = document.querySelector('.secondary');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll); // Remove the scroll listener once the element is visible
        }
      }
    }

    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`about ${isVisible ? 'visible' : ''}`}>
      <h1><span className="colored-text">About</span> Us</h1>
      <p className="mission-paragraph1">
        Welcome to Event.ly, your one-stop destination for discovering and booking unforgettable events! We are passionate about bringing people together and creating memorable experiences. At Event.ly, we believe that life is meant to be lived to the fullest, and what better way to do that than by attending amazing events that cater to your interests and passions? Have questions, suggestions, or feedback? We'd love to hear from you! Our dedicated support team is always ready to assist you in any way we can. Visit our Contact Us page to get in touch. At Event.ly, we are dedicated to making event discovery and booking as enjoyable as the events themselves. Join us on this exciting journey and let Event.ly be your trusted companion in exploring the world of unforgettable experiences. Thank you for choosing us to be a part of your event-filled adventures!
      </p>
      <div className={`secondary ${isVisible ? 'visible' : ''}`}>
      <div className="mission-column">
          <h2>Our Mission</h2>
          <p className="mission-paragraph">
        Our mission is to connect event enthusiasts with a world of possibilities. We understand that finding the perfect event can be a daunting task, and that's why we've made it our mission to simplify the process for you. Whether you're into music concerts, art exhibitions, food festivals, sports events, or anything in between, Event.ly has you covered. We strive to make event discovery effortless, so you can spend less time searching and more time enjoying life's extraordinary moments.
        </p>
        </div>
        <div className="mission-column">
          <h2>Join the Event.ly Community</h2>
          <p className="mission-paragraph">
        We believe that experiences are best enjoyed with others, and that's why we invite you to become a part of the Event.ly community. Connect with fellow event enthusiasts, share your experiences, and stay in the loop with the latest event trends. Follow us on social media, sign up for our newsletter, and embark on a journey to discover events that will leave you with lasting memories.
        </p>
         </div>
    </div>
    </div>
  );
};

export default About;
