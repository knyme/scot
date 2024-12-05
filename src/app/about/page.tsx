'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

export default function About() {
  const [activeYear, setActiveYear] = useState(2008)
  const timelineRef = useRef<HTMLDivElement>(null)

  const milestones = [
    { year: 2008, title: 'Founded', description: 'Scotseal was established with a vision to provide top-quality windows and doors to Scottish homes.' },
    { year: 2012, title: 'Expansion', description: 'We expanded our product range to include conservatories and roofing solutions.' },
    { year: 2016, title: 'Innovation', description: 'Introduced cutting-edge energy-efficient products, setting new industry standards.' },
    { year: 2020, title: 'Nationwide', description: 'Expanded our services to cover all of Scotland, from the Borders to the Highlands.' },
    { year: 2024, title: 'Future Focus', description: 'Continuing to innovate with smart home integration and sustainable materials.' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { top, height } = timelineRef.current.getBoundingClientRect()
        const scrollPosition = window.innerHeight - top
        const scrollPercentage = Math.min(Math.max(scrollPosition / height, 0), 1)
        const activeIndex = Math.floor(scrollPercentage * milestones.length)
        setActiveYear(milestones[activeIndex]?.year || 2008)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="font-sans bg-[#151D2B] text-white">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oliur-POycdKPE8KQ-unsplash.jpg-el6ZLrfC5c529S407Xa0SRoa76LqIL.jpeg"
                  alt="Scotseal office"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
                  <h1 className="text-xl font-bold mb-2">About Scotseal</h1>
                  <p className="text-sm mb-2">Crafting Excellence Since 2008</p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-center">
                      <Phone className="mr-2 h-3 w-3" />
                      <span>0141 345 3993</span>
                    </li>
                    <li className="flex items-center">
                      <Mail className="mr-2 h-3 w-3" />
                      <span>info@scotseal.co.uk</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="mr-2 h-3 w-3" />
                      <span>123 Main St, Glasgow, G1 1AA</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Scotseal has been at the forefront of home improvement in Scotland, delivering premium windows, doors, and more to create dream homes across the nation.
                </p>
                <p className="text-gray-600 mb-4">
                  Since our founding in 2008, we've been committed to providing top-quality products and exceptional service to our customers. Our journey has been marked by continuous innovation, expansion, and a dedication to craftsmanship.
                </p>
                <p className="text-gray-600 mb-4">
                  Today, we're proud to serve homeowners throughout Scotland, offering a wide range of energy-efficient and stylish home improvement solutions.
                </p>
                <Link href="/contact" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors mt-4">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" ref={timelineRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 h-full transition-all duration-500 ease-in-out" 
              style={{ height: `${((activeYear - 2008) / (2024 - 2008)) * 100}%` }}
            ></div>
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-300 rounded-full transition-all duration-500 ease-in-out" 
              style={{ top: `${((activeYear - 2008) / (2024 - 2008)) * 100}%` }}
            ></div>
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-5/12"></div>
                <div className="w-5/12">
                  <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">{milestone.year}: {milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E293B] py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Michael', 'Mark', 'Dylan'].map((name, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oliur-POycdKPE8KQ-unsplash.jpg-el6ZLrfC5c529S407Xa0SRoa76LqIL.jpeg`}
                  alt={`${name}'s portrait`}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}