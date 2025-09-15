import React from 'react'

const ServicePage = () => {
  const services = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "I specialize in full-stack web development, building dynamic, responsive",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
      ),
      featured: false
    },
    {
      id: 2,
      title: "Mobile App Development (IOS & Android)",
      description: "We create high-performance iOS and Android mobile apps with intuitive designs, seamless functionality, and cutting-edge",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
        </svg>
      ),
      featured: true
    },
    {
      id: 3,
      title: "Web Design Development",
      description: "I specialize in full-stack web development, building dynamic, responsive",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
      ),
      featured: false
    },
    {
      id: 4,
      title: "Full Stack Web Development",
      description: "I specialize in full-stack web development, building dynamic, responsive",
      icon: (
        <div className="text-white font-bold text-sm">API</div>
      ),
      featured: false
    },
    {
      id: 5,
      title: "Full Stack Visual Design",
      description: "I specialize in full-stack web development, building dynamic, responsive",
      icon: (
        <div className="text-white text-xs font-bold">
          <div>UX/UI</div>
          <svg className="w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7v6l5-3-5-3z"/>
          </svg>
        </div>
      ),
      featured: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Gradient Background */}
      <div className="relative bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Service
          </h1>
          
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-8">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span className="text-sm">Home</span>
            <span className="text-gray-400">></span>
            <span className="text-sm text-green-500">Service</span>
          </div>
          
          {/* Decorative Dot */}
          <div className="w-2 h-2 bg-green-500 rounded-full mx-auto"></div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8 ${
                  service.featured 
                    ? 'ring-2 ring-green-500 ring-opacity-50' 
                    : 'border border-gray-100'
                }`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${
                  service.featured ? 'bg-green-600' : 'bg-green-500'
                }`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's work together to bring your ideas to life with professional development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
            <button className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage
