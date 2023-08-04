import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CarDetails() {
  const { id } = useParams();
  const [carData, setCarData] = useState([]);
  const[isLoading,setIsLoading]=useState(true)

  useEffect(() => {
    fetch(`https://example-data.draftbit.com/cars/${id}`)
    .then(resp=> resp.json())
    .then(data=>{
        setCarData(data);
        setIsLoading(false)

    })
         .catch ((error)=>{
            console.log(error);
            setIsLoading(false)
         }) 
  }, [id]);

  return (
    <div>
      <h2>Car Details</h2>
      {isLoading ? (
        <p>Loading car details...</p>
      ) : (
        <div>
            <img src={carData.image_thumb}/>
        <p>Car ID: {carData.id}</p>
        <p>Make: {carData.make_id}</p>
        <p>Model: {carData.model}</p>
        <p>Year: {carData.year}</p>
        <p>Price: ${carData.price}</p>
      </div>
      )}
    </div>
  );
}

export default CarDetails;