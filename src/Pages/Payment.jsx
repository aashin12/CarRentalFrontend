import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addToBookingsDetailsApi } from "../services/allApi";


function Payment() {
    const location = useLocation();
  const navigate = useNavigate();
  const { bookingDetails } = location.state || {};

  const handleSubmit = async () => {
    try {
      if (bookingDetails) {
        await addToBookingsDetailsApi(bookingDetails);
        alert("Booking confirmed and saved!");
        navigate("/booking"); 
      } else {
        alert("Booking details are missing.");
      }
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Failed to complete booking.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light px-3">
      <div className="bg-white p-4 rounded-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-primary text-center">Payment</h3>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="text-black" style={{ fontWeight: "normal", fontSize: "18px" }}>Total</h3>
          <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
            $ 10.25 <span style={{ fontSize: "14px", fontWeight: "normal", color: "#999" }}>USD</span>
          </h3>
        </div>

        <div className="row g-2 mb-3">
          <div className="col">
            <input type="text" className="form-control border border-black " placeholder="First name" />
          </div>
          <div className="col">
            <input type="text" className="form-control border border-black" placeholder="Last name" />
          </div>
        </div>

        <div className="mb-3">
          <input type="text" className="form-control border border-black" placeholder="Card number" />
        </div>

        <div className="row g-2 mb-3">
          <div className="col">
            <input type="text" className="form-control border border-black" placeholder="CVV" />
          </div>
          <div className="col">
            <input type="text" className="form-control border border-black" placeholder="MM / YY" />
          </div>
        </div>

        <div className="d-flex gap-2 mb-4 flex-wrap">
          <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard" style={{ width: "40px" }} />
          <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" style={{ width: "40px" }} />
          <img src="https://img.icons8.com/color/48/000000/discover.png" alt="Discover" style={{ width: "40px" }} />
          <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" style={{ width: "40px" }} />
        </div>
        
        <button className="btn w-100" style={{ backgroundColor: "#8bc34a", color: "white", fontSize: "16px" }} onClick={handleSubmit}>
          SUBMIT PAYMENT
        </button>
      </div>
    </div>
  );
}

export default Payment;
