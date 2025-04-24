import Landing from './Pages/Landing'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'


import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard from './Pages/AdminDashboard'
import ProtectedRoute from './Componentss/ProtectRoute'
import Wishlist from './Pages/Wishlist'
import Booking from './Pages/Booking'
import Header from './Componentss/Header'
import UpdateForm from './Pages/UpdateForm'
import CarBookingForm from './Pages/CarBookingForm'
import Payment from './Pages/Payment';
import Register from './Componentss/Register'
import Root from './Componentss/Root'
import SignIn from './Componentss/SignIn'


function App() {

  return (
    <>
      <Header />
      <Routes>

        <Route path={'/'} element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/SignIn " element={<SignIn />} />
        <Route path="/bookingform" element={<CarBookingForm />} />
        <Route path="/payment" element={<Payment />} />
        

        {/* Protected Routes for Users */}
        <Route path="/home" element={
          <ProtectedRoute allowedRoles={['user']}>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/wishlist" element={
          <ProtectedRoute allowedRoles={['user']}>
            <Wishlist />
          </ProtectedRoute>
        } />
    
        <Route path="/booking" element={
          <ProtectedRoute allowedRoles={['user']}>
            <Booking />
          </ProtectedRoute>
        } />


        <Route path="/admin" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        }
        />

        <Route path="/updateform/:id" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <UpdateForm />
          </ProtectedRoute>
        }
        />




      </Routes>
      <Root/>
    </>
  )
}


export default App
