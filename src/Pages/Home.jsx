import React, { useEffect, useState } from 'react'
import CardData from '../components/CardData'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { getAllCarsApi } from '../services/allApi';

function Home() {
  const [cars, setCars] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");  // For search input
  const [filteredCars, setFilteredCars] = useState([]);  // For storing filtered cars
  const [filter, setFilter] = useState("");  // For dropdown filter

  // Fetch data from backend
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const result = await getAllCarsApi();
        if (result.status === 200) {
          setCars(result.data);
          setFilteredCars(result.data);
        }
      } catch (err) {
        console.error('Failed to fetch cars:', err);
      }
    };

    fetchCars();
  }, []);

  // Handle search
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = cars.filter(car =>
      car.carName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  // Handle filter by car type
  const handleFilter = (type) => {
    setFilter(type);

    const filtered = cars.filter(car =>
      car.transmission.toLowerCase() === type.toLowerCase() 
    );
    setFilteredCars(filtered);
  };


  return (
    <>
      {/* filter and sort section  */}
      <div className="container d-flex justify-content-between align-items-center mt-5 ">
        <div >
          <DropdownButton className='border ' variant='transparent' as={ButtonGroup} title='Filter'>
            <Dropdown.Item eventKey="1" onClick={() => handleFilter("manual")}>Manual</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={() => handleFilter("automatic")}>Automatic</Dropdown.Item>
          </DropdownButton>
        </div>

        <div className='mt-2'>
        <h3 className="text-center pb-4 fw-semibold text-primary mt-2 fs-2" style={{ letterSpacing: '1px' }}>TOP PICKS</h3>

        </div>


        <div>
          <input
            type="text"
            placeholder="Search Cars..."
            value={searchTerm}
            onChange={handleSearch}
            className="form-control rounded"
          />
        </div>
      </div>

      {/* cards */}
      <CardData cars={filteredCars} />
    </>
  )
}

export default Home
