import React from 'react';
import { Link } from 'react-router-dom';

function Display({ children }) {
  return (
    <div>
      <header className='flex justify-between'>
        <h1 className='font-bold text-3xl'>Car Project</h1>
        <nav className=''>
          
              <Link to="/">Home</Link>
            
              <Link to="/cars" className='p-4'>Car List</Link>
          
        </nav>
      </header>
      <main>{children}</main>
     
    </div>
  );
}

export default Display;