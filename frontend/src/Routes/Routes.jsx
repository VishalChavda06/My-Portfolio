import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import HomePage from '../Pages/HomePage'
import ServicePage from '../Pages/ServicePage'
import ContactPage from '../Pages/ContactPage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes