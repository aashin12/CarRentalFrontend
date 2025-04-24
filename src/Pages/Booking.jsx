import React, { useEffect, useState } from "react";
import { deleteBookingsDetailsApi, getBookingsDetailsApi } from "../services/allApi";
import { toast, ToastContainer } from "react-toastify";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  const handleDeleteBooking = async (bookingId) => {
    try {
      const res = await deleteBookingsDetailsApi(bookingId);
      if (res.status === 200 || res.status === 204) {
        toast.success("Deleted successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 2200);  
      } else {
        toast.warning("Failed to delete");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error deleting.");
    }
  };

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
    <>
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
                  <div className="d-flex justify-content-end border-top pt-2">
                    <strong>Total:</strong><strong className="text-success">&#8377; {booking.totalPrice}</strong>
                  </div>
                  <div className="text-center">
                  <button className='btn btn-danger' onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
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
    <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
    
  );
}

export default Bookings;

