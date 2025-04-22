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
      const res = await userLoginApi(email, password,role);
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
    <style>
      {
        `
        .login {
  --width: 150px;
  --timing: 2s;
  border: 0;
  width: var(--width);
  padding-block: 1em;
  color: #fff;
  font-weight: bold;
  font-size: 1em;
  background: rgb(102, 64, 192);
  transition: all 0.2s;
  border-radius: 3px;
  cursor: pointer;
}

.login:hover {
  background-image: linear-gradient(
    to right,
    rgb(250, 82, 82),
    rgb(250, 82, 82) 16.65%,
    rgb(190, 75, 219) 16.65%,
    rgb(190, 75, 219) 33.3%,
    rgb(76, 110, 245) 33.3%,
    rgb(76, 110, 245) 49.95%,
    rgb(64, 192, 87) 49.95%,
    rgb(64, 192, 87) 66.6%,
    rgb(250, 176, 5) 66.6%,
    rgb(250, 176, 5) 83.25%,
    rgb(253, 126, 20) 83.25%,
    rgb(253, 126, 20) 100%,
    rgb(250, 82, 82) 100%
  );
  animation: var(--timing) linear dance6123 infinite;
  transform: scale(1.1) translateY(-1px);
}

@keyframes dance6123 {
  to {
    background-position: var(--width);
  }
}

.desktop-mt {
  margin-top: 0;
}

@media (min-width: 768px) {
  .desktop-mt {
    margin-top: -70px;
  }
}

        `
      }
    </style>
      <div className="container d-flex align-items-center justify-content-center desktop-mt" style={{ minHeight: '100vh' }}>
      <div className="card bg-dark text-black p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4 text-black">Login</h3>
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
            <select className="form-select form-control bg-secondary text-white" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          {/* {error && <div className="text-danger mb-3">{error}</div>} */}
          {/* <button type="submit" className="btn btn-warning w-100">Login</button> */}

          <button className='login w-100'>Sign Up</button>
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