import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import '../style/CardData.css';
import { addToBookingsApi, addToCartApi, getWishlistApi, removeFromWishlistApi } from '../services/allApi';

function Wishlist() {

    const [wishlist, setWishlist] = useState([]);

    // Load wishlist on component mount
    useEffect(() => {
        fetchWishlist();
    }, []);

    const fetchWishlist = async () => {
        const res = await getWishlistApi();
        if (res.status === 200) {
            setWishlist(res.data);
        } else {
            console.error("Failed to fetch wishlist");
        }
    };

    // Remove item from wishlist
    const handleRemove = async (id) => {
        const res = await removeFromWishlistApi(id);
        if (res.status === 200 || res.status === 204) {
            fetchWishlist(); // Refresh list
        } else {
            console.error("Failed to remove from wishlist");
        }
    };

    const handleAddToCart = async (car) => {
        try {
          const res = await addToCartApi(car);  // sending full car object
          if (res.status === 200 || res.status === 201) {
            toast.success("Added to cart!");
          } else {
            toast.warning("Car already in cart.");
          }
        } catch (error) {
          console.error(error);
          toast.error("Failed to add to cart.");
        }
      };
      
      const handleAddToBooking = async (car) => {
        try {
          const res = await addToBookingsApi(car);  // sending full car object
          if (res.status === 200 || res.status === 201) {
            toast.success("Added to Booking!");
          } else {
            toast.warning("Car already in Booking.");
          }
        } catch (error) {
          console.error(error);
          toast.error("Failed to add to Booking.");
        }
      };

    return (
        <>
        <style>
      {
        `
        .customCard1 {
        transition: all 0.3s ease-in-out;
         width: '30%';
        minWidth: '280px'; 
          }

        .customCard1:hover {
       box-shadow: 0 0 20px rgba(255, 255, 255, 0.5); 
      transform: scale(1.02); 
        }

       
        `
      }
      </style>
            {/* Page Background */}
            <div style={{
                background: "",
                minHeight: '100vh',
                padding: '3rem 1rem',
            }}>
                <div className="container" style={{marginTop:"-20px"}}>
                    <h3 className='text-center pb-4 fw-semibold text-primary'> MY WISHLIST</h3>
                    <div className="d-flex flex-wrap justify-content-center gap-4">

                {/* Wishlist card */}

                {wishlist.length > 0 ? wishlist.map((car, index) => (
                        <div className='card col-md-4 rounded customCard1 m-3' key={index}
                        >
                            <div className=' p-3 rounded-4'
                                >
                                {/* Title Row */}
                                <div className='d-flex justify-content-between align-items-center px-2 py-2'>
                                    <h5 className='fw-bold text-white mb-0' style={{ fontSize: '1.1rem' }}> {car.carName} </h5>
                                    <button
                                        className='btn btn-outline-info'
                                        style={{
                                            borderRadius: '50%',
                                            padding: '0.6rem 0.7rem',
                                            fontSize: '0.9rem',
                                        }}

                                        onClick={() => handleAddToCart(car)}
                                    >
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </button>
                                </div>
                                <div className='w-100 mt-3'>
                                    <img
                                        src={car.image}
                                        alt='Car'
                                        style={{
                                            width: '100%',
                                            height: '180px',
                                            objectFit: 'cover',
                                            borderRadius: '15px',
                                        }}
                                    />
                                </div>
                                {/* Price + Actions */}
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <div>
                                        <h5 className='mb-0 text-primary'>&#8377; {car.price}</h5>
                                        <small className='text-muted'>Per day</small>
                                    </div>
                                    <div className='d-flex align-items-center gap-2'>
                                        <button
                                            className="btn btn-secondary me-2  "
                                            style={{
                                                border: '1px solid #198754',
                                                color: 'white',
                                                borderRadius: '25px',
                                                padding: '6px 16px',
                                                transition: '0.3s',
                                            }}
                                                 onClick={() => handleRemove(car.id)}>

                                            <FontAwesomeIcon icon={faTrash} className="me-1" />
                                            Remove
                                        </button>
                                        <button
                                            className='btn'
                                            style={{
                                                backgroundColor: '#dc3545',
                                                color: 'white',
                                                borderRadius: '30px',
                                                padding: '0.45rem 1.4rem',
                                                fontWeight: 'bold',
                                            }} 
                                            onClick={()=>handleAddToBooking(car)}> Book
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )) : (
                            <p className="text-center text-muted fs-3">Your wishlist is empty</p>
                        )}
                       
                    </div>

                </div>
            </div>
        </>
    );
}

export default Wishlist;
