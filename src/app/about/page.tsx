import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold mb-8">About Scotseal</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000" alt="Scotseal team" width={500} height={300} className="rounded-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2008, Scotseal has been at the forefront of home improvement in Scotland. Our journey began with a simple mission: to provide high-quality windows and doors that not only enhance the beauty of homes but also improve their energy efficiency.
          </p>
          <p className="mb-4">
            Over the years, we've expanded our services to include conservatories, roofing, and specialized coatings, always maintaining our commitment to excellence and customer satisfaction.
          </p>
          <p>
            Today, Scotseal is proud to be one of Scotland's leading home improvement companies, known for our craftsmanship, attention to detail, and dedication to creating homes that are both beautiful and functional.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p>We never compromise on the quality of our products or workmanship. Every project is completed to the highest standards.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p>We stay at the forefront of industry advancements, constantly seeking new ways to improve our products and services.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
            <p>Our customers are at the heart of everything we do. We strive to exceed expectations and build lasting relationships.</p>
          </div>
        </div>
      </div>
    </div>
  )
}