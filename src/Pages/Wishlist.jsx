import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import '../style/CardData.css';
import { getWishlistApi, removeFromWishlistApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

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

  const handleRemove = async (id) => {
    const res = await removeFromWishlistApi(id);
    if (res.status === 200 || res.status === 204) {
      fetchWishlist();
    } else {
      console.error("Failed to remove from wishlist");
    }
  };

  return (
    <>
      <div className="container" style={{ marginTop: "-20px" }}>
        <h3 className='text-center pb-4 fw-semibold text-primary'> MY WISHLIST</h3>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {wishlist.length > 0 ? wishlist.map((car, index) => (
            <div className='card col-md-4 rounded customCard1 m-3 w-25' key={index}>
              <div className='p-3 rounded-4'>
                <div className='d-flex justify-content-between align-items-center px-2 py-2'>
                  <h5 className='fw-bold text-white mb-0' style={{ fontSize: '1.1rem' }}> {car.carName} </h5>
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
                <div className='d-flex justify-content-between align-items-center mt-3'>
                  <div>
                    <h5 className='mb-0 text-primary'>&#8377; {car.price}</h5>
                    <small className='text-muted'>Per day</small>
                  </div>
                  <div className='d-flex align-items-center gap-2'>
                    <button
                      className="btn btn-secondary me-2"
                      style={{
                        border: '1px solid #198754',
                        color: 'white',
                        borderRadius: '25px',
                        padding: '6px 16px',
                        fontSize: '12px',
                        transition: '0.3s',
                      }}
                      onClick={() => handleRemove(car.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} className="me-1" />
                      Remove
                    </button>

                    {/* ✅ Pass car object via React Router state */}
                    <Link to="/bookingform" state={{ car }}>
                      <button
                        className='btn'
                        style={{
                          backgroundColor: '#dc3545',
                          color: 'white',
                          borderRadius: '30px',
                          padding: '0.45rem 1.4rem',
                          fontWeight: 'bold',
                        }}
                      >
                        Book
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )) : (
            <p className="text-center text-muted fs-3">Your wishlist is empty</p>
          )}
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  );
}

export default Wishlist;
