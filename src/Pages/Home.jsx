import React from 'react'
import CardData from '../components/CardData'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Home() {

  return (
    <>
      {/* filter and sort section  */}
      <div className="container d-flex justify-content-between align-items-center mt-5 ">
        <div >
          <DropdownButton className='border ' variant='transparent' as={ButtonGroup} title='filter'>
            <Dropdown.Item eventKey="1">Manual</Dropdown.Item>
            <Dropdown.Item eventKey="2">Automatic</Dropdown.Item>
            <Dropdown.Item eventKey="3">Suv</Dropdown.Item>
            <Dropdown.Item eventKey="4">Hatchback</Dropdown.Item>
            <Dropdown.Item eventKey="4">sedan</Dropdown.Item>
          </DropdownButton>
        </div>

        <div className='mt-5'>
          <h4>Top Pickups</h4>
        </div>

        <div >
          <DropdownButton className='border ' variant='transparent' as={ButtonGroup} title='Sort'>
            <Dropdown.Item eventKey="1">High-Low</Dropdown.Item>
            <Dropdown.Item eventKey="2">Low-High</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>

      {/* cards */}
      <CardData />
    </>
  )
}

export default Home
