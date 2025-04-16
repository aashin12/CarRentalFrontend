import { faGasPump, faHeart, faTrash, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function CardData() {
    return (
        <div className="container mt-4 mb-5">
            <h3 className="text-center pb-4 fw-bold" style={{ letterSpacing: '1px' }}>  My Cart</h3>

            {/* Card Start */}
            
                <div  className="d-flex justify-content-center mb-4">
                    <div className="w-100" style={{ maxWidth: '850px' }}>
                        <div className="row p-3 rounded-4 shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
                            {/* Left: Image */}
                            <div className="col-md-4">
                                <img
                                    className="img-fluid rounded-4"
                                    style={{ height: '220px', objectFit: 'cover', width: '100%' }}
                                    src="https://p.turbosquid.com/ts-thumb/P8/yDaVML/Yy/volkswagen_golf_clubsport_gti_2025/jpg/1718090732/1920x1080/turn_fit_q99/3b00df2213f9e48fc882d46b300b012aeb2b838a/volkswagen_golf_clubsport_gti_2025-1.jpg"
                                    alt="Car"
                                />
                            </div>

                            {/* Right: Details */}
                            <div className="col-md-8 d-flex flex-column justify-content-between">
                                {/* Header */}
                                <div className="d-flex justify-content-between align-items-start">
                                    <h5 className="fw-bold mb-2 text-black">Volkswagen Polo GTI</h5>
                                    <button className="btn p-0">
                                        <FontAwesomeIcon icon={faHeart} className="text-danger" />
                                    </button>
                                </div>

                                {/* Features */}
                                <div className="row mt-1">
                                    <div className="col-sm-6 d-flex align-items-center text-secondary mb-2">
                                        <FontAwesomeIcon icon={faGasPump} className="me-2 text-secondary" />
                                        <span>Petrol</span>
                                    </div>
                                    <div className="col-sm-6 d-flex align-items-center mb-2">
                                        <img
                                            src="https://cdn4.iconfinder.com/data/icons/smashicons-car-parts-greyscale-vol-1/60/20_-Doors_Open-_car_part_vehicle-512.png"
                                            alt="Doors" 
                                            style={{ width: '20px'}}
                                            className="me-2 text-secondary"
                                        />
                                        <span className='text-secondary'>5 Doors</span>
                                    </div>
                                    <div className="col-sm-6 d-flex align-items-center text-secondary mb-2">
                                        <img
                                            src="https://cdn1.iconfinder.com/data/icons/rcons-transport/32/transmission_manual-1024.png"
                                            alt="Manual"
                                            style={{ width: '18px', backgroundColor: 'gray', borderRadius: '3px' }}
                                            className="me-2"
                                        />
                                        <span>Manual</span>
                                    </div>
                                    <div className="col-sm-6 d-flex align-items-center text-secondary mb-2">
                                        <FontAwesomeIcon icon={faUsers} className="me-2 text-secondary" />
                                        <span>5 Seater</span>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                        <h6 className="mb-0 text-black">&#8377; 2000</h6>
                                        <small className="text-black">From per day</small>
                                    </div>
                                    <div className="d-flex">
                                        <button
                                            className="btn me-2"
                                            style={{
                                                border: '1px solid #198754',
                                                color: '#198754',
                                                borderRadius: '25px',
                                                padding: '6px 16px',
                                                transition: '0.3s',
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faTrash} className="me-1" />
                                            Remove
                                        </button>
                                        <button
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

                <div  className="d-flex justify-content-center mb-4">
                    <div className="w-100" style={{ maxWidth: '850px' }}>
                        <div className="row p-3 rounded-4 shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
                            {/* Left: Image */}
                            <div className="col-md-4">
                                <img
                                    className="img-fluid rounded-4"
                                    style={{ height: '220px', objectFit: 'cover', width: '100%' }}
                                    src="https://p.turbosquid.com/ts-thumb/P8/yDaVML/Yy/volkswagen_golf_clubsport_gti_2025/jpg/1718090732/1920x1080/turn_fit_q99/3b00df2213f9e48fc882d46b300b012aeb2b838a/volkswagen_golf_clubsport_gti_2025-1.jpg"
                                    alt="Car"
                                />
                            </div>

                            {/* Right: Details */}
                            <div className="col-md-8 d-flex flex-column justify-content-between">
                                {/* Header */}
                                <div className="d-flex justify-content-between align-items-start">
                                    <h5 className="fw-bold mb-2 text-black">Volkswagen Polo GTI</h5>
                                    <button className="btn p-0">
                                        <FontAwesomeIcon icon={faHeart} className="text-danger" />
                                    </button>
                                </div>

                                {/* Features */}
                                <div className="row mt-1">
                                    <div className="col-sm-6 d-flex align-items-center text-secondary mb-2">
                                        <FontAwesomeIcon icon={faGasPump} className="me-2 text-secondary" />
                                        <span>Petrol</span>
                                    </div>
                                    <div className="col-sm-6 d-flex align-items-center mb-2">
                                        <img
                                            src="https://cdn4.iconfinder.com/data/icons/smashicons-car-parts-greyscale-vol-1/60/20_-Doors_Open-_car_part_vehicle-512.png"
                                            alt="Doors" 
                                            style={{ width: '20px'}}
                                            className="me-2 text-secondary"
                                        />
                                        <span className='text-secondary'>5 Doors</span>
                                    </div>
                                    <div className="col-sm-6 d-flex align-items-center text-secondary mb-2">
                                        <img
                                            src="https://cdn1.iconfinder.com/data/icons/rcons-transport/32/transmission_manual-1024.png"
                                            alt="Manual"
                                            style={{ width: '18px', backgroundColor: 'gray', borderRadius: '3px' }}
                                            className="me-2"
                                        />
                                        <span>Manual</span>
                                    </div>
                                    <div className="col-sm-6 d-flex align-items-center text-secondary mb-2">
                                        <FontAwesomeIcon icon={faUsers} className="me-2 text-secondary" />
                                        <span>5 Seater</span>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                        <h6 className="mb-0 text-black">&#8377; 2000</h6>
                                        <small className="text-black">From per day</small>
                                    </div>
                                    <div className="d-flex">
                                        <button
                                            className="btn me-2"
                                            style={{
                                                border: '1px solid #198754',
                                                color: '#198754',
                                                borderRadius: '25px',
                                                padding: '6px 16px',
                                                transition: '0.3s',
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faTrash} className="me-1" />
                                            Remove
                                        </button>
                                        <button
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

         
        </div>
    );
}

export default CardData;
