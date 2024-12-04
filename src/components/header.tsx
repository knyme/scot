'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LayoutGrid, DoorOpen, Home, Construction, Paintbrush, ChevronDown, Phone } from 'lucide-react'

export default function Header() {
  const [openService, setOpenService] = useState<string | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHomePage, setIsHomePage] = useState(true)
  const [isDarkBackground, setIsDarkBackground] = useState(true)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    const pathname = window.location.pathname
    setIsHomePage(pathname === '/')
    setIsDarkBackground(['/', '/about'].includes(pathname))

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isHomePage
    ? isScrolled
      ? 'bg-gray-800/50 backdrop-blur-md shadow-md text-white'
      : 'bg-transparent text-white'
    : isDarkBackground
    ? 'text-white'
    : 'text-gray-900'
}`}>
      <div className={`mx-auto transition-all duration-300 ${isScrolled && isHomePage ? 'max-w-7xl rounded-full my-2' : ''}`}>
        <div className="container mx-auto px-6">
          <nav className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image 
                src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=180&h=180&auto=format&fit=crop"
                alt="Scotseal - Crafted to shield, built to last" 
                width={180} 
                height={180}
                className="rounded-full"
              />
            </Link>
            <div className="flex-grow flex justify-center space-x-8">
              <Link href="/" className="nav-item font-bold">Home</Link>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`nav-item inline-flex items-center gap-1 ${isDropdownOpen ? 'nav-item-active' : ''}`}
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
                            className={`w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 flex items-center gap-3 relative z-10 transition-all duration-200 ease-in-out dropdown-item ${
                              openService === service.id ? 'dropdown-item-active' : ''
                            }`}
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
                                  className="block px-3 py-1 text-sm text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-50 dropdown-item"
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
              <Link href="/about" className="nav-item">About</Link>
              <Link href="/contact" className="nav-item">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="tel:01413453993" className="flex items-center nav-item">
                <Phone className="h-5 w-5 mr-2" />
                0141 345 3993
              </Link>
              <Link href="/quote" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Get a quote</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}