import { faGasPump, faHeart, faTrash, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { getCartApi, removeFromCartApi, addToBookingsApi, addToWishlistApi } from '../services/allApi';

function CardData() {

    const [cartItems, setCartItems] = useState([]);

    // Load cart data
    const fetchCart = async () => {
        const response = await getCartApi();
        if (response.status === 200) {
            setCartItems(response.data);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    // Remove from cart
    const handleRemove = async (id) => {
        const response = await removeFromCartApi(id);
        if (response.status === 200) {
            fetchCart();
        }
    };

    // Book the car
    const handleBook = async (car) => {
        await addToBookingsApi(car);  // Add to bookings
        await removeFromCartApi(car.id); // Remove from cart
        fetchCart(); // Refresh cart
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
        <style>
      {
        `
        .customCard1 {
        transition: all 0.3s ease-in-out;
          }

        .customCard1:hover {
       box-shadow: 0 0 20px rgba(255, 255, 255, 0.5); /* white shadow */
      transform: scale(1.02); /* optional slight zoom */
        }

       
        `
      }
      </style>

        <div className="container mt-4 mb-5" style={{
            background: "",
            minHeight: '100vh',
            
            
        }}>
            <h3 className="text-center pb-4 fw-semibold text-primary mt-2 fs-2" style={{ letterSpacing: '1px' }}>  MY CART</h3>

            {/* Cart Card  */}
            
            {cartItems.length > 0 ? (
                cartItems.map((car, index) => (
                <div  key={index} className="d-flex justify-content-center mb-4 ">
                    <div className="card w-100 customCard1" style={{ maxWidth: '850px' }}>
                        <div className="row p-3 rounded-4 shadow-sm "  >
                            {/* Left: Image */}
                            <div className="col-md-4">
                                <img
                                    className="img-fluid rounded-4"
                                    style={{ height: '220px', objectFit: 'cover', width: '100%' }}
                                    src={car.image}
                                    alt="Car"
                                />
                            </div>

                            {/* Right: Details */}
                            <div className="col-md-8 d-flex flex-column justify-content-between">
                                {/* Header */}
                                <div className="d-flex justify-content-between align-items-start">
                                    <h5 className="fw-bold mb-2 text-white">  {car.carName}</h5>
                                    <button className="btn p-0" onClick={() => handleAddToWishlist(car)}>
                                        <FontAwesomeIcon icon={faHeart} className="text-danger" />
                                    </button>
                                </div>

                                {/* Features */}
                                <div className="row mt-1">
                                    <div className="col-sm-6 d-flex align-items-center text-white mb-2">
                                        <FontAwesomeIcon icon={faGasPump} className="me-2 text-white" />
                                        <span>{car.fuelType}</span>
                                    </div>
                                    <div className="col-sm-6 d-flex align-items-center mb-2">
                                        <img
                                            src="https://cdn4.iconfinder.com/data/icons/smashicons-car-parts-greyscale-vol-1/60/20_-Doors_Open-_car_part_vehicle-512.png"
                                            alt="Doors" 
                                            style={{ width: '20px'}}
                                            className="me-2 text-white"
                                        />
                                        <span className='text-white'>{car.carDoors} Doors</span>
                                    </div>
                                    <div className="col-sm-6 d-flex align-items-center text-white mb-2">
                                        <img
                                            src="https://cdn1.iconfinder.com/data/icons/rcons-transport/32/transmission_manual-1024.png"
                                            alt="Manual"
                                            style={{ width: '18px', backgroundColor: 'white', borderRadius: '3px' }}
                                            className="me-2"
                                        />
                                        <span>{car.transmission}</span>
                                    </div>
                                    <div className="col-sm-6 d-flex align-items-center text-white mb-2">
                                        <FontAwesomeIcon icon={faUsers} className="me-2 text-white" />
                                        <span>4 Seater</span>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                        <h6 className="mb-0 text-white">&#8377; {car.price}</h6>
                                        <small className="text-white">From per day</small>
                                    </div>
                                    <div className="d-flex">
                                        <button
                                            onClick={() => handleRemove(car.id)}
                                            className="btn btn-secondary me-2"
                                            style={{
                                                border: '1px solid #198754',
                                                color: '',
                                                borderRadius: '25px',
                                                padding: '6px 16px',
                                                transition: '0.3s',
                                                
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faTrash} className="me-1" />
                                            Remove
                                        </button>
                                        <button
                                            onClick={() => handleBook(car)}
                                            className="btn btn-danger"
                                            style={{
                                                borderRadius: '25px',
                                                padding: '6px 18px',
                                                transition: '0.3s',
                                            }}
                                        >
                                            Book
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          ))
        ) : (
            <p className="text-center text-muted fs-3">Your cart is empty.</p>
        )}
                

         
        </div>
        </>
    );
}

export default CardData;
