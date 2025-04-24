import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addToBookingsDetailsApi } from "../services/allApi";
import { toast, ToastContainer } from 'react-toastify';
import confetti from 'canvas-confetti';

const SuccessToast = () => {
  return (
    <div
      style={{
        padding: '15px 20px',
        backgroundColor: '#e6ffe6',
        color: '#2e7d32',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(76, 175, 80, 0.6)',
        fontWeight: 'bold',
        textAlign: 'center',
      }}
    >
      ✅ Booking Confirmed & Saved!
    </div>
  );
};

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingDetails } = location.state || {};
  const totalPrice = bookingDetails?.totalPrice || 0;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiry, setExpiry] = useState('');


  const handleSubmit = async () => {
    if (!firstName || !lastName || !cardNumber || !cvv || !expiry) {
      toast.error("All fields are required.");
      return;
    }

    const cardRegex = /^[0-9]{8}$/;
    const cvvRegex = /^[0-9]{3,4}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;

    if (!cardRegex.test(cardNumber)) {
      toast.error("Enter a valid 8-digit card number.");
      return;
    }

    if (!cvvRegex.test(cvv)) {
      toast.error("Enter a valid CVV.");
      return;
    }

    if (!expiryRegex.test(expiry)) {
      toast.error("Enter expiry date in MM/YY format.");
      return;
    }

    try {
      if (bookingDetails) {
        await addToBookingsDetailsApi(bookingDetails);
        toast.success(<SuccessToast />);
        // 🎉 Confetti!
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.6 }
        });
        setTimeout(() => {
          navigate("/booking");
        }, 2500); 

      } else {
        toast.error("Booking details are missing.");
      }
    } catch (error) {
      console.error("Error saving booking:", error);
      toast.error("Failed to complete booking.");
    }
  };


  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light px-3">
        <div className="bg-white p-4 rounded-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>
          <h3 className="text-primary text-center">Payment</h3>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="text-black" style={{ fontWeight: "normal", fontSize: "20px" }}>Total</h3>
            <h3 className="text-black" style={{ fontSize: "20px", fontWeight: "bold" }}>
              ₹ {totalPrice} <span style={{ fontSize: "18px", fontWeight: "normal" }}>INR</span>
            </h3>
          </div>

          <div className="row g-2 mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control border border-black"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

            </div>
            <div className="col">
              <input
                type="text"
                className="form-control border border-black"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control border border-black"
              placeholder="Card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>

          <div className="row g-2 mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control border border-black"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control border border-black"
                placeholder="MM / YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
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
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  );
}

export default Payment;
