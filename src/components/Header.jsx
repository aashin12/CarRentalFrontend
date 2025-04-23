import { faBars, faHeart, faUser, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/logo.png'
import React, { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link} from 'react-router-dom';
import '../style/Header.css'
import { useNavigate } from 'react-router-dom';




function Header() {

    const userName = localStorage.getItem("userName");

    const [collapase, setCollapse] = useState(false)

  

    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("auth") === "true";
    const role = localStorage.getItem("role");


   

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

                        <div className="d-flex justify-content-between align-items-center col-md-4">
                            <Link to={'/'}><img className='animate__animated animate__bounceIn' src={logo} alt="no img" style={{ width: '100px' }} /></Link>
                            <div className=' d-md-none'>
                                <button onClick={() => setCollapse(!collapase)} className='btn border border-white'><FontAwesomeIcon icon={faBars} /></button>
                            </div>
                        </div>

                        {/* Menu bar */}






                        {/* Collapsible Menu */}

                        {collapase && <div className='d-md-none'>
                            <div className="col-md-6 ">
                                <input type="text" placeholder='search' className='form-control w-100 border border-dark rounded-pill bg-white bg-opacity-100 mt-2' />
                            </div>

                            <div className="col-md-2">
                                <ul className='d-flex flex-column justify-center text-center list-unstyled' >
                                    {
                                        localStorage.getItem("role") === "user" && (
                                            <>
                                                <Link to={'/wishlist'} >
                                                    <button className=' btn text-white border border-white mt-2 rounded-pill' >Wishlist</button>
                                                </Link>

                                                <Link to={'/booking'}>
                                                    <button className='btn text-white border border-white mt-2 rounded-pill'>Bookings</button>
                                                </Link>
                                            </>
                                        )}


                                    {/* <button className=' btn text-white border border-white mt-2 rounded-pill'><FontAwesomeIcon className='text-white' icon={faUser} /> User</button> */}
                                    <DropdownButton className='w-100  mt-2 user-dropdown ms-5' variant='transparent' as={ButtonGroup} title={
                                        <span className='text-white d-flex align-items-center gap-2 '>
                                            <FontAwesomeIcon icon={faUser} className='ms-3' />
                                            <span>Welcome {userName ? ` ${userName}` : ' Guest'}</span>
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

                        <div className="col-md-3 d-none d-md-block pe-md-2 me-5 text-end">

                            <ul className='d-flex list-unstyled animate__animated animate__bounceIn' >
                                {
                                    localStorage.getItem("role") === "user" && (
                                        <>
                                            <Link to={'/wishlist'}>
                                                <button className='bg-transparent btn fs-4 mt-4' >
                                                    <li><FontAwesomeIcon icon={faHeart} className='text-danger mb-2' /></li>
                                                </button>
                                            </Link>

                                            <Link to={'/booking'}>
                                                <button className='bg-transparent btn mt-4'>
                                                    <li><FontAwesomeIcon icon={faClipboardCheck} className='text-success me-2 ms-2 fs-4' /></li>
                                                </button>
                                            </Link>
                                        </>
                                    )
                                }

                                <div className='d-flex align-items-center gap-2'>
                                    {
                                        role === "admin" && (
                                            <>
                                                <img
                                                    src="https://w7.pngwing.com/pngs/306/70/png-transparent-computer-icons-management-admin-silhouette-black-and-white-neck-thumbnail.png" // Replace with your desired image
                                                    alt="admin"
                                                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                                                />
                                                <b><p className='mt-3 ms-2 text-success fs-5'>Online </p></b>
                                            </>
                                        )
                                    }

                                    <DropdownButton
                                        className='w-100'
                                        variant='transparent'
                                        as={ButtonGroup}
                                        title={
                                            <span className='text-white d-flex align-items-center gap-2'>
                                                <FontAwesomeIcon icon={faUser} />
                                                <span className='d-none d-md-inline' style={{fontSize:"20px"}}>Welcome {userName ? ` ${userName}` : <span> Guest <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMcA2NMJF5xTolfKbiygaMYXrGEot9WCKFfx4KprMnWL2QezMDsetVEVFAkK9rn49g5c&usqp=CAU" alt="" style={{width:"70px",height:"60px" ,marginLeft:"10px",borderRadius:"50%"}}/></span>}</span>
                                            </span>
                                        }
                                        style={{ marginLeft: "10px", marginTop: "20px" }}
                                    >
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
                                </div>






                            </ul>
                        </div>





                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header