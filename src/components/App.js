import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Home from './Home';
import CarList from './CarList';
import CarDetails from './CarDetails';
import Display from './Display';

function App() {
  return (
   <div>
    <Display/>
    <Routes>
      <Route exact path="/" element={<Home/> }/>
      <Route exact path="/cars" element={<CarList/>} />
      <Route exact path="/cars/:id" element={<CarDetails/>} />
      
</Routes>
<footer>
        <p>© 2023 Car Project. All rights reserved.</p>
      </footer>
   </div>
  );
}

export default App;