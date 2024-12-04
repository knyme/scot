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
```[v0-no-op-code-block-prefix]

Now, let's update the background colors for the other pages to ensure proper contrast with the header text:

```typescriptreact type="react" project="Scotseal" file="src/app/about/page.tsx"
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Shield, Award, Users, Clock, ChevronRight } from 'lucide-react'

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black"> {/* Updated background color */}
        <Image
          src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
          alt="Modern building facade"
          fill
          className="object-cover opacity-50"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Since 2008, we've been transforming homes across Scotland with 
            exceptional craftsmanship and unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years Experience", icon: Clock },
              { number: "5000+", label: "Projects Completed", icon: Shield },
              { number: "98%", label: "Customer Satisfaction", icon: Users },
              { number: "25+", label: "Industry Awards", icon: Award },
            ].map((stat, index) => (
              <div key={index} className="fade-in text-center p-6 rounded-lg bg-gray-50 transform hover:scale-105 transition-transform duration-300">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="space-y-12">
              {[
                {
                  year: "2008",
                  title: "The Beginning",
                  description: "Founded with a vision to revolutionize home improvements in Scotland.",
                  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd"
                },
                {
                  year: "2013",
                  title: "Expansion",
                  description: "Expanded our services to include conservatories and specialized coatings.",
                  image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                },
                {
                  year: "2018",
                  title: "Innovation",
                  description: "Introduced cutting-edge energy-efficient solutions and smart home integration.",
                  image: "https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b"
                }
              ].map((milestone, index) => (
                <div key={index} className="fade-in flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2">
                    <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="bg-blue-600 text-white inline-block px-4 py-1 rounded-full mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{milestone.title}</h3>
                    <p className="text-gray-600 mb-4">{milestone.description}</p>
                    <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                      Learn more <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "David Campbell",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
              },
              {
                name: "Sarah MacLeod",
                role: "Head of Operations",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
              },
              {
                name: "James Stewart",
                role: "Technical Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              }
            ].map((member, index) => (
              <div key={index} className="fade-in">
                <div className="relative h-96 rounded-2xl overflow-hidden mb-4 group">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h4 className="text-xl font-bold">{member.name}</h4>
                      <p>{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}