'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import Image from 'next/image'

export default function Contact() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "Scotseal is the real deal. We've worked with dozens of contractors that simply don't deliver. Working with experienced and knowledgeable professionals at the helm is a breath of fresh air.",
      author: "Emma Thompson",
      role: "Head of Property, Glasgow Estates"
    },
    {
      text: "The attention to detail and quality of work from Scotseal is outstanding. They transformed our property with new windows and doors, exceeding our expectations.",
      author: "James MacKenzie",
      role: "Homeowner, Edinburgh"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row">
            {/* Form Section */}
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-2">We'd love to help</h2>
              <p className="text-gray-600 mb-6">
                We're a full service agency with experts ready to help. We'll get in touch within 24 hours.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                    <input type="text" id="firstName" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                    <input type="text" id="lastName" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                  <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Send message
                </button>
                <p className="text-xs text-gray-500">
                  By sending this message, you agree to our friendly privacy policy.
                </p>
              </form>
            </div>

            {/* Image/Testimonial Section */}
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-90"></div>
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="Modern office interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end p-8">
                <div className="text-white">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-4">{testimonials[currentTestimonial].text}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonials[currentTestimonial].author}</p>
                      <p className="text-sm opacity-80">{testimonials[currentTestimonial].role}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        ←
                      </button>
                      <button
                        onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}