import { faBars, faCartPlus, faHeart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/logo.png'
import React, { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link, useLocation } from 'react-router-dom';
import '../style/Header.css'


function Header() {
    const [collapase, setCollapse] = useState(false)
    
    const{pathname}=useLocation()
    const showInput = ['/home'].includes(pathname)

    return (
        <>
            <nav>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-between align-items-center  px-2">

                        <div className="col-md-4">
                            <Link to={'/'}><img className='animate__animated animate__bounceIn' src={logo} alt="no img" style={{ width: '100px' }} /></Link>
                        </div>

                        {/* Menu bar */}
                        <div className=' d-md-none'>
                            <button onClick={() => setCollapse(!collapase)} className='btn border border-white'><FontAwesomeIcon icon={faBars} /></button>
                        </div>

                       { showInput ? <div className="col-md-6  d-none d-md-block inputDiv ">
                            <input type="text" placeholder='search...' className='border border-dark rounded-pill bg-white bg-opacity-100 customInputBox me-3' />
                            <button className='btn position-absolute'><FontAwesomeIcon icon={faMagnifyingGlass} className='fs-5' /></button>
                        </div>
                        :
                        null}

                        {/* Collapsible Menu */}

                        {collapase && <div className='d-md-none'>
                            <div className="col-md-6 ">
                                <input type="text" placeholder='search' className='form-control w-100 border border-dark rounded-pill bg-white bg-opacity-100 mt-2' />
                            </div>

                            <div className="col-md-2">
                                <ul className='d-flex flex-column justify-center text-center list-unstyled'>
                                    <button className=' btn text-white border border-white mt-2 rounded-pill'>Wishlist</button>
                                    <button className=' btn text-white border border-white mt-2 rounded-pill'>Cart</button>
                                    {/* <button className=' btn text-white border border-white mt-2 rounded-pill'><FontAwesomeIcon className='text-white' icon={faUser} /> User</button> */}
                                    <DropdownButton className='w-100 border border-transaprent mt-2 rounded-pill' variant='transparent' as={ButtonGroup} title={<FontAwesomeIcon className='text-white' icon={faUser} />}>
                                        <Dropdown.Item eventKey="1">Admin</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">User</Dropdown.Item>
                                    </DropdownButton>
                                </ul>
                            </div>
                        </div>}

                        <div className="col-md-2  d-none d-md-block">
                            <ul className='d-flex justify-content-around list-unstyled animate__animated animate__bounceIn'>
                                <button className='bg-transparent btn'><li><FontAwesomeIcon icon={faHeart} className='text-danger' /></li></button>
                                <button className='bg-warning btn '><li><FontAwesomeIcon className='text-white' icon={faCartPlus} /><span className='ms-2 text-white'>1</span></li></button>

                                <DropdownButton className='w-25' variant='transparent' as={ButtonGroup} title={<FontAwesomeIcon className='text-white' icon={faUser} />}>
                                    <Dropdown.Item eventKey="1">Admin</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">User</Dropdown.Item>
                                </DropdownButton>


                            </ul>
                        </div>





                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header