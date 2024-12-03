export default function Quote() {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold mb-8">Get a Quote</h1>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <form action="https://formsubmit.co/kendidly@gmail.com" method="POST" className="space-y-4">
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
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
              Get a Quote
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            By providing your details you agree to being contacted and your data being processed under the terms of our <a href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</a>.
          </p>
        </div>
      </div>
    </div>
  )
}