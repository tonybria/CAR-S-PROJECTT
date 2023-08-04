import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CarList() {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating fetching car data from an API
    fetch(`https://example-data.draftbit.com/cars/`)
      .then(resp => resp.json())
      .then(data => {
        setCars(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="   bg-gray-100 min-h-screen p-8 ">
      <h2 className="text-2xl font-semibold mb-4">Car List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className='flex flex-wrap '>
          {cars.map(car => (
            <li key={car.id} className="bg-white shadow-md rounded-lg p-4 mb-4 m-2">
              <h3 className="text-xl font-semibold">
                <Link to={`/cars/${car.id}`} className="text-blue-500 hover:underline">
                  {car.make_1d} {car.model}
                </Link>
              </h3>
              <p className="text-gray-600">Year: {car.year}</p>
              <p className="text-gray-600">Price: ${car.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CarList;
