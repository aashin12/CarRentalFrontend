import React from 'react';
import {  faGasPump, faHeart, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/CardData.css';
import {  addToWishlistApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';
import { deleteCarApi } from '../services/allApi';
import { Link, useNavigate } from 'react-router-dom';



function CardData({ cars, isAdminView = false,setActiveTab}) {

  // Inside your CardData component
const navigate = useNavigate();

const handleUpdateCar = (id) => {
  navigate(`/updateform/${id}`);
};


  const handleDeleteCar = async (carId) => {
    try {
      const res = await deleteCarApi(carId);
      if (res.status === 200 || res.status === 204) {
        toast.success("Car deleted successfully!");
        setTimeout(() => {
          if (setActiveTab) setActiveTab('dashboard');
        }, 1500); 
      } else {
        toast.warning("Failed to delete car.");
      }
      
    } catch (error) {
      console.error(error);
      toast.error("Error deleting car.");
    }
  };

  const handleAddToWishlist = async (car) => {
    try {
      const res = await addToWishlistApi(car);  // sending full car object
      if (res.status === 200 || res.status === 201) {
        toast.success("Added to wishlist!");
      } else {
        toast.warning("Car already in wishlist.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add to wishlist.");
    }
  };

  
 
  
  return (
    <>
    <div className="container mt-5 mb-5">
      <div className="row row-gap-4">
        {
          cars.length > 0 ? cars.map((car, index) => (
            <div key={index} className="col-md-3">
              <div className='border border-light p-2 rounded-4 customCard'>
                <div className='d-flex justify-content-between align-items-center px-2 py-2'>
                  <h5>{car.carName}</h5>
                  {
                    !isAdminView && (
                      <button className='btn' onClick={() => handleAddToWishlist(car)}>
                        <FontAwesomeIcon icon={faHeart} className='text-danger' />
                      </button>
                    )
                  }
                </div>
                <hr />
                <div className='d-flex justify-content-around'>
                  <div className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faGasPump} className='me-2' />
                    <h6 style={{ color: 'lightgray' }}>{car.fuelType}</h6>
                  </div>
                  <div className='d-flex align-items-center'>
                    <img style={{ width: '19px' }} src="https://cdn4.iconfinder.com/data/icons/smashicons-car-parts-greyscale-vol-1/60/20_-Doors_Open-_car_part_vehicle-512.png" alt="" className='me-2' />
                    <h6 style={{ color: 'lightgray' }}>{car.carDoors} Doors</h6>
                  </div>
                </div>
                <div className='d-flex justify-content-around mt-3'>
                  <div className='d-flex align-items-center'>
                    <img style={{ width: '18px', backgroundColor: 'gray' }} src="https://cdn1.iconfinder.com/data/icons/rcons-transport/32/transmission_manual-1024.png" alt="" className='me-2' />
                    <h6 style={{ color: 'lightgray' }}>{car.transmission}</h6>
                  </div>
                  <div className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faUsers} className='me-2' />
                    <h6 style={{ color: 'lightgray' }}>{car.seats} 4 seater </h6>
                  </div>
                </div>
                <div className='w-100 mt-3'>
                  <img style={{ width: '100%', height: '200px' }} className='rounded-4' src={car.image} alt="no img" />
                </div>
                <hr />
                <div className='d-flex justify-content-between'>
                  <div>
                    <h6>&#8377; {car.price}</h6>
                    <p> Per day</p>
                  </div>
                  {
                    isAdminView ? (
                      <div className='d-flex gap-1'>
                        <button className='btn btn-primary' onClick={() => handleUpdateCar(car.id)} >Update</button>
                        <button className='btn btn-danger' onClick={() => handleDeleteCar(car.id)}>Delete</button>
                      </div>
                    ) : (
                      <div className='d-flex align-items-center'>
                        
                        <Link to={'/bookingform'} state={{car}}><button className='btn bg-danger' >Book</button></Link>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          )) : <p className='text-center'>No cars available</p>
        }
      </div>
    </div>
     <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
     </>
  );
}

export default CardData;
