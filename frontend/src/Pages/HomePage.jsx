import React, { useState, useEffect } from 'react'
import meImage from '../assets/me.jpeg'

// TestimonialSlider Component
const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Webcly Jhonson",
      role: "Senior Engineer",
      content: "This digital agency completely transformed our online presence. Their expertise, creativity, and attention to detail exceeded all our expectations. We highly recommend their outstanding services!",
      avatar: "WJ"
    },
    {
      id: 2,
      name: "Sarah Wilson",
      role: "Product Manager",
      content: "Working with this team was an absolute pleasure. Their attention to detail and creative approach helped us achieve our goals beyond expectations.",
      avatar: "SW"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "CEO, TechStart Inc.",
      content: "The level of professionalism and technical expertise is outstanding. They delivered our project on time and within budget.",
      avatar: "MC"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Founder, DesignStudio",
      content: "Exceptional work! They understood our vision perfectly and brought it to life with amazing results. Highly recommended!",
      avatar: "ER"
    },
    {
      id: 5,
      name: "David Thompson",
      role: "CTO, DataFlow Systems",
      content: "Outstanding technical skills and great communication throughout the project. They exceeded all our expectations.",
      avatar: "DT"
    }
  ]

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative">
      {/* Testimonial Card */}
      <div className="bg-gray-800 border border-green-500 rounded-xl p-8 max-w-lg">
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {testimonials[currentSlide].avatar}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{testimonials[currentSlide].name}</h3>
            <p className="text-gray-400">{testimonials[currentSlide].role}</p>
          </div>
        </div>
        
        <div className="relative">
          <svg className="w-8 h-8 text-green-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
          <p className="text-white text-lg leading-relaxed">
            {testimonials[currentSlide].content}
          </p>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-green-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-white to-blue-50"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-green-200 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-green-300 rounded-full"></div>
        
        {/* Sparkle Icons */}
        <div className="absolute top-16 right-16 text-green-400">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div className="absolute top-24 right-24 text-green-300">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        
        {/* Hand-drawn Arrow */}
        <div className="absolute top-40 right-40 text-green-500">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Person Image */}
            <div className="relative order-2 lg:order-1">
              {/* Large Abstract Green Shape */}
              <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-green-200 rounded-full opacity-30 transform -rotate-12"></div>
              
              {/* Person Image Container */}
              <div className="relative z-10 flex justify-center lg:justify-start lg:ml-8">
                <div className="relative">
                  {/* Your actual image */}
                  <div className="w-80 h-96 rounded-3xl shadow-2xl overflow-hidden">
                    <img 
                      src={meImage} 
                      alt="Your Photo" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  
                  {/* Small black dot below image */}
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-black rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Greeting */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-lg text-gray-600">Hey There!</span>
              </div>
              
              {/* Name */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                I'm <span className="text-green-500">Vishal Chavada</span>
              </h1>
              
              {/* Incomplete text (as in reference) */}
              <h2 className="text-4xl font-bold text-gray-900">Full Stack Developer</h2>
              
              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                We're a team of strategic working globally with largest brands, We believe that progress only you to play things safe.
              </p>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                  <span>Get Started</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Left Side Social Media List */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="flex flex-col space-y-20 ps-6">
            <a href="#" className="text-green-500 font-medium text-sm hover:text-green-600 transition-colors duration-200 border-b border-green-500 transform -rotate-90 origin-center whitespace-nowrap">
              Facebook
            </a>
            <a href="#" className="text-gray-600 font-medium text-sm hover:text-green-500 transition-colors duration-200 transform -rotate-90 origin-center whitespace-nowrap">
              Twitter
            </a>
            <a href="#" className="text-gray-600 font-medium text-sm hover:text-green-500 transition-colors duration-200 transform -rotate-90 origin-center whitespace-nowrap">
              LinkedIn
            </a>
            <a href="#" className="text-gray-600 font-medium text-sm hover:text-green-500 transition-colors duration-200 transform -rotate-90 origin-center whitespace-nowrap">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Scrolling Banner Section */}
      <div className="bg-gray-800 py-4 overflow-hidden">
        <div className="flex animate-scroll">
          <div className="flex space-x-12 whitespace-nowrap">
            {/* Repeat the banner content multiple times for seamless scrolling */}
            {[...Array(12)].map((_, index) => (
              <div key={index} className="flex items-center space-x-4 text-white flex-shrink-0">
                <span className="text-lg font-medium">The Best Solution</span>
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Service Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="text-gray-400 text-lg">Our Service</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              The <span className="text-green-500">Ease-Service Process</span>
            </h2>
          </div>

          {/* Service Cards */}
          <div className="space-y-6">
            {/* Service 1 - Highlighted */}
            <div className="bg-gray-800 border-2 border-green-500 rounded-xl p-6 flex items-center justify-between hover:bg-gray-750 transition-colors duration-200">
              <div className="flex items-center space-x-6">
                <span className="text-2xl font-bold text-gray-400">01</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Full Stack Web</h3>
                  <p className="text-gray-400 text-sm max-w-md">
                    We're a team of strategic working globally with largest brands, progress only you to play things safe.
                  </p>
                </div>
              </div>
              <button className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors duration-200">
                <span className="text-sm font-medium">Read More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-800 border border-gray-700 hover:border-green-500 rounded-xl p-6 flex items-center justify-between hover:bg-gray-750 transition-all duration-200 group">
              <div className="flex items-center space-x-6">
                <span className="text-2xl font-bold text-gray-400">02</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">API Development</h3>
                  <p className="text-gray-400 text-sm max-w-md">
                    We're a team of strategic working globally with largest brands, progress only you to play things safe.
                  </p>
                </div>
              </div>
              <button className="flex items-center space-x-3 bg-gray-700 group-hover:bg-green-500 text-white px-6 py-3 rounded-full transition-all duration-200">
                <span className="text-sm font-medium">Read More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-800 border border-gray-700 hover:border-green-500 rounded-xl p-6 flex items-center justify-between hover:bg-gray-750 transition-all duration-200 group">
              <div className="flex items-center space-x-6">
                <span className="text-2xl font-bold text-gray-400">03</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Mobile App Design</h3>
                  <p className="text-gray-400 text-sm max-w-md">
                    We're a team of strategic working globally with largest brands, progress only you to play things safe.
                  </p>
                </div>
              </div>
              <button className="flex items-center space-x-3 bg-gray-700 group-hover:bg-green-500 text-white px-6 py-3 rounded-full transition-all duration-200">
                <span className="text-sm font-medium">Read More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-800 border border-gray-700 hover:border-green-500 rounded-xl p-6 flex items-center justify-between hover:bg-gray-750 transition-all duration-200 group">
              <div className="flex items-center space-x-6">
                <span className="text-2xl font-bold text-gray-400">04</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Web Design</h3>
                  <p className="text-gray-400 text-sm max-w-md">
                    We're a team of strategic working globally with largest brands, progress only you to play things safe.
                  </p>
                </div>
              </div>
              <button className="flex items-center space-x-3 bg-gray-700 group-hover:bg-green-500 text-white px-6 py-3 rounded-full transition-all duration-200">
                <span className="text-sm font-medium">Read More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Rating & Info */}
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-gray-400 text-lg">Testimonials</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Our Clients Awesome - <span className="text-green-500">Testimonials</span>
              </h2>
              
              {/* Rating Box */}
              <div className="bg-gray-800 rounded-xl p-8 max-w-md">
                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-5xl font-bold text-white">4.8</span>
                  <span className="text-gray-400 text-lg">1200+ Clients Rating.</span>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Testimonial Card */}
            <div className="relative">
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Column 1: Services (Address) */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg">Services</h3>
              <div className="space-y-2 text-gray-300">
                <p>Travel World House, Level 7, 17</p>
                <p>Jones St, NSW, 2060</p>
              </div>
            </div>

            {/* Column 2: Contact */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>info@dixor.com</p>
                <p>+47 333 78 901</p>
              </div>
              
              {/* Social Media */}
              <div className="pt-4">
                <p className="text-white font-bold text-lg mb-4">Social:</p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065c0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Useful Links */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg">Useful Links</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">About Me</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Service</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Portfolio</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Blog</a>
              </div>
            </div>

            {/* Column 4: Services (Design Types) */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg">Services</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Mobile App Design</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Web Design</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">UI/UX Design</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Visual Design</a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-300 text-sm">
                Copyright©Xiomi
              </div>

              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-white font-bold text-lg">Xiomi</span>
              </div>

              {/* Legal Links */}
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  )
}

export default HomePage