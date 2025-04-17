import React from 'react';

function Addform() {
  return (
    <>
      <style>{`
        .form-wrapper {
          background: linear-gradient(135deg, #1e1e1e, #2c2c2c);
          max-width: 480px;
          width: 100%;
          color: #f8f9fa;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 0 15px rgba(108, 99, 255, 0.12);
          border: 1px solid #3a3a3a;
          margin-top: 60px;
          margin-bottom: 60px;
        }

        .title {
          color: #6c63ff;
          font-weight: 600;
          text-align: center;
          margin-bottom: 1.5rem;
          text-shadow: 0 0 8px rgba(108, 99, 255, 0.25);
        }

        .form-label {
          font-weight: 500;
          font-size: 0.95rem;
          color: #d2d2d2;
          margin-bottom: 0.3rem;
        }

        .custom-input {
          background-color: #2a2a2a;
          border: 1px solid #444;
          color: #f1f1f1;
          border-radius: 8px;
          padding: 0.6rem 0.75rem;
          transition: all 0.3s ease;
        }

        .custom-input::placeholder {
          color: #999;
        }

        .custom-input:focus,
        .custom-input:hover {
          border-color: #6c63ff;
          background-color: #232323;
          box-shadow: 0 0 6px rgba(108, 99, 255, 0.3);
        }

        .btn-style {
          background-color: #6c63ff;
          color: #fff;
          border: none;
          padding: 0.6rem 2.2rem;
          border-radius: 30px;
          font-weight: 500;
          font-size: 1rem;
          transition: 0.3s ease;
        }

        .btn-style:hover {
          background-color: #544fd9;
          box-shadow: 0 0 10px rgba(108, 99, 255, 0.3);
          transform: translateY(-1px);
        }

        .bg-black {
          background-color: #111;
        }
      `}</style>

      <div className="bg-black min-vh-100 d-flex align-items-center justify-content-center flex-column">
        <div className="form-wrapper">
          <h2 className="title">Add Car Details 🚗</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="carName" className="form-label">Car Name</label>
              <input type="text" className="form-control custom-input" id="carName" placeholder="e.g. Swift LXI, Civic RS" />
            </div>
            <div className="mb-3">
              <label htmlFor="carDoors" className="form-label">Number of Doors</label>
              <input type="number" className="form-control custom-input" id="carDoors" placeholder="e.g. 4" />
            </div>
            <div className="mb-3">
              <label htmlFor="transmission" className="form-label">Transmission Type</label>
              <select className="form-select custom-input" id="transmission">
                <option value="">Choose transmission...</option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Daily Rental Price ($)</label>
              <input type="number" className="form-control custom-input" id="price" placeholder="e.g. 49" />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Car Image URL</label>
              <input type="url" className="form-control custom-input" id="image" placeholder="e.g. https://yourimage.com/car.jpg" />
            </div>
            <div className="mb-4">
              <label htmlFor="fuelType" className="form-label">Fuel Type</label>
              <select className="form-select custom-input" id="fuelType">
                <option value="">Select fuel type...</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-style">Save Car</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Addform;
