import { faGasPump, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../style/CardData.css';

function CardData() {
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <>
      <div className="container mt-3 mb-5">
        <h2 className='text-center pb-5 pt-4 fw-semibold text-warning'>Your Bookings</h2>
        <div className="row g-4  pb-5">

          <div className="col-md-4 col-lg-4" >
            <div className='card shadow-lg rounded-4 bg-white h-100 position-relative'>
              <img
                src="https://p.turbosquid.com/ts-thumb/P8/yDaVML/Yy/volkswagen_golf_clubsport_gti_2025/jpg/1718090732/1920x1080/turn_fit_q99/3b00df2213f9e48fc882d46b300b012aeb2b838a/volkswagen_golf_clubsport_gti_2025-1.jpg"
                className="card-img-top rounded-top-4"
                alt="Car"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold text-primary mb-2">Volkswagen Polo GTI</h5>
                  <p className=" small text-black mb-2">📅 Booking Date: <strong className='text-black'>{today}</strong></p>
                  <div className="d-flex justify-content-between small text-muted mb-3">
                    <span className='text-black'><FontAwesomeIcon icon={faGasPump} className='text-danger' /> Petrol</span>
                    <span className='text-black'><FontAwesomeIcon icon={faUsers} className='text-primary'/> 5 Seater</span>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-warning btn-sm px-4 rounded w-50">Return</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-4" >
            <div className='card shadow-lg rounded-4 bg-white h-100 position-relative'>
              <img
                src="https://p.turbosquid.com/ts-thumb/P8/yDaVML/Yy/volkswagen_golf_clubsport_gti_2025/jpg/1718090732/1920x1080/turn_fit_q99/3b00df2213f9e48fc882d46b300b012aeb2b838a/volkswagen_golf_clubsport_gti_2025-1.jpg"
                className="card-img-top rounded-top-4"
                alt="Car"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold text-primary mb-2">Volkswagen Polo GTI</h5>
                  <p className=" small text-black mb-2">📅 Booking Date: <strong className='text-black'>{today}</strong></p>
                  <div className="d-flex justify-content-between small text-muted mb-3">
                    <span className='text-black'><FontAwesomeIcon icon={faGasPump} className='text-danger' /> Petrol</span>
                    <span className='text-black'><FontAwesomeIcon icon={faUsers} className='text-primary'/> 5 Seater</span>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-warning btn-sm px-4 rounded w-50">Return</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-4" >
            <div className='card shadow-lg rounded-4 bg-white h-100 position-relative'>
              <img
                src="https://p.turbosquid.com/ts-thumb/P8/yDaVML/Yy/volkswagen_golf_clubsport_gti_2025/jpg/1718090732/1920x1080/turn_fit_q99/3b00df2213f9e48fc882d46b300b012aeb2b838a/volkswagen_golf_clubsport_gti_2025-1.jpg"
                className="card-img-top rounded-top-4"
                alt="Car"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold text-primary mb-2">Volkswagen Polo GTI</h5>
                  <p className=" small text-black mb-2">📅 Booking Date: <strong className='text-black'>{today}</strong></p>
                  <div className="d-flex justify-content-between small text-muted mb-3">
                    <span className='text-black'><FontAwesomeIcon icon={faGasPump} className='text-danger' /> Petrol</span>
                    <span className='text-black'><FontAwesomeIcon icon={faUsers} className='text-primary'/> 5 Seater</span>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-warning btn-sm px-4 rounded w-50">Return</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4" >
            <div className='card shadow-lg rounded-4 bg-white h-100 position-relative'>
              <img
                src="https://p.turbosquid.com/ts-thumb/P8/yDaVML/Yy/volkswagen_golf_clubsport_gti_2025/jpg/1718090732/1920x1080/turn_fit_q99/3b00df2213f9e48fc882d46b300b012aeb2b838a/volkswagen_golf_clubsport_gti_2025-1.jpg"
                className="card-img-top rounded-top-4"
                alt="Car"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold text-primary mb-2">Volkswagen Polo GTI</h5>
                  <p className=" small text-black mb-2">📅 Booking Date: <strong className='text-black'>{today}</strong></p>
                  <div className="d-flex justify-content-between small text-muted mb-3">
                    <span className='text-black'><FontAwesomeIcon icon={faGasPump} className='text-danger' /> Petrol</span>
                    <span className='text-black'><FontAwesomeIcon icon={faUsers} className='text-primary'/> 5 Seater</span>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-warning btn-sm px-4 rounded w-50">Return</button>
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
