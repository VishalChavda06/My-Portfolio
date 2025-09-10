import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import HomePage from '../Pages/HomePage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes