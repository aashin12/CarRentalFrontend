import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { userRegisterApi } from '../services/allApi';



function Signup() {


  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      toast.error('All fields are required.');
      return;
    }



    const newUser = {
      fullName,
      email,
      password,
      role: "user"
    };

    try {
      const res = await userRegisterApi(newUser);

      if (res && res.status === 201) {
        toast.success('Account created successfully! Please log in.');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        toast.error("Something went wrong. Try again!");
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to connect to server.");
    }
  };

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="card bg-dark text-white p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
          <h3 className="text-center mb-4">Create an Account</h3>
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control bg-secondary text-white border-0" placeholder="Enter your name" value={fullName}
                onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control bg-secondary text-white border-0" placeholder="Enter email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control bg-secondary text-white border-0" placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* {error && <div className="text-danger mb-3">{error}</div>}

        {successMessage && <div className="text-success mb-3">{successMessage}</div>} */}


            <button type="submit" className="btn btn-warning w-100">Sign Up</button>
            <div className="text-center mt-3">
              Already have an account? <Link to="/login" className="text-info">Login</Link>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default Signup