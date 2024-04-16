import React, { useState, useEffect } from 'react';
import EventBox from './Eventbox';
import img1 from '../images/music.jpeg';
import img2 from '../images/art.jpg';
import img3 from '../images/science.jpg'
import img4 from '../images/food.jpg'
import img5 from '../images/movie.jpg'
import img6 from '../images/book.jpeg'
import img7 from '../images/tech.jpg'
import img8 from '../images/sports.jpg'
import img9 from '../images/model.jpg'
import img10 from '../images/charity.jpg'
function Events() {
  const eventsData = [
    {
      title: 'Music Concert',
      image: img1, // Replace with the appropriate image variable or URL
      date: 'October 10, 2023',
      time: '3:00 PM',
      venue: 'Venue A',
      description: 'Join us for an unforgettable night of live music! Experience the magic of talented musicians, electrifying performances, and a night filled with rhythm and melody.'
    },
    {
      title: 'Art Exhibition',
      image: img2, // Replace with the appropriate image variable or URL
      date: 'October 15, 2023',
      time: '2:30 PM',
      venue: 'Venue B',
      description: 'Discover a world of creativity and imagination at our upcoming art exhibition event. Join us as we showcase a diverse collection of artworks that will inspire, provoke thought, and transport you to new realms of artistic expression. Do not miss this opportunity to immerse yourself in the beauty of visual artistry!'
    },
    {
      title: 'Science Conference',
      image: img3, // Replace with the appropriate image variable or URL
      date: 'November 20, 2023',
      time: '10:00 AM',
      venue: 'Venue C',
      description: 'Explore the frontiers of knowledge and innovation at our upcoming science conference event. Join leading experts, researchers, and enthusiasts as we delve into cutting-edge discoveries, breakthrough technologies, and thought-provoking discussions. Get ready to be inspired by the wonders of science!'
    },
    {
      title: 'Food Festival',
      image: img4, // Replace with the appropriate image variable or URL
      date: 'December 5, 2023',
      time: '5:30 PM',
      venue: 'Venue D',
      description: "Savor the flavors of our delectable food festival event! Indulge in a culinary journey that celebrates a world of tastes, aromas, and cultures. From mouthwatering street food to gourmet delights, join us for a gastronomic adventure that will tantalize your taste buds and leave you craving for more."
    },
    {
      title: 'Movie Premiere',
      image: img5, // Replace with the appropriate image variable or URL
      date: 'January 15, 2024',
      time: '7:00 PM',
      venue: 'Venue E',
      description: "Step into the glitz and glamour of our exclusive movie premiere event. Be among the first to witness the cinematic masterpiece that has been eagerly anticipated by film enthusiasts. Join us for a star-studded evening filled with red carpet excitement, followed by the screening of a captivating story that will leave you on the edge of your seat."
    },
    {
      title: 'Book Launch',
      image: img6, // Replace with the appropriate image variable or URL
      date: 'February 12, 2024',
      time: '1:00 PM',
      venue: 'Venue F',
      description: "Embark on a literary journey with us at our book launch event. Celebrate the birth of a new literary gem as we introduce you to an author's captivating words and stories. Join fellow book lovers for an evening of insightful readings, author interactions, and the opportunity to get your hands on a signed copy. It's a night for readers and wordsmiths alike!"
    },
    {
      title: 'Tech Symposium',
      image: img7, // Replace with the appropriate image variable or URL
      date: 'March 8, 2024',
      time: '9:30 AM',
      venue: 'Venue G',
      description: "Join us for an exciting Tech Symposium event showcasing the latest innovations, thought-provoking discussions, and networking opportunities in the ever-evolving world of technology."
    },
    {
      title: 'Sports Championship',
      image: img8, // Replace with the appropriate image variable or URL
      date: 'April 22, 2024',
      time: '4:00 PM',
      venue: 'Venue H',
      description: "Get ready for the ultimate showdown! Our Sport Championship event brings together the best athletes in an adrenaline-pumping competition you won't want to miss."
    },
    {
      title: 'Fashion Show',
      image: img9, // Replace with the appropriate image variable or URL
      date: 'May 10, 2024',
      time: '6:30 PM',
      venue: 'Venue I',
      description: "Experience the height of style and elegance at our exclusive Fashion Show event. Be captivated by the latest trends, stunning designs, and the glamour of the runway."
    },
    {
      title: 'Charity Gala',
      image: img10, // Replace with the appropriate image variable or URL
      date: 'June 5, 2024',
      time: '8:00 PM',
      venue: 'Venue J',
      description: "Join us for a night of compassion and giving at our Charity Gala event. Together, we'll make a positive impact on the lives of those in need, all while enjoying an elegant evening of philanthropy and entertainment."
    },
  ];
  const [showBoxes, setShowBoxes] = useState(false);
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show'); // Add "show" class when element is visible
        }
      });
    }, options);

    // Observe each event-box element
    document.querySelectorAll('.event-box').forEach((box) => {
      observer.observe(box);
    });

    // Cleanup the observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);
    return (
      <div className="app-container">
      <div className="main-contentevents">
        <div className="upcoming-events">
          <p>
            <span className="colored-text">Upcoming events</span> which you don't want to miss:
          </p>
          {eventsData.map((event, index) => (
            <EventBox key={index} event={event} />
          ))} 
      <div className="progress-text">
        <span className="colored-text">Fun Fact: </span> Over 35% of the users have signed up for atleast one event!
      </div>
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '35%' }}></div>
      </div>
     </div>
      </div>
    </div>
      );
    }
    
    export default Events;
