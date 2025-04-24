
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, allowedRoles }) {
  const isAuthenticated = localStorage.getItem('auth')==='true';
  const userRole = localStorage.getItem('role');

  if (!isAuthenticated) {
    return <Navigate to="/SignIn " />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;
    
  }

  return children;
}

export default ProtectedRoute;
