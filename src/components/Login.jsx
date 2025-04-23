import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { userLoginApi } from '../services/allApi';



function Login() {
    const navigate = useNavigate();

    const [role, setRole] = useState('user'); // Default role
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      toast.error('Email and password are required.');
      return;
    }
  
    
  
    try {
      const res = await userLoginApi(email, password);
      const data = res.data;

      if (data.length > 0) {
        
        const user = data[0];
        console.log("Logged in user:", user);

        localStorage.setItem("auth", true);
        localStorage.setItem("role", user.role);
        localStorage.setItem("userId", user.id); // Optional
        localStorage.setItem("userName", user.fullName);
  
        if (user.role === 'admin') {
          toast.success('Login Successful');
          setTimeout(() => {
            navigate('/admin');
          }, 1500);
         
        } else {
          toast.success('Login Successful');
          setTimeout(() => {
            navigate('/home');
          }, 1500);
          
        }
      } else {
        toast.error("Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Try again.");
    }
  };
  
  
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="card bg-dark text-white p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control bg-secondary text-white border-0" placeholder="Enter email" value={email}   onChange={(e) => setEmail(e.target.value)}  />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control bg-secondary text-white border-0" placeholder="Password"  value={password}
              onChange={(e) => setPassword(e.target.value)}  />
          </div>
          <div className="mb-3">
            <label className="form-label">Login As</label>
            <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          {/* {error && <div className="text-danger mb-3">{error}</div>} */}
          <button type="submit" className="btn btn-warning w-100">Login</button>
          <div className="text-center mt-3">
            Don’t have an account? <Link to="/signup" className="text-info">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
    
    <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Login