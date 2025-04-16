import React from 'react'
import { Link } from 'react-router-dom'


function Signup() {
  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
    <div className="card bg-dark text-white p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
      <h3 className="text-center mb-4">Create an Account</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control bg-secondary text-white border-0" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control bg-secondary text-white border-0" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control bg-secondary text-white border-0" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-warning w-100">Sign Up</button>
        <div className="text-center mt-3">
          Already have an account? <Link to="/login" className="text-info">Login</Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Signup