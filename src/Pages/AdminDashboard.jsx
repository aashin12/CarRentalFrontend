import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Bookings from './Bookings';
import SellCar from './SellCar';
import Addform from './Addform';
import UpdateForm from './UpdateForm';


function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard'); // default view

  
  

  const renderComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'bookings':
        return <Bookings/>;
      case 'sell':
        return <SellCar />;
      case 'add':
        return <Addform />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="container-fluid d-flex flex-column flex-md-row p-0" style={{ overflow: 'hidden' }}>

      {/* Sidebar */}
      <div style={{ width: '100%',
    maxWidth: '250px',
    backgroundColor: '#000',
    minHeight: '100vh', }} className="text-white p-3">
        <h4 className="text-primary">Admin Panel</h4>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <button
              className={`btn w-100 my-2 ${activeTab === 'dashboard' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn w-100 my-2 ${activeTab === 'bookings' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveTab('bookings')}
            >
              Our cars
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn w-100 my-2 ${activeTab === 'sell' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveTab('sell')}
            >
              Sell Car
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn w-100 my-2 ${activeTab === 'add' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveTab('add')}
            >
              Add Car
            </button>
          </li>
          {/* <li className="nav-item">
            <button
              className={`btn w-100 my-2 ${activeTab === 'update' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveTab('update')}
            >
              Update Car
            </button>
          </li> */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-2" style={{ backgroundColor: '#1a1a1a',
    color: 'white',
    minHeight: '100vh',
    overflowY: 'auto', }}>
        {renderComponent()}
      </div>
    </div>
  );
}

export default AdminDashboard;
