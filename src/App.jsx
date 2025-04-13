import Landing from './Pages/Landing'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path='/home' element={<Home/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
