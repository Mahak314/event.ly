import React from 'react';
import Navbar2 from './Navbar2';
import Events from './Events';
import Usericon from './Usericon';

function Eventsheader(){
    return(
        <div id='main'>
            <Navbar2/>
            <Usericon/>
            <Events/>
        </div>
    )
}
export default Eventsheader;