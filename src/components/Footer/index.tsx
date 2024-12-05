import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Scotseal</h3>
            <p className="text-sm">Crafted to shield, built to last. Providing premium home improvements across Scotland since 2008.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm mb-2">123 Main St, Glasgow, G1 1AA</p>
            <p className="text-sm mb-2">Phone: 0141 345 3993</p>
            <p className="text-sm">Email: info@scotseal.co.uk</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-400 transition-colors"><Facebook className="w-6 h-6" /></Link>
              <Link href="#" className="hover:text-blue-400 transition-colors"><Twitter className="w-6 h-6" /></Link>
              <Link href="#" className="hover:text-blue-400 transition-colors"><Instagram className="w-6 h-6" /></Link>
              <Link href="#" className="hover:text-blue-400 transition-colors"><Linkedin className="w-6 h-6" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Scotseal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}