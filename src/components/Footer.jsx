import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { faFacebookF, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {


  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const interval = setInterval(() => {
      const currentRole = localStorage.getItem("role");
      if (currentRole !== role) {
        setRole(currentRole);
      }
    }, 1000); // Checks every second

    return () => clearInterval(interval);
  }, [role]);


  return (
    <div>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center px-2">

          <div className="col-md-4">
            <img className='animate__animated animate__bounceIn' style={{ width: '100px' }} src={logo} alt="no img" />
            <p style={{ textAlign: 'justify', color: 'white' }}>Affordable. Reliable. Fast. Choose from a wide range of cars and experience hassle-free rentals with flexible plans and 24/7 support.</p>
          </div>

          <div className='col-md-8'>

            <div className="container">
              <div className="row">
                <div className="col-md-4">

                  <ul className='list-unstyled mt-2 lh-lg ms-md-5'>
                    <h5 className='mt-4'>Pages</h5>

                    {role === 'user' ? (
                      <>
                        <Link to={'/home'} className='text-decoration-none'><li>Home</li></Link>
                        <Link to={'/wishlist'} className='text-decoration-none'><li>Wishlist</li></Link>
                        <Link to={'/booking'} className='text-decoration-none'><li>Bookings</li></Link>
                      </>
                    ) : role === 'admin' ? (
                      <Link to={'/admin'} className='text-decoration-none'><li>Admin Dashboard</li></Link>
                    ) : null}
                  </ul>

                </div>

                <div className="col-md-4">

                  <ul className='list-unstyled mt-2 lh-lg'>
                    <h5 className='mt-4'>Guides</h5>
                    <Link className='text-decoration-none '><li>Bootstrap</li></Link>
                    <Link className='text-decoration-none '><li>React Bootstrap</li></Link>
                    <Link className='text-decoration-none '><li>Watch bootstrap</li></Link>
                  </ul>
                </div>

                <div className="col-md-4">
                  <h5 className='mt-4'>Contact</h5>
                  <div className='d-flex justify-content-between align-items-center mt-3'>
                    <input type="text" placeholder='email' className='form-control me-2' />
                    <button className='btn bg-warning text-white'>Submit</button>
                  </div>
                  <ul className='list-unstyled d-flex justify-content-between mt-3'>
                    <Link><li><FontAwesomeIcon className='text-white' icon={faInstagram} /></li></Link>
                    <Link><li><FontAwesomeIcon className='text-white' icon={faLinkedin} /></li></Link>
                    <Link><li><FontAwesomeIcon className='text-white' icon={faXTwitter} /></li></Link>
                    <Link><li><FontAwesomeIcon className='text-white' icon={faFacebookF} /></li></Link>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer