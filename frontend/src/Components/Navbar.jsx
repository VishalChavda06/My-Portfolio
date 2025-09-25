import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-blue-100"></div>
      <div className="absolute right-0 top-0 w-1 h-full bg-green-500"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-gray-800">My-Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium flex items-center space-x-1">
              <span>Home</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              About Us
            </a>
            <Link to="/service" className="text-gray-700 hover:text-gray-900 font-medium flex items-center space-x-1">
              <span>Service</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium flex items-center space-x-1">
              <span>Blog</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
              Contact Me
            </Link>
          </div>

          {/* Hire Me Button */}
          <div className="hidden md:block">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-2">
              <span>Hire Me</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Home
              </Link>
              <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                About Us
              </a>
              <Link to="/service" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Service
              </Link>
              <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Blog
              </a>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Contact Me
              </Link>
              <div className="pt-2">
                <button className="w-full bg-gray-800 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Hire Me</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar