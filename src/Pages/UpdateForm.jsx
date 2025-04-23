import React, { useState } from 'react';

// Sample data
const carsData = [
  { id: 1, name: "Swift LXI", doors: 4, transmission: "Manual", price: 49, fuelType: "Petrol", image: "https://ic1.maxabout.us/autos/cars_india/2/2021/3/2021-maruti-swift-india.jpg" },
  { id: 2, name: "Civic RS", doors: 4, transmission: "Automatic", price: 59, fuelType: "Diesel", image: "https://www.ixbt.com/img/n1/news/2024/0/1/2024-honda-civic-rs-jdm_large.png" }
];

function ManageCars() {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleEdit = (car) => {
    setSelectedCar(car);
  };

  const handleDelete = (id) => {
    // Handle car deletion logic here
    alert(`Car with ID ${id} deleted.`);
  };

  return (
    <div className="bg-black min-vh-100 d-flex align-items-center justify-content-center ">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <div className="form-wrapper">
          <h2 className="title text-center mb-5">Manage Cars</h2>
          <div className="cars-list">
            {carsData.map((car) => (
              <div key={car.id} className="car-item d-flex justify-content-between align-items-center mb-4">
                <img src={car.image} alt={car.name} style={{ width: '150px', height: '100px', objectFit: 'cover' }}/>
                <span className='mx-3'>{car.name}</span>
                <button className="btn btn-warning me-3" onClick={() => handleEdit(car)}>Edit</button>
                <button className="btn btn-danger me-3" onClick={() => handleDelete(car.id)}>Delete</button>
              </div>
            ))}
          </div>
          {selectedCar && <UpdateForm car={selectedCar} />}
        </div>
      </div>
    </div>
  );
}

function UpdateForm({ car }) {
  return (
    <>
      <style>{`
        .form-wrapper {
          background: linear-gradient(135deg, #1e1e1e, #2c2c2c);
          max-width: 600px;
          width: 100%;
          color: #f8f9fa;
          border-radius: 1rem;
          padding: 3rem; /* More padding for breathing space */
          box-shadow: 0 0 15px rgba(108, 99, 255, 0.12);
          border: 1px solid #3a3a3a;
          margin-top: 60px;
          margin-bottom: 60px;
        }

        .title {
          color: #6c63ff;
          font-weight: 600;
          text-align: center;
          margin-bottom: 2rem;
          text-shadow: 0 0 8px rgba(108, 99, 255, 0.25);
        }

        .form-label {
          font-weight: 500;
          font-size: 1rem; /* Slightly bigger font for better readability */
          color: #d2d2d2;
          margin-bottom: 0.6rem;
        }

        .custom-input {
          background-color: #2a2a2a;
          border: 1px solid #444;
          color: #f1f1f1;
          border-radius: 8px;
          padding: 0.8rem 1rem;
          transition: all 0.3s ease;
          margin-bottom: 1.5rem; /* More space between input fields */
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
          padding: 1rem 3rem; /* Larger button for better click area */
          border-radius: 30px;
          font-weight: 500;
          font-size: 1.2rem; /* Larger font size for buttons */
          transition: 0.3s ease;
          margin-top: 2rem; /* More space above the button */
        }

        .btn-style:hover {
          background-color: #544fd9;
          box-shadow: 0 0 10px rgba(108, 99, 255, 0.3);
          transform: translateY(-1px);
        }

        .btn-danger {
          background-color: #e74c3c;
          color: white;
          border: none;
          padding: 1rem 3rem; /* Larger delete button */
          border-radius: 30px;
          font-weight: 500;
          font-size: 1.2rem;
          transition: 0.3s ease;
          margin-left: 15px;
          margin-top: 1.5rem;
        }

        .btn-danger:hover {
          background-color: #c0392b;
        }

        .bg-black {
          background-color: #111;
        }

        /* Centering the Update Form */
        .form-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem; /* Extra padding around the form */
        }

        .cars-list {
          display: flex;
          flex-direction: column;
          gap: 30px; 
        }

        /* Responsiveness */
        @media (max-width: 768px) {
          .form-wrapper {
            padding: 2rem;
            max-width: 100%;
          }

          .car-item {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 2rem;
          }

          .btn-style,
          .btn-danger {
            width: 100%;
            margin-top: 10px;
          }

          .btn-danger {
            margin-top: 1rem;
          }
        }
      `}</style>

      <div className="form-wrapper">
        <h2 className="title">Update Car Details 🚗</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="carName" className="form-label">Car Name</label>
            <input type="text" className="form-control custom-input" id="carName" defaultValue={car.name} placeholder="e.g. Swift LXI, Civic RS" />
          </div>
          <div className="mb-3">
            <label htmlFor="carDoors" className="form-label">Number of Doors</label>
            <input type="number" className="form-control custom-input" id="carDoors" defaultValue={car.doors} placeholder="e.g. 4" />
          </div>
          <div className="mb-3">
            <label htmlFor="transmission" className="form-label">Transmission Type</label>
            <select className="form-select custom-input" id="transmission" defaultValue={car.transmission}>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Daily Rental Price ($)</label>
            <input type="number" className="form-control custom-input" id="price" defaultValue={car.price} placeholder="e.g. 49" />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Car Image URL</label>
            <input type="url" className="form-control custom-input" id="image" defaultValue={car.image} placeholder="e.g. https://yourimage.com/car.jpg" />
          </div>
          <div className="mb-4">
            <label htmlFor="fuelType" className="form-label">Fuel Type</label>
            <select className="form-select custom-input" id="fuelType" defaultValue={car.fuelType}>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-style">Update Car</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ManageCars;
