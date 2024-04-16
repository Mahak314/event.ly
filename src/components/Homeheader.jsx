import React from 'react';
import Navbar2 from './Navbar2';
import Homecontent from './Homecontent';
import Usericon from './Usericon';
function Header(){
    return(
        <div id='main'>
            <Navbar2/>
            <Usericon/>
            <Homecontent/>
        </div>
    )
}
export default Header;