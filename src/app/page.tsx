'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Shield, Zap, ThumbsUp, Sparkles, Users } from 'lucide-react'
import EligibilityCheck from '@/components/EligibilityCheck'

export default function Homepage() {
  const [showEligibilityCheck, setShowEligibilityCheck] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)

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

  return (
    <div className="font-sans">
      <section id="home" className="relative min-h-screen flex items-center bg-cover bg-center pt-24 md:pt-32">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oliur-POycdKPE8KQ-unsplash.jpg-el6ZLrfC5c529S407Xa0SRoa76LqIL.jpeg"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center">
          <div className="text-white lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Transform Your Home with Excellence</h1>
            <p className="text-xl mb-8 opacity-90">Premium windows, doors, and home improvements. Creating dream homes across Scotland since 2008.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#quote" className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="#portfolio" className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                View Our Work
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 w-full max-w-lg mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden flex h-[600px]">
              <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                {showEligibilityCheck ? (
                  <EligibilityCheck onBack={() => setShowEligibilityCheck(false)} />
                ) : (
                  <>
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <h2 className="text-2xl font-bold text-gray-800">Get a price</h2>
                        <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          <Star className="w-4 h-4 mr-1" />
                          Rated 4.9/5
                        </div>
                      </div>
                      <button
                        onClick={() => setShowEligibilityCheck(true)}
                        className="w-full bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                      >
                        Check if you qualify for government backed grants
                      </button>
                    </div>
                    <form action="https://formsubmit.co/info@scotseal.co.uk" method="POST" className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
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
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                        Get in touch
                      </button>
                    </form>
                    <p className="mt-4 text-sm text-gray-600">
                      By providing your details you agree to being contacted and your data being processed under the terms of our <a href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</a>.
                    </p>
                  </>
                )}
              </div>
              <div className="hidden md:block w-1/2 relative">
                <Image
                  src="https://images.unsplash.com/photo-1653749576880-7d7caa5ecb62?q=80&w=3687&auto=format&fit=crop"
                  alt="Modern home interior"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="rounded-3xl overflow-hidden" style={{
          backgroundImage: `url(${products[activeProduct].background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="py-16 px-8">
            <div className="flex justify-between items-center">
              <div className="max-w-xl">
                <h2 className="text-6xl font-bold leading-tight mb-6 text-white">
                  SCOTTISH
                  <br />
                  CRAFTSMANSHIP
                  <br />
                  EXCELLENCE
                </h2>
                <p className="text-white text-lg mb-8">
                  {products[activeProduct].description}
                </p>
                <Link
                  href="#products"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  SEE PRODUCTS
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex flex-col gap-4">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className={`w-72 rounded-2xl p-4 cursor-pointer transition-transform hover:scale-105 ${
                      index === activeProduct ? 'bg-blue-600/80' : 'bg-blue-800/80'
                    }`}
                    onClick={() => setActiveProduct(index)}
                  >
                    <div className="flex items-start gap-4">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={80}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                      <div className="text-white">
                        <p className="text-sm">{product.category}</p>
                        <h3 className="font-bold">{product.title}</h3>
                        <button className="text-sm underline">
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 border-t border-white/20 pt-8">
              <div className="flex justify-between items-center">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <feature.icon className="w-5 h-5 text-white" />
                    <span className="text-sm font-medium text-white">{feature.text}</span>
                  </div>
                ))}
              </div>
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
  </div>
  )
}


'typescriptreact type="react" project="Scotseal" file="src/components/EligibilityCheck/index.tsx"
'use client'

import { useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'

interface EligibilityCheckProps {
  onBack: () => void;
}

export default function EligibilityCheck({ onBack }: EligibilityCheckProps) {
  const [step, setStep] = useState(0)
  const [postcode, setPostcode] = useState<string>('')
  const [isHomeowner, setIsHomeowner] = useState<boolean | null>(null)
  const [oldestWindowsAge, setOldestWindowsAge] = useState(1)
  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', { postcode, isHomeowner, oldestWindowsAge, fullName, email, phone })
      setStep(4) // Move to the final step
    }
  }

  return (
    <div className="h-full flex flex-col">
      <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
        {step === 0 && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Check Eligibility</h2>
              <button
                type="button"
                onClick={onBack}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="mb-4">
              <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">Enter postcode</label>
              <input
                type="text"
                id="postcode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-4">Step 1</h2>
            <div className="mb-4">
              <p className="mb-2">Are you a homeowner?</p>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setIsHomeowner(true)}
                  className={`px-4 py-2 rounded-md ${isHomeowner === true ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setIsHomeowner(false)}
                  className={`px-4 py-2 rounded-md ${isHomeowner === false ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                >
                  No
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="windowsAge" className="block text-sm font-medium text-gray-700 mb-1">
                How old are your oldest windows or doors in your home?
              </label>
              <input
                type="range"
                id="windowsAge"
                min="1"
                max="5"
                value={oldestWindowsAge}
                onChange={(e) => setOldestWindowsAge(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>1 year</span>
                <span>2 years</span>
                <span>3 years</span>
                <span>4 years</span>
                <span>5+ years</span>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold mb-4">Step 2</h2>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
              <input
                type="text"
                id="postcode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Congratulations! You qualify!</h2>
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
              <p className="font-bold">What happens next?</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Register your interest with one of our specialists</li>
                <li>Expect a call within 48 hours</li>
                <li>Schedule a free survey</li>
                <li>Choose your styles and colours</li>
                <li>Enjoy your new, updated home!</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600">
              Note: There are limited spaces for the scheme, so please ensure you register your interest promptly.
            </p>
          </div>
        )}

        {step < 3 && (
          <div className="mt-auto pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              {step === 2 ? 'Check if you qualify' : 'Next'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </form>
    </div>
  )
}