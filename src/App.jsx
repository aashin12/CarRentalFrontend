import Landing from './Pages/Landing'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'

import Login from './Components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard from './Pages/AdminDashboard'
import ProtectedRoute from './Components/ProtectRoute'
import Wishlist from './Pages/Wishlist'
import Booking from './Pages/Booking'
import Header from './Components/Header'
import UpdateForm from './Pages/UpdateForm'
import CarBookingForm from './Pages/CarBookingForm'
import Payment from './Pages/Payment';
import Register from './Components/Register'
import Root from './Components/Root'


function App() {

  return (
    <>
      <Header />
      <Routes>

        <Route path={'/'} element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
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
