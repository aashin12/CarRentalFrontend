import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


function CarBookingForm() {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [days, setDays] = useState('');
    const location = useLocation()
    const navigate = useNavigate();
    const { car } = location.state || []
    //console.log(car);


    const calculateDays = (fromDate, toDate) => {
        const start = new Date(fromDate);
        const end = new Date(toDate);
        const difference = (end - start) / (1000 * 60 * 60 * 24);
        console.log(difference);
        return difference >= 0 ? difference + 1 : 0;
    };

    useEffect(() => {
        if (fromDate && toDate) {
            const numberOfDays = calculateDays(fromDate, toDate);
            setDays(numberOfDays);
        }
    }, [fromDate, toDate]);



    const totalPrice = car?.price && days > 0 ? days * parseInt(car.price) : 0;

    const handleBooking = () => {
        if (!fromDate || !toDate || days <= 0) {
          alert("Please fill in both dates correctly.");
          return;
        }
    
       // Navigate only after successful validation
       navigate("/payment", {
        state: {
            bookingDetails: {
                fromDate,
                toDate,
                days,
                totalPrice,
                carName: car?.carName,
                carId: car?.id,
                carImage: car?.image,
                pricePerDay: car?.price
            }
        }
    });
};
    

    return (
        <div className="container mt-5 p-4 border rounded-4 shadow booking-form" style={{ maxWidth: '500px' }}>
            <h3 className="mb-4 text-center">Book Your {car?.carName}</h3>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="form-label">Starting Date</label>
                    <input
                        type="date" required
                        className="form-control"
                        value={fromDate}
                        onChange={(e) => {
                            setFromDate(e.target.value);

                        }}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label">End Date</label>
                    <input
                        type="date" required
                        className="form-control"
                        value={toDate}
                        onChange={(e) => {
                            setToDate(e.target.value);

                        }}
                    />
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label">Price Per Day</label>
                <div className="form-control bg-light text-white">{car?.price} ₹</div>
            </div>

            <div className="mb-3">
                <label className="form-label">Total Days</label>
                <div className="form-control bg-light text-white">{days} day(s)</div>
            </div>

            <div className="mb-4">
                <label className="form-label">Total Price</label>
                <div className="form-control bg-light text-white">{totalPrice} ₹</div>
            </div>

            {/* <Link to="/payment" state={{
                bookingDetails: {
                    fromDate,
                    toDate,
                    days,
                    totalPrice,
                    carName: car?.carName,
                    carId: car?.id,
                    carImage: car?.image,
                    pricePerDay: car?.price
                }
            }}>
                <button className="btn btn-success w-100" onClick={handleBooking}>Submit Booking</button>
            </Link> */}

<button className="btn btn-success w-100" onClick={handleBooking}>
                Submit Booking
            </button>

        </div>
    );
}

export default CarBookingForm;
