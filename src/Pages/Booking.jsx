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
      <style>
        {
          `
        /* From Uiverse.io by andrew-demchenk0 */ 
.buttondelete {
  --main-focus: #2d8cf0;
  --font-color: #323232;
  --bg-color-sub: #dedede;
  --bg-color: #eee;
  --main-color: #323232;
  position: relative;
  width: 150px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  background-color: var(--bg-color);
  border-radius: 10px;
  overflow: hidden;
}

.buttondelete, .button__icon, .button__text {
  transition: all 0.3s;
}

.buttondelete .button__text {
  transform: translateX(33px);
  color: var(--font-color);
  font-weight: 600;
}

.buttondelete .button__icon {
  position: absolute;
  transform: translateX(109px);
  height: 100%;
  width: 39px;
  background-color: var(--bg-color-sub);
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttondelete .svg {
  width: 20px;
  fill: var(--main-color);
}

.buttondelete:hover {
  background: var(--bg-color);
}

.buttondelete:hover .button__text {
  color: transparent;
}

.buttondelete:hover .button__icon {
  width: 148px;
  transform: translateX(0);
}

.buttondelete:active {
  transform: translate(3px, 3px);
  box-shadow: 0px 0px var(--main-color);
}
        `
        }
      </style>
      <div className="container mt-5" style={{ minHeight: "100vh" }}>
        <div className="container mt-5">
          <h3 className='text-center pb-4 fw-semibold text-primary' style={{ marginTop: "-60px" }}> MY BOOKINGS</h3>
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
                      {/* <button className='btn btn-danger' onClick={() => handleDeleteBooking(booking.id)}>Delete</button> */}


                      <center>
                        <button type="button" className="buttondelete " onClick={() => handleDeleteBooking(booking.id)}>
                          <span className="button__text">Delete</span>
                          <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512" className="svg"><title></title><path
                            style={{
                              fill: "none",
                              stroke: "#323232",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "32px"
                            }}
                            d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
                          />
                            <line
                              y2="112"
                              y1="112"
                              x2="432"
                              x1="80"
                              style={{
                                stroke: "#323232",
                                strokeLinecap: "round",
                                strokeMiterlimit: "10",
                                strokeWidth: "32px"
                              }}
                            />
                            <path
                              style={{
                                fill: "none",
                                stroke: "#323232",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "32px"
                              }}
                              d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320">
                            </path>
                            <line
                              y2="400"
                              y1="176"
                              x2="256"
                              x1="256"
                              style={{
                                fill: "none",
                                stroke: "#323232",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "32px"
                              }}
                            />
  
                            <line
                              y2="400"
                              y1="176"
                              x2="192"
                              x1="184"
                              style={{
                                fill: "none",
                                stroke: "#323232",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "32px"
                              }}
                            />
  
                            <line
                              y2="400"
                              y1="176"
                              x2="320"
                              x1="328"
                              style={{
                                fill: "none",
                                stroke: "#323232",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "32px"
                              }}
                            />
                          </svg></span>
                        </button>
                      </center>
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
      <ToastContainer position='top-center' theme='colored' autoClose={1300} />
    </>

  );
}

export default Bookings;

