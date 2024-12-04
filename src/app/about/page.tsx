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
    <div className="font-sans">
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover md:w-48"
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Building exterior"
                  width={200}
                  height={200}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">About Us</div>
                <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Crafting Excellence Since 2008</h1>
                <p className="mt-4 max-w-2xl text-xl text-gray-500">
                  Scotseal has been at the forefront of home improvement in Scotland, delivering premium windows, doors, and more to create dream homes across the nation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" ref={timelineRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full" style={{ top: `${((activeYear - 2008) / (2024 - 2008)) * 100}%` }}></div>
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-5/12"></div>
                <div className={`w-5/12 p-4 rounded-lg shadow-md ${milestone.year <= activeYear ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  <h3 className="text-lg font-semibold">{milestone.year}: {milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Michael', 'Mark', 'Dylan'].map((name, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={`https://source.unsplash.com/random/400x400?portrait&${index}`}
                  alt={`${name}'s portrait`}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{name}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-blue-600 text-white p-8">
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <p className="mb-4">Fill out the form and we will get back to you within 24 hours.</p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Phone className="mr-4" />
                    <span>0141 345 3993</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-4" />
                    <span>info@scotseal.com</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="mr-4" />
                    <span>123 Main St, Glasgow, G1 1AA</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 md:w-2/3">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}