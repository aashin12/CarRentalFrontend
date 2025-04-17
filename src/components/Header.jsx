import { faBars, faCartPlus, faHeart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/logo.png'
import React, { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link, useLocation } from 'react-router-dom';
import '../style/Header.css'
import { useNavigate } from 'react-router-dom';



function Header() {

    const userName = localStorage.getItem("userName");

    const [collapase, setCollapse] = useState(false)

    const { pathname } = useLocation()

    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("auth") === "true";
    const role = localStorage.getItem("role");


    const showInput = ['/home'].includes(pathname)

    const handleLogout = () => {
        localStorage.removeItem("auth");
        localStorage.removeItem("role");
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");
        navigate("/login");
    };

    



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

                        {showInput ? <div className="col-md-5  d-none d-md-block inputDiv ">
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
                                    <DropdownButton className='w-100  mt-2 rounded-pill border border-transparent user-dropdown' variant='transparent' as={ButtonGroup} title={
                                        <span className='text-white d-flex align-items-center gap-2'>
                                            <FontAwesomeIcon icon={faUser} />
                                            <span>Welcome {userName?` ${userName}`:' Guest'}</span>
                                        </span>
                                    }>
                                        {isLoggedIn ? (
                                            <>
                                                <Dropdown.Item disabled>{role === "admin" ? "Admin" : "User"}</Dropdown.Item>
                                                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                            </>
                                        ) : (
                                            <>
                                                <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                                                <Dropdown.Item as={Link} to="/signup">Sign Up</Dropdown.Item>
                                            </>
                                        )}
                                    </DropdownButton>
                                </ul>
                            </div>
                        </div>}

                        <div className="col-md-3 d-none d-md-block pe-md-2 text-end">

                            <ul className='d-flex list-unstyled animate__animated animate__bounceIn'>
                                <Link to={'/wishlist'}><button className='bg-transparent btn fs-5'><li><FontAwesomeIcon icon={faHeart} className='text-danger' /></li></button></Link>
                                <Link to={'/cart'}><button className='bg-warning btn fs-6 p-3'><li><FontAwesomeIcon className='text-white' icon={faCartPlus} /><span className='ms-2 text-white'>1</span></li></button></Link> 

                                <DropdownButton className='w-25 ms-2' variant='transparent' as={ButtonGroup} title={
                                    <span className='text-white d-flex align-items-center gap-2'>
                                        <FontAwesomeIcon icon={faUser} />
                                        <span className='d-none d-md-inline'>Welcome {userName?` ${userName}`:' Guest'}</span>
                                    </span>
                                }>
                                    {isLoggedIn ? (
                                        <>
                                            <Dropdown.Item disabled>{role === "admin" ? "Admin" : "User"}</Dropdown.Item>
                                            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                        </>
                                    ) : (
                                        <>
                                            <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                                            <Dropdown.Item as={Link} to="/signup">Sign Up</Dropdown.Item>
                                        </>
                                    )}
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