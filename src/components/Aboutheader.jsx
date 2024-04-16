import React from 'react';
import Navbar2 from './Navbar2';
import About from './About';
import Usericon from './Usericon';
import NewsletterSubscription from './NewsletterSubscription';
function Aboutheader(){
    return(
        <div id='main'>
            <Navbar2/>
            <Usericon/>
            <About/>
            <NewsletterSubscription/>
        </div>
    )
}
export default Aboutheader;