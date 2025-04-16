import { faCartPlus, faGasPump, faHeart, faUsers, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../style/CardData.css';

function CardData() {
    return (
        <>
            {/* Page Background */}
            <div style={{
                background: 'linear-gradient(135deg, #f0f4ff, #d9e4f5)',
                minHeight: '100vh',
                padding: '3rem 1rem',
            }}>
                <div className="container">
                    <h3 className='text-center pb-5 fw-semibold text-primary'> My Wishlist</h3>
                    <div className="row row-gap-4">

                        <div className='col-md-5 col-lg-4'>
                            <div className='p-3 rounded-4 customCard shadow'
                                style={{
                                    background: 'black',
                                    border: '1px solid rgba(0, 0, 0, 0.05)',
                                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                                }}>
                                {/* Title Row */}
                                <div className='d-flex justify-content-between align-items-center px-2 py-2'>
                                    <h5 className='fw-bold text-dark mb-0' style={{ fontSize: '1.1rem' }}>Volkswagen Polo GTI</h5>
                                    <button
                                        className='btn btn-outline-success'
                                        style={{
                                            borderRadius: '50%',
                                            padding: '0.6rem 0.7rem',
                                            fontSize: '0.9rem',
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </button>
                                </div>
                                <div className='w-100 mt-3'>
                                    <img
                                        src='https://p.turbosquid.com/ts-thumb/P8/yDaVML/Yy/volkswagen_golf_clubsport_gti_2025/jpg/1718090732/1920x1080/turn_fit_q99/3b00df2213f9e48fc882d46b300b012aeb2b838a/volkswagen_golf_clubsport_gti_2025-1.jpg'
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
                                        <h5 className='mb-0 text-primary'>&#8377; 2000</h5>
                                        <small className='text-muted'>Per day</small>
                                    </div>
                                    <div className='d-flex align-items-center gap-2'>
                                        <button
                                            className="btn me-2"
                                            style={{
                                                border: '1px solid #198754',
                                                color: '#198754',
                                                borderRadius: '25px',
                                                padding: '6px 16px',
                                                transition: '0.3s',
                                            }}>
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
                                            }} > Book
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-5 col-lg-4'>
                            <div className='p-3 rounded-4 customCard shadow'
                                style={{
                                    background: 'black',
                                    border: '1px solid rgba(0, 0, 0, 0.05)',
                                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                                }}>
                                {/* Title Row */}
                                <div className='d-flex justify-content-between align-items-center px-2 py-2'>
                                    <h5 className='fw-bold text-dark mb-0' style={{ fontSize: '1.1rem' }}>Volkswagen Polo GTI</h5>
                                    <button
                                        className='btn btn-outline-success'
                                        style={{
                                            borderRadius: '50%',
                                            padding: '0.6rem 0.7rem',
                                            fontSize: '0.9rem',
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </button>
                                </div>
                                <div className='w-100 mt-3'>
                                    <img
                                        src='https://p.turbosquid.com/ts-thumb/P8/yDaVML/Yy/volkswagen_golf_clubsport_gti_2025/jpg/1718090732/1920x1080/turn_fit_q99/3b00df2213f9e48fc882d46b300b012aeb2b838a/volkswagen_golf_clubsport_gti_2025-1.jpg'
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
                                        <h5 className='mb-0 text-primary'>&#8377; 2000</h5>
                                        <small className='text-muted'>Per day</small>
                                    </div>
                                    <div className='d-flex align-items-center gap-2'>
                                        <button
                                            className="btn me-2"
                                            style={{
                                                border: '1px solid #198754',
                                                color: '#198754',
                                                borderRadius: '25px',
                                                padding: '6px 16px',
                                                transition: '0.3s',
                                            }}>
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
                                            }} > Book
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-5 col-lg-4'>
                            <div className='p-3 rounded-4 customCard shadow'
                                style={{
                                    background: 'black',
                                    border: '1px solid rgba(0, 0, 0, 0.05)',
                                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                                }}>
                                {/* Title Row */}
                                <div className='d-flex justify-content-between align-items-center px-2 py-2'>
                                    <h5 className='fw-bold text-dark mb-0' style={{ fontSize: '1.1rem' }}>Volkswagen Polo GTI</h5>
                                    <button
                                        className='btn btn-outline-success'
                                        style={{
                                            borderRadius: '50%',
                                            padding: '0.6rem 0.7rem',
                                            fontSize: '0.9rem',
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </button>
                                </div>
                                <div className='w-100 mt-3'>
                                    <img
                                        src='https://p.turbosquid.com/ts-thumb/P8/yDaVML/Yy/volkswagen_golf_clubsport_gti_2025/jpg/1718090732/1920x1080/turn_fit_q99/3b00df2213f9e48fc882d46b300b012aeb2b838a/volkswagen_golf_clubsport_gti_2025-1.jpg'
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
                                        <h5 className='mb-0 text-primary'>&#8377; 2000</h5>
                                        <small className='text-muted'>Per day</small>
                                    </div>
                                    <div className='d-flex align-items-center gap-2'>
                                        <button
                                            className="btn me-2"
                                            style={{
                                                border: '1px solid #198754',
                                                color: '#198754',
                                                borderRadius: '25px',
                                                padding: '6px 16px',
                                                transition: '0.3s',
                                            }}>
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
                                            }} > Book
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default CardData;
