import { faCartPlus, faGasPump, faHeart, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import '../style/CardData.css'

function CardData() {
    return (
        <>
            {/*Card Container*/}
            <div className="container mt-5 mb-5">
                <div className="row row-gap-4">

                    {/* cards */}
                    <div className="col-md-3">
                        <div className='border border-light p-2 rounded-4 customCard'>
                            <div className='d-flex justify-content-between align-items-center px-2 py-2'>
                                <h5>Volkswagen Polo gti</h5>
                                <button className='btn'><FontAwesomeIcon icon={faHeart} className='text-danger' /></button>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-around '>
                                <div className='d-flex align-items-center'>
                                    <FontAwesomeIcon icon={faGasPump} className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>petrol</h6>
                                </div>

                                <div className='d-flex align-items-center' >
                                    <img style={{ width: '19px' }} src="https://cdn4.iconfinder.com/data/icons/smashicons-car-parts-greyscale-vol-1/60/20_-Doors_Open-_car_part_vehicle-512.png" alt="" className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>5 Doors</h6>
                                </div>

                            </div>

                            <div className='d-flex justify-content-around mt-3'>
                                <div className='d-flex align-items-center'>
                                    <img style={{ width: '18px', backgroundColor: 'gray' }} src="https://cdn1.iconfinder.com/data/icons/rcons-transport/32/transmission_manual-1024.png" alt="" className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>Manual</h6>
                                </div>

                                <div className='d-flex align-items-center'>
                                    <FontAwesomeIcon icon={faUsers} className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>5 seater</h6>
                                </div>
                            </div>

                            <div className='w-100 mt-3'>
                                <img style={{ width: '100%', height: '200px' }} className='rounded-4' src="https://p.turbosquid.com/ts-thumb/P8/yDaVML/Yy/volkswagen_golf_clubsport_gti_2025/jpg/1718090732/1920x1080/turn_fit_q99/3b00df2213f9e48fc882d46b300b012aeb2b838a/volkswagen_golf_clubsport_gti_2025-1.jpg" alt="no img" />
                            </div>

                            <hr />

                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h6>&#8377; 2000</h6>
                                    <p>From Per day</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <button className='btn border me-1'> <FontAwesomeIcon icon={faCartPlus} className='text-success' /></button>
                                    <div>
                                        <button className='btn bg-danger'>Book</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className='border border-light p-2 rounded-4 customCard'>
                            <div className='d-flex justify-content-between align-items-center px-2 py-2'>
                                <h5>Mercedes G63</h5>
                                <button className='btn'><FontAwesomeIcon icon={faHeart} className='text-danger' /></button>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-around '>
                                <div className='d-flex align-items-center'>
                                    <FontAwesomeIcon icon={faGasPump} className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>petrol</h6>
                                </div>

                                <div className='d-flex align-items-center' >
                                    <img style={{ width: '19px' }} src="https://cdn4.iconfinder.com/data/icons/smashicons-car-parts-greyscale-vol-1/60/20_-Doors_Open-_car_part_vehicle-512.png" alt="" className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>5 Doors</h6>
                                </div>

                            </div>

                            <div className='d-flex justify-content-around mt-3'>
                                <div className='d-flex align-items-center'>
                                    <img style={{ width: '18px', backgroundColor: 'gray' }} src="https://cdn1.iconfinder.com/data/icons/rcons-transport/32/transmission_manual-1024.png" alt="" className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>Automatic</h6>
                                </div>

                                <div className='d-flex align-items-center'>
                                    <FontAwesomeIcon icon={faUsers} className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>5 seater</h6>
                                </div>
                            </div>

                            <div className='w-100 mt-3'>
                                <img style={{ width: '100%', height: '200px' }} className='rounded-4' src="https://www.mbusa.com/content/dam/mb-nafta/us/myco/my25/g-class/gallery/series/gallery-class/2025-G-SUV-GAL-013-E-FE-DR.jpg" alt="no img" />
                            </div>

                            <hr />

                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h6>&#8377; 1500</h6>
                                    <p>From Per day</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <button className='btn border me-1'> <FontAwesomeIcon icon={faCartPlus} className='text-success' /></button>
                                    <div>
                                        <button className='btn bg-danger'>Book</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className='border border-light p-2 rounded-4 customCard'>
                            <div className='d-flex justify-content-between align-items-center px-2 py-2'>
                                <h5>BMW M5 </h5>
                                <button className='btn'><FontAwesomeIcon icon={faHeart} className='text-danger' /></button>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-around '>
                                <div className='d-flex align-items-center'>
                                    <FontAwesomeIcon icon={faGasPump} className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>petrol</h6>
                                </div>

                                <div className='d-flex align-items-center' >
                                    <img style={{ width: '19px' }} src="https://cdn4.iconfinder.com/data/icons/smashicons-car-parts-greyscale-vol-1/60/20_-Doors_Open-_car_part_vehicle-512.png" alt="" className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>5 Doors</h6>
                                </div>

                            </div>

                            <div className='d-flex justify-content-around mt-3'>
                                <div className='d-flex align-items-center'>
                                    <img style={{ width: '18px', backgroundColor: 'gray' }} src="https://cdn1.iconfinder.com/data/icons/rcons-transport/32/transmission_manual-1024.png" alt="" className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>Automatic</h6>
                                </div>

                                <div className='d-flex align-items-center'>
                                    <FontAwesomeIcon icon={faUsers} className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>5 seater</h6>
                                </div>
                            </div>

                            <div className='w-100 mt-3'>
                                <img style={{ width: '100%', height: '200px' }} className='rounded-4' src="https://cdn.bmwblog.com/wp-content/uploads/2024/01/BMW-M5-F90-by-Manhart-19-scaled.jpg" alt="no img" />
                            </div>

                            <hr />

                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h6>&#8377; 1500</h6>
                                    <p>From Per day</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <button className='btn border me-1'> <FontAwesomeIcon icon={faCartPlus} className='text-success' /></button>
                                    <div>
                                        <button className='btn bg-danger'>Book</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className='border border-light p-2 rounded-4 customCard'>
                            <div className='d-flex justify-content-between align-items-center px-2 py-2'>
                                <h5>Defender</h5>
                                <button className='btn'><FontAwesomeIcon icon={faHeart} className='text-danger' /></button>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-around '>
                                <div className='d-flex align-items-center'>
                                    <FontAwesomeIcon icon={faGasPump} className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>petrol</h6>
                                </div>

                                <div className='d-flex align-items-center' >
                                    <img style={{ width: '19px' }} src="https://cdn4.iconfinder.com/data/icons/smashicons-car-parts-greyscale-vol-1/60/20_-Doors_Open-_car_part_vehicle-512.png" alt="" className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>5 Doors</h6>
                                </div>

                            </div>

                            <div className='d-flex justify-content-around mt-3'>
                                <div className='d-flex align-items-center'>
                                    <img style={{ width: '18px', backgroundColor: 'gray' }} src="https://cdn1.iconfinder.com/data/icons/rcons-transport/32/transmission_manual-1024.png" alt="" className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>Automatic</h6>
                                </div>

                                <div className='d-flex align-items-center'>
                                    <FontAwesomeIcon icon={faUsers} className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>5 seater</h6>
                                </div>
                            </div>

                            <div className='w-100 mt-3'>
                                <img style={{ width: '100%',height:'200px'}} className='rounded-4' src="https://imgcdn.oto.com/large/gallery/exterior/43/2671/land-rover-defender-front-angle-low-view-185387.jpg" alt="no img" />
                            </div>

                            <hr />

                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h6>&#8377; 1500</h6>
                                    <p>From Per day</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <button className='btn border me-1'> <FontAwesomeIcon icon={faCartPlus} className='text-success' /></button>
                                    <div>
                                        <button className='btn bg-danger'>Book</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className='border border-light p-2 rounded-4 customCard'>
                            <div className='d-flex justify-content-between align-items-center px-2 py-2'>
                                <h5>Amg A45s</h5>
                                <button className='btn'><FontAwesomeIcon icon={faHeart} className='text-danger' /></button>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-around '>
                                <div className='d-flex align-items-center'>
                                    <FontAwesomeIcon icon={faGasPump} className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>petrol</h6>
                                </div>

                                <div className='d-flex align-items-center' >
                                    <img style={{ width: '19px' }} src="https://cdn4.iconfinder.com/data/icons/smashicons-car-parts-greyscale-vol-1/60/20_-Doors_Open-_car_part_vehicle-512.png" alt="" className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>5 Doors</h6>
                                </div>

                            </div>

                            <div className='d-flex justify-content-around mt-3'>
                                <div className='d-flex align-items-center'>
                                    <img style={{ width: '18px', backgroundColor: 'gray' }} src="https://cdn1.iconfinder.com/data/icons/rcons-transport/32/transmission_manual-1024.png" alt="" className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>Automatic</h6>
                                </div>

                                <div className='d-flex align-items-center'>
                                    <FontAwesomeIcon icon={faUsers} className='me-2' />
                                    <h6 style={{ color: 'lightgray' }}>5 seater</h6>
                                </div>
                            </div>

                            <div className='w-100 mt-3'>
                                <img style={{ width: '100%',height:'200px'}} className='rounded-4' src="https://img.autocarindia.com/ExtraImages/20190705053308_Mercedes-AMG-A45-front.jpg" alt="no img" />
                            </div>

                            <hr />

                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h6>&#8377; 1500</h6>
                                    <p>From Per day</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <button className='btn border me-1'> <FontAwesomeIcon icon={faCartPlus} className='text-success' /></button>
                                    <div>
                                        <button className='btn bg-danger'>Book</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardData