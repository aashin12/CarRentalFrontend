import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <>
            <div className="container-fluid p-0">
                <div
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D")',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        // backgroundAttachment: 'fixed',
                        backgroundPosition: 'center',
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 text-white" style={{ padding: '1rem' }}>
                                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 'bold' }}>
                                    <span className='text-danger '>Drive</span> Your Dream Car Today
                                </h1>
                                <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', textAlign: 'justify' }} className='mt-3'>
                                    Affordable. Reliable. Fast. Choose from a wide range of cars and experience
                                    hassle-free rentals with flexible plans and 24/7 support.
                                </p>
                                <Link to={'/signup'}>
                                    <button className="btn btn-warning mt-2">
                                        Book Now <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Landing

