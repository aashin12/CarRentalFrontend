import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    localStorage.setItem("user", "loggedin");
    navigate("/home");
  };
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="card bg-dark text-white p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control bg-secondary text-white border-0" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control bg-secondary text-white border-0" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-warning w-100">Login</button>
          <div className="text-center mt-3">
            Don’t have an account? <Link to="/signup" className="text-info">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
    
    </>
  )
}

export default Login