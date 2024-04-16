import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
function Header(){
    return(
        <div id='main'>
            <Navbar/>
            <Content/>
        </div>
    )
}
export default Header;