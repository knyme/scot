'use client'

import { useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'

interface EligibilityCheckProps {
  onBack: () => void;
}

export default function EligibilityCheck({ onBack }: EligibilityCheckProps) {
  const [step, setStep] = useState(0)
  const [postcode, setPostcode] = useState('')
  const [isHomeowner, setIsHomeowner] = useState<boolean | null>(null)
  const [oldestWindowsAge, setOldestWindowsAge] = useState(1)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

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
      <div className="bg-white rounded-lg">
        <form onSubmit={handleSubmit}>
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
              <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                {step === 2 ? 'Check if you qualify' : 'Next'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
          )}
        </form>
      </div>
  )
}