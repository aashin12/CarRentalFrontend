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


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/booking" element={<Booking/>}/>

        
        <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

<Route
        path="/user"
        element={
          <ProtectedRoute allowedRoles={['user']}>
            <Home/>
          </ProtectedRoute>
        }
      />

      </Routes>
      <Footer />
    </>
  )
}

export default App
