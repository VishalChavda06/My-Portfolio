import React, { useState, useEffect, useRef } from 'react'

const ContactPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const mapRef = useRef(null)
  const mapInstance = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Working with this team was an absolute pleasure. Their attention to detail and creative approach helped us achieve our goals beyond expectations.",
      rating: 5,
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      content: "The level of professionalism and technical expertise is outstanding. They delivered our project on time and within budget.",
      rating: 5,
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, DesignStudio",
      content: "Exceptional work! They understood our vision perfectly and brought it to life with amazing results. Highly recommended!",
      rating: 5,
      avatar: "ER"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CTO, DataFlow Systems",
      content: "Outstanding technical skills and great communication throughout the project. They exceeded all our expectations.",
      rating: 5,
      avatar: "DT"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Marketing Director, GrowthCo",
      content: "Professional, reliable, and incredibly talented. They helped us transform our digital presence completely.",
      rating: 5,
      avatar: "LW"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Operations Manager, ScaleUp",
      content: "The best development team we've worked with. Their solutions are innovative and perfectly executed.",
      rating: 5,
      avatar: "JW"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Initialize Map
  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current) return

      // Create a working map using OpenStreetMap (no API key required)
      const mapContainer = mapRef.current
      mapContainer.innerHTML = `
        <div style="
          width: 100%; 
          height: 100%; 
          background: #f8f9fa;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          border: 1px solid #e9ecef;
        ">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540873073!2d-0.119543!3d51.5033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea02!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1635000000000!5m2!1sen!2suk"
            width="100%" 
            height="100%" 
            style="border:0; border-radius: 8px;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          <div style="
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(255, 255, 255, 0.9);
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 12px;
            color: #666;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          ">
            📍 London Eye
          </div>
        </div>
      `
    }

    initMap()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact
          </h1>
          
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-8">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span className="text-sm">Home</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-sm text-green-500">Contact</span>
          </div>
          
          {/* Decorative Dot */}
          <div className="w-2 h-2 bg-green-500 rounded-full mx-auto"></div>
        </div>
      </div>

       {/* Contact Section with Map */}
       <div className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {/* Left Column - Contact Information */}
             <div className="space-y-8">
               <div>
                 <div className="flex items-center space-x-3 mb-4">
                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                     <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                     </svg>
                   </div>
                   <h3 className="text-green-500 text-lg font-medium">Contact Me</h3>
                 </div>
                 
                 <h2 className="text-4xl font-bold text-gray-900 mb-6">
                   Have A Project In Mind? Let&apos;s Talk!
                 </h2>
                 
                 <p className="text-lg text-gray-600 mb-8">
                   Are you looking to create a seamless and  user experience? I&apos;m here to help! Call Now
                 </p>
               </div>

               <div className="space-y-6">
                 <div className="flex items-center space-x-4">
                   <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                     <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                     </svg>
                   </div>
                   <div>
                     <p className="font-semibold text-gray-900 text-lg">Call Now</p>
                     <p className="text-gray-600 text-lg">+91 9825405883</p>
                   </div>
                 </div>
                 
                 <div className="flex items-center space-x-4">
                   <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                     <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                     </svg>
                   </div>
                   <div>
                     <p className="font-semibold text-gray-900 text-lg">Email</p>
                     <p className="text-gray-600 text-lg">vc229067@gmail.com</p>
                   </div>
                 </div>
                 
                 <div className="flex items-center space-x-4">
                   <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                     <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                     </svg>
                   </div>
                   <div>
                     <p className="font-semibold text-gray-900 text-lg">Address</p>
                     <p className="text-gray-600 text-lg">B 604 Suman Sadhna , Variav Surat.</p>
                   </div>
                 </div>
               </div>

               {/* Social Media Section */}
               <div className="pt-8">
                 <p className="text-gray-900 font-bold text-lg mb-6">Social:</p>
                 <div className="flex space-x-4">
                   <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                     <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                     </svg>
                   </div>
                   <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                     <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                     </svg>
                   </div>
                   <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                     <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                     </svg>
                   </div>
                 </div>
               </div>
             </div>

             {/* Right Column - Google Map */}
             <div className="lg:h-[600px] h-[400px]">
               <div 
                 ref={mapRef}
                 className="w-full h-full rounded-lg shadow-lg"
                 style={{ minHeight: '600px' }}
               />
             </div>
           </div>
         </div>
       </div>

      {/* Get In Touch Contact Form Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Get In Touch</h2>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-6 py-5 bg-white rounded-xl border-0 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none text-lg placeholder-gray-500"
                    placeholder="Enter Your Name"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 border-2 border-green-400 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    className="w-full px-6 py-5 bg-white rounded-xl border-0 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none text-lg placeholder-gray-500"
                    placeholder="Enter Your Number"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-6 py-5 bg-white rounded-xl border-0 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none text-lg placeholder-gray-500"
                  placeholder="Enter Your Email"
                />
              </div>
              
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-6 py-5 bg-white rounded-xl border-0 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none text-lg placeholder-gray-500 resize-none"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-5 px-8 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-3 text-lg shadow-lg hover:shadow-xl"
              >
                <span>Send Message</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
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

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say About</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          {/* Testimonials Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-2xl mx-auto">
                      {/* Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-lg text-gray-700 mb-8 italic">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.avatar}
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

