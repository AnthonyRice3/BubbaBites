"use client";

import { useState } from "react";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-b from-pink-50 to-pink-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-pink-400">🍪 Bubba Bites</a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-pink-400 transition-colors font-medium">Home</a>
              <a href="/#flavors" className="text-gray-700 hover:text-pink-400 transition-colors font-medium">Flavors</a>
              <a href="/About" className="text-gray-700 hover:text-pink-400 transition-colors font-medium">About</a>
              <a href="/About/#contact" className="text-gray-700 hover:text-pink-400 transition-colors font-medium">Contact</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="hidden md:block bg-pink-400 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-pink-500 transition-all cursor-pointer">
                Order Now
              </button>
              
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-700 hover:text-pink-400 focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 animate-fade-in-up">
              <div className="flex flex-col space-y-3">
                <a
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-pink-400 hover:bg-pink-50 px-4 py-2 rounded-lg transition-colors font-medium"
                >
                  Home
                </a>
                <a
                  href="/#flavors"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-pink-400 hover:bg-pink-50 px-4 py-2 rounded-lg transition-colors font-medium"
                >
                  Flavors
                </a>
                <a
                  href="/About"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-pink-400 hover:bg-pink-50 px-4 py-2 rounded-lg transition-colors font-medium"
                >
                  About
                </a>
                <a
                  href="/About/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-pink-400 hover:bg-pink-50 px-4 py-2 rounded-lg transition-colors font-medium"
                >
                  Contact
                </a>
                <button className="bg-pink-400 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-pink-500 transition-all cursor-pointer">
                  Order Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <header className="relative overflow-hidden bg-linear-to-r from-pink-200 via-pink-300 to-pink-200 text-white" id="home">
        <div className="absolute inset-0 bg-[url('/temp1.JPG')] opacity-10 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in drop-shadow-lg">
            Bubba Bites
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Handcrafted cookies made with love, premium ingredients, and a whole lot of flavor
          </p>
          <button className="bg-white text-pink-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-all transform hover:scale-105 shadow-lg cursor-pointer">
            Order Now
          </button>
          
          {/* Social Media Links */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <a href="#" className="text-white hover:text-pink-100 transition-all transform hover:scale-110" aria-label="TikTok">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-pink-100 transition-all transform hover:scale-110" aria-label="Instagram">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-pink-100 transition-all transform hover:scale-110" aria-label="YouTube">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>


      {/* About Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16 animate-fade-in-up">
            About Bubba Bites
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Owner Photo Placeholder */}
            <div className="relative animate-fade-in-left">
              <div className="aspect-square bg-linear-to-br from-pink-100 to-pink-200 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden transition-all hover:shadow-2xl hover:scale-105">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">👨‍🍳</div>
                  <p className="text-gray-600 font-medium">Owner Photo</p>
                  <p className="text-gray-500 text-sm">(Coming Soon)</p>
                </div>
              </div>
            </div>
            
            {/* About Text */}
            <div className="animate-fade-in-right">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Welcome to Bubba Bites! What started as a passion for baking in a home kitchen 
                  has grown into a beloved local cookie shop serving our community with love and delicious treats.
                </p>
                <p>
                  Every cookie we bake is made with premium ingredients, traditional techniques, and 
                  a whole lot of heart. We believe that great cookies bring people together and create 
                  moments of joy in everyday life.
                </p>
                <p>
                  From our classic chocolate chip to our adventurous seasonal flavors, each recipe 
                  has been perfected to deliver the ultimate cookie experience. Thank you for supporting 
                  our small business and being part of the Bubba Bites family!
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hello@bubbabites.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Cookie Lane, Sweet City, SC 12345</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto animate-fade-in-up" id="contact">
            <div className="bg-linear-to-br from-pink-50 to-white rounded-2xl shadow-xl p-8 md:p-12 transition-all hover:shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Get In Touch</h3>
              <p className="text-gray-600 text-center mb-8">
                Have a question or want to place a custom order? We'd love to hear from you!
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us what's on your mind..."
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-linear-to-r from-pink-400 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-pink-500 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-r from-pink-300 to-pink-200 text-white py-20 animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up animate-delay-100">
            Ready to Treat Yourself?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up animate-delay-200">
            Order a dozen (or two!) and experience cookie perfection delivered to your door
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <button className="bg-white text-pink-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl cursor-pointer">
              Order Online
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-300 transition-all transform hover:scale-105 cursor-pointer">
              Visit Our Store
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Bubba Bites</h3>
          <p className="text-gray-400 mb-6">
            The sweetest cookies in town
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="/#contact" className="hover:text-pink-300 transition-colors">Contact</a>
            <a href="/about" className="hover:text-pink-300 transition-colors">About</a>
            <a href="#" className="hover:text-pink-300 transition-colors">FAQ</a>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © 2025 Bubba Bites. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
