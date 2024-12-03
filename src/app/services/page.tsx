import Link from 'next/link'
import { LayoutGrid, DoorOpen, Home, Construction, Paintbrush } from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 'windows',
      icon: LayoutGrid,
      title: 'Windows',
      description: 'Energy-efficient windows tailored to your home\'s style and needs.',
      children: ['Casement', 'Tilt and turn', 'Sash']
    },
    {
      id: 'doors',
      icon: DoorOpen,
      title: 'Doors',
      description: 'Secure and stylish entrance solutions that make a lasting impression.',
      children: ['uPvc', 'Composite', 'French/Patio', 'Bifolds']
    },
    {
      id: 'conservatories',
      icon: Home,
      title: 'Conservatories',
      description: 'Expand your living space with our beautiful, custom-designed conservatories.',
      children: []
    },
    {
      id: 'roofs',
      icon: Construction,
      title: 'Roofs',
      description: 'Durable and weather-resistant roofing solutions for your home.',
      children: []
    },
    {
      id: 'roughcasting',
      icon: Construction,
      title: 'Rough casting',
      description: 'Enhance your home\'s exterior with our professional rough casting services.',
      children: []
    },
    {
      id: 'coatings',
      icon: Paintbrush,
      title: 'Coatings',
      description: 'Protect and beautify your home with our high-quality coating solutions.',
      children: []
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {service.children.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Types:</h3>
                  <ul className="list-disc list-inside">
                    {service.children.map((child) => (
                      <li key={child}>{child}</li>
                    ))}
                  </ul>
                </div>
              )}
              <Link href={`/services/${service.id}`} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}