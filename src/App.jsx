import Landing from './Pages/Landing'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard from './Pages/AdminDashboard'
import ProtectedRoute from './Components/ProtectRoute'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import Booking from './Pages/Booking'
import Addform from './Pages/Addform'
import UpdateForm from './Pages/UpdateForm'


function App() {

  return (
    <>
      <Header />
      <Routes>
      <Route path={'/UpdateForm'} element={<UpdateForm />} />
        <Route path={'/Addform'} element={<Addform />} />
        <Route path={'/'} element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

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
        <Route path="/cart" element={
          <ProtectedRoute allowedRoles={['user']}>
            <Cart />
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


      </Routes>
      <Footer />
    </>
  )
}

export default App
