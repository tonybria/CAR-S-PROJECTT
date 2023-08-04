import React from 'react';
import { Link } from 'react-router-dom';

function Display({ children }) {
  return (
    <div>
      <header>
        <h1>Car Project</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cars">Car List</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2023 Car Project. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Display;