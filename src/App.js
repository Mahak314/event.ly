import React from 'react';
import Homepage from './Home';
import Aboutpage from './About';
import Eventspage from './Events';
import Loginpage from './Loginpage';
import Registerpage from './Registerpage';
import Homepage1 from './Homepage1';
import Contactuspage from './Contactuspage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(){
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Aboutpage" element={<Aboutpage />} />
          <Route path="Eventspage" element={<Eventspage />} />
          <Route path="Loginpage" element={<Loginpage />} />
          <Route path="Registerpage" element={<Registerpage />} />
          <Route path="Homepage1" element={<Homepage1 />} />
          <Route path="Contactuspage" element={<Contactuspage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;