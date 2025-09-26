import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import HomePage from '../Pages/HomePage'
import ServicePage from '../Pages/ServicePage'
import ContactPage from '../Pages/ContactPage'
import AboutPage from '../Pages/AboutPage'
import BlogPage from '../Pages/BlogPage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes