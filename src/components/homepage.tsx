'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { LayoutGrid, DoorOpen, Home, Construction, Paintbrush, ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Star, ExternalLink, Clock, Shield, Zap, ThumbsUp, Sparkles, Users } from 'lucide-react'

export default function Homepage() {
  const [openService, setOpenService] = useState<string | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const products = [
    {
      title: "Windows",
      image: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=3087&auto=format&fit=crop",
      category: "Premium Glass",
      background: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop",
      description: "Our energy-efficient windows are tailored to your home's style and needs. Choose from casement, tilt and turn, and sash windows to enhance your property's appearance and thermal performance."
    },
    {
      title: "Doors",
      image: "https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?q=80&w=3087&auto=format&fit=crop",
      category: "Security",
      background: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=2070&auto=format&fit=crop",
      description: "Secure and stylish entrance solutions that make a lasting impression. Our selection includes uPVC, composite, French, and bifold doors to complement your home's architecture."
    }
  ]

  const features = [
    { icon: Shield, text: "Premium Quality" },
    { icon: Zap, text: "Energy Efficient" },
    { icon: ThumbsUp, text: "Customer Satisfaction" },
    { icon: Sparkles, text: "Bespoke Designs" },
    { icon: Users, text: "Expert Installation" }
  ]

  const testimonials = [
    {
      name: "Ethan",
      location: "Glasgow",
      text: "Scotseal transformed our home with their energy-efficient windows. The difference in insulation and noise reduction is remarkable. Their team was professional, and the installation was quick and clean. Our energy bills have noticeably decreased since the upgrade.",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      name: "Anne",
      location: "Edinburgh",
      text: "We chose Scotseal for our new front door, and we couldn't be happier. The security features are top-notch, and the design perfectly complements our home's exterior. The team's attention to detail during installation was impressive. It's not just a door; it's a statement piece.",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      name: "Ricardo",
      location: "Aberdeen",
      text: "Scotseal built a beautiful conservatory for us, extending our living space and bringing the outdoors in. From the initial design consultation to the final touches, their expertise shone through. The quality of workmanship is excellent, and it's now our favorite room in the house.",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
        setOpenService(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const services = [
    {
      id: 'windows',
      icon: LayoutGrid,
      title: 'Windows',
      children: ['Casement', 'Tilt and turn', 'Sash']
    },
    {
      id: 'doors',
      icon: DoorOpen,
      title: 'Doors',
      children: ['uPvc', 'Composite', 'French/Patio', 'Bifolds']
    },
    {
      id: 'conservatories',
      icon: Home,
      title: 'Conservatories',
      children: []
    },
    {
      id: 'roofs',
      icon: Construction,
      title: 'Roofs',
      children: []
    },
    {
      id: 'roughcasting',
      icon: Construction,
      title: 'Rough casting',
      children: []
    },
    {
      id: 'coatings',
      icon: Paintbrush,
      title: 'Coatings',
      children: []
    }
  ]

  return (
    <div className="font-sans">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-800/50 backdrop-blur-md shadow-md text-white' : 'bg-transparent text-white'}`}>
        <div className="container mx-auto px-4">
          {/* Removed Navigation Section */}
        </div>
      </header>

      <section id="home" className="relative min-h-screen flex items-center bg-cover bg-center" style={{backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oliur-POycdKPE8KQ-unsplash.jpg-el6ZLrfC5c529S407Xa0SRoa76LqIL.jpeg')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
          <div className="text-white md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Transform Your Home with Excellence</h1>
            <p className="text-xl mb-8 opacity-90">Premium windows, doors, and home improvements. Creating dream homes across Scotland since 2008.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#quote" className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="#portfolio" className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                View Our Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="bg-white rounded-lg shadow-xl flex overflow-hidden">
              <div className="w-full md:w-1/2 p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Get a price</h2>
                  <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    <Star className="w-4 h-4 mr-1" />
                    Rated 4.9/5
                  </div>
                </div>
                <form action="https://formsubmit.co/kendidly@gmail.com" method="POST" className="space-y-4">
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Select a product</label>
                    <select id="product" name="product" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required>
                      <option value="">Select a product</option>
                      <option value="windows">Windows</option>
                      <option value="doors">Doors</option>
                      <option value="conservatory">Conservatory</option>
                      <option value="roofing">Roofing</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                      <input type="text" id="firstName" name="firstName" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                      <input type="text" id="lastName" name="lastName" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Contact number</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="houseNumber" className="block text-sm font-medium text-gray-700 mb-1">House name/number</label>
                      <input type="text" id="houseNumber" name="houseNumber" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                    </div>
                    <div>
                      <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
                      <input type="text" id="postcode" name="postcode" className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                    Get in touch
                  </button>
                </form>
                <p className="mt-4 text-sm text-gray-600">
                By providing your details you agree to being contacted and your data being processed under the terms of our <a href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</a>.
                </p>
              </div>
              <div className="hidden md:block w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1653749576880-7d7caa5ecb62?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[#1C1C1C] py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center mb-2 relative">
                <div className="bg-blue-600 px-6 py-2 -rotate-3 absolute -left-4">
                  <span className="text-3xl font-bold text-black tracking-tight">WORLD-CLASS</span>
                </div>
                <h2 className="text-5xl font-bold text-white ml-[260px]">CUSTOMER SUPPORT</h2>
              </div>
              <p className="text-gray-400 text-center mt-4">
                Don't just take our word for it. Our A-team gets tons of praise.
              </p>
            </div>

            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-6 w-[350px]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-gray-900">{testimonial.name}</span>
                        <span className="text-gray-500">© {testimonial.location}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        {testimonial.text}
                      </p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 text-blue-600" 
                            fill="currentColor"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#2C2C2C]">
              <div className="flex items-center gap-12">
                <div>
                  <div className="text-2xl font-bold text-white">4.9★</div>
                  <div className="text-sm text-gray-400">stars out of 5</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">2 hours</div>
                  <div className="text-sm text-gray-400">avg. response time</div>
                </div>
              </div>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                See 275+ reviews on Trustpilot →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Scotseal</h3>
              <p className="text-sm">Crafted to shield, built to last. Providing premium home improvements across Scotland since 2008.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm mb-2">123 Main St, Glasgow, G1 1AA</p>
              <p className="text-sm mb-2">Phone: 0141 345 3993</p>
              <p className="text-sm">Email: info@scotseal.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="hover:text-blue-400 transition-colors"><Twitter className="w-6 h-6" /></a>
                <a href="#" className="hover:text-blue-400 transition-colors"><Instagram className="w-6 h-6" /></a>
                <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm">&copy; 2024 Scotseal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}