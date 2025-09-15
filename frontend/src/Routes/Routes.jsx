import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import HomePage from '../Pages/HomePage'
import ServicePage from '../Pages/ServicePage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes