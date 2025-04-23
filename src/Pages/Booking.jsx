import React, { useEffect, useState } from "react";
import { getBookingsDetailsApi } from "../services/allApi";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await getBookingsDetailsApi();
        setBookings(res.data);  
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };
  
    fetchBookings();
  }, []);

  return (
    <div className="container mt-5" style={{minHeight:"100vh"}}>
       <div className="container mt-5">
       <h3 className='text-center pb-4 fw-semibold text-primary' style={{marginTop:"-60px"}}> MY BOOKINGS</h3>
        <div className="row justify-content-center">
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index}>
                <div className="border border-light p-3 rounded-4 shadow bbb text-white" style={{ backgroundColor: '#1e2a38' }}>
                  <div className="text-center mb-3">
                    <img src={booking.carImage || 'https://cdn.pixabay.com/photo/2012/04/12/23/47/car-30984_1280.png'} alt={booking.carName} className="img-fluid rounded-3" style={{ height: '150px', objectFit: 'cover' }} />
                  </div>
                  <h5 className="mb-3 text-center">Booking Details</h5>
                  <div className="d-flex justify-content-between mb-2"><small>Car:</small><small>{booking.carName}</small></div>
                  <div className="d-flex justify-content-between mb-2"><small>Start Date:</small><small>{booking.fromDate}</small></div>
                  <div className="d-flex justify-content-between mb-2"><small>End Date:</small><small>{booking.toDate}</small></div>
                  <div className="d-flex justify-content-between mb-2"><small>Price/Day:</small><small>&#8377; {booking.pricePerDay}</small></div>
                  <div className="d-flex justify-content-between mb-2"><small>Total Days:</small><small>{booking.days}</small></div>
                  <div className="d-flex justify-content-between border-top pt-2">
                    <strong>Total:</strong><strong className="text-success">&#8377; {booking.totalPrice}</strong>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p className="text-center text-muted fs-3">No bookings found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookings;

