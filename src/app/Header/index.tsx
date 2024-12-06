'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LayoutGrid, DoorOpen, Home, Construction, Paintbrush, ChevronDown, Phone, Menu, X } from 'lucide-react'

export default function Header() {
  const [openService, setOpenService] = useState<string | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-800/50 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image 
              src={isScrolled ? "/img/logo.png" : "/img/logodark.png"} 
              alt="Scotseal - Crafted to shield, built to last" 
              width={180} 
              height={180}
              className="w-32 md:w-[180px]" 
            />
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-200 transition-colors">Home</Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-white hover:text-gray-200 transition-colors inline-flex items-center gap-1"
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-lg shadow-lg bg-white/95 backdrop-blur-sm">
                  <div className="p-2">
                    {services.map((service) => (
                      <div key={service.id} className="relative mb-2">
                        <button
                          onClick={() => setOpenService(openService === service.id ? null : service.id)}
                          className="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 flex items-center gap-3 transition-colors"
                        >
                          <service.icon className="h-5 w-5 text-gray-500" />
                          <span>{service.title}</span>
                          {service.children.length > 0 && (
                            <ChevronDown className={`h-4 w-4 ml-auto transition-transform duration-200 ${openService === service.id ? 'rotate-180' : ''}`} />
                          )}
                        </button>
                        {openService === service.id && service.children.length > 0 && (
                          <div className="ml-10 mt-1 space-y-1 bg-white rounded-md p-2">
                            {service.children.map((child) => (
                              <Link
                                key={child}
                                href={`/services/${service.id}/${child.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block px-3 py-1 text-sm text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
                              >
                                {child}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/about" className="text-white hover:text-gray-200 transition-colors">About</Link>
            <Link href="/contact" className="text-white hover:text-gray-200 transition-colors">Contact</Link>
            <Link href="tel:01413453993" className="flex items-center text-white hover:text-gray-200 transition-colors">
              <Phone className="h-5 w-5 mr-2" />
              0141 345 3993
            </Link>
            <Link href="/quote" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Get a quote
            </Link>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-gray-800/95 backdrop-blur-sm p-4 md:hidden">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="text-white hover:text-gray-200 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <div className="space-y-2">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="text-white hover:text-gray-200 transition-colors flex items-center justify-between w-full"
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isDropdownOpen && (
                    <div className="pl-4 space-y-2">
                      {services.map((service) => (
                        <div key={service.id}>
                          <button
                            onClick={() => setOpenService(openService === service.id ? null : service.id)}
                            className="text-white hover:text-gray-200 transition-colors flex items-center justify-between w-full"
                          >
                            <span className="flex items-center gap-2">
                              <service.icon className="h-4 w-4" />
                              {service.title}
                            </span>
                            {service.children.length > 0 && (
                              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openService === service.id ? 'rotate-180' : ''}`} />
                            )}
                          </button>
                          {openService === service.id && service.children.length > 0 && (
                            <div className="pl-6 space-y-2 mt-2">
                              {service.children.map((child) => (
                                <Link
                                  key={child}
                                  href={`/services/${service.id}/${child.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block text-gray-300 hover:text-white transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {child}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <Link 
                  href="/about" 
                  className="text-white hover:text-gray-200 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="text-white hover:text-gray-200 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  href="tel:01413453993" 
                  className="text-white hover:text-gray-200 transition-colors flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  0141 345 3993
                </Link>
                <Link 
                  href="/quote"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get a quote
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}