import React, { useEffect, useState }  from "react";
import "../style/bookings.css";

import CardData from "../Components/CardData"; // Use your actual path
import { getAllCarsApi } from "../services/allApi"; // Assuming this fetches car data

const Bookings = () => {

  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    try {
      const res = await getAllCarsApi(); // You need this API to get cars
      if (res.status === 200) {
        setCars(res.data);
      }
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);


  return (
    <>
    <style>
      {
        `
        .title {
          color: #6c63ff;
          font-weight: 600;
          text-align: center;
          margin-bottom: 1.5rem;
          text-shadow: 0 0 8px rgba(108, 99, 255, 0.25);
        }
        `
      }
    </style>
    <div >
      <div >
        <h2 className="title">Our Cars</h2>

       

        
          
             {/* Your card component */}
          <CardData cars={cars} isAdminView={true} />
          
        
      </div>
    </div>
    </>
  );
};

export default Bookings;
