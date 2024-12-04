import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="font-sans">
      <section id="home" className="relative min-h-screen flex items-center bg-cover bg-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oliur-POycdKPE8KQ-unsplash.jpg-el6ZLrfC5c529S407Xa0SRoa76LqIL.jpeg"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
          <div className="text-white md:w-1/2 mb-8 md:mb-0">
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
                  {/* Form fields */}
                </form>
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

      {/* Add other sections here */}

    </div>
  )
}