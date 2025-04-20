import { faGasPump, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import '../style/CardData.css';
import { getBookingsApi, removeBookingApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';

function Bookings() {
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await getBookingsApi();
      if (res.status === 200) {
        setBookings(res.data);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch bookings");
    }
  };

  const handleReturn = async (id) => {
    try {
      const res = await removeBookingApi(id);
      if (res.status === 200 || res.status === 204) {
        toast.success("Car returned successfully!");
        fetchBookings();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to return car");
    }
  };

  return (
    <>
      <div className="container mt-3 mb-5" style={{
            background: "",
            minHeight: '100vh',
            
            
        }}>
      <h3 className='text-center pb-5 fw-semibold text-primary'> MY BOOKINGS</h3>
        <div className="row g-4  pb-5">

        {/* booking card */}
        {
          bookings.length > 0 ? bookings.map((car, index) => (
          <div key={index} className="col-md-4 col-lg-4" >
            <div className='card shadow-lg rounded-4 h-100 position-relative'>
              <img
                src={car.image}
                className="card-img-top rounded-top-4"
                alt="Car"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold text-primary mb-2"> {car.carName} </h5>
                  <p className=" text-white mb-2">📅 Booking Date: <strong className='text-white'>{new Date().toLocaleDateString('en-GB')}</strong></p>
                  <div className="d-flex justify-content-between text-muted mb-3">
                    <span className='text-white'><FontAwesomeIcon icon={faGasPump} className='text-danger' /> {car.fuelType}</span>
                    <span className='text-white'><FontAwesomeIcon icon={faUsers} className='text-primary'/> {car.seats} Seater</span>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-info btn-sm px-4 rounded w-50" onClick={() => handleReturn(car.id)}>Return</button>
                </div>
              </div>
            </div>
          </div>
           )) : <p className='text-center text-muted fs-3'>No bookings yet</p>
          }
         

        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  );
}

export default Bookings;
