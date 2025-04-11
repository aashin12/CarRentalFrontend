import React from 'react'

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
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center',
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-white" style={{ padding: '2rem' }}>
                                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 'bold' }}>
                                    Drive Your Dream Car Today
                                </h1>
                                <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
                                    Affordable. Reliable. Fast. Choose from a wide range of cars and experience
                                    hassle-free rentals with flexible plans and 24/7 support.
                                </p>
                                <button className="btn btn-warning btn-lg mt-3">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Landing
