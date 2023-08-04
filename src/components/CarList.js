import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CarList() {
  const [cars, setCars] = useState([]);
  const[isLoading,setIsLoading]=useState(true)

  useEffect(() => {
    // Simulating fetching car data from an API
    
    fetch(`https://example-data.draftbit.com/cars/`)
    .then(resp=> resp.json())
    .then(data=>{
        setCars(data);
        setIsLoading(false)

    })
      
    
  }, []);

  return (
    <div>
      <h2>Car List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cars.map(car => (
            <li key={car.id}>
              <h3>
                <Link to={`/cars/${car.id}`}>{car.make_1d} {car.model}</Link>
              </h3>
              <p>Year: {car.year}</p>
              <p>Price: ${car.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CarList;