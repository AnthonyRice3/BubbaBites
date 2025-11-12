import Image from "next/image";

const cookies = [
  {
    id: 1,
    name: "Classic Chocolate Chip",
    description: "Our signature cookie loaded with premium chocolate chips. Perfectly crispy on the edges, soft in the center.",
    image: "/temp1.JPG",
    price: "$2.50"
  },
  {
    id: 2,
    name: "Double Chocolate Fudge",
    description: "Rich cocoa dough packed with dark chocolate chunks. A chocolate lover's dream come true.",
    image: "/temp2.JPG",
    price: "$2.75"
  },
  {
    id: 3,
    name: "White Chocolate Macadamia",
    description: "Buttery cookies with creamy white chocolate chips and crunchy macadamia nuts.",
    image: "/temp3.JPG",
    price: "$3.00"
  },
  {
    id: 4,
    name: "Peanut Butter Delight",
    description: "Creamy peanut butter cookies with a melt-in-your-mouth texture and rich flavor.",
    image: "/temp4.JPG",
    price: "$2.50"
  },
  {
    id: 5,
    name: "Oatmeal Raisin",
    description: "Wholesome oats, plump raisins, and warm cinnamon create this timeless classic.",
    image: "/temp1.JPG",
    price: "$2.50"
  },
  {
    id: 6,
    name: "Snickerdoodle",
    description: "Soft and chewy with a perfect cinnamon-sugar coating. A nostalgic favorite.",
    image: "/temp2.JPG",
    price: "$2.50"
  },
  {
    id: 7,
    name: "Red Velvet",
    description: "Velvety smooth with cream cheese chips and a hint of cocoa. Decadent and luxurious.",
    image: "/temp3.JPG",
    price: "$3.00"
  },
  {
    id: 8,
    name: "Salted Caramel",
    description: "Sweet and salty perfection with gooey caramel chunks and flaky sea salt.",
    image: "/temp4.JPG",
    price: "$3.00"
  },
  {
    id: 9,
    name: "Lemon Sugar",
    description: "Bright and zesty with a sweet sugar coating. Refreshingly tangy and delicious.",
    image: "/temp1.JPG",
    price: "$2.75"
  },
  {
    id: 10,
    name: "Mint Chocolate",
    description: "Cool mint flavor combined with dark chocolate chips. A refreshing twist on a classic.",
    image: "/temp2.JPG",
    price: "$2.75"
  },
  {
    id: 11,
    name: "Cookies & Cream",
    description: "Vanilla cookies studded with crushed Oreo pieces. Crunchy, creamy, and irresistible.",
    image: "/temp3.JPG",
    price: "$3.00"
  },
  {
    id: 12,
    name: "Butterscotch Toffee",
    description: "Rich butterscotch chips and buttery toffee bits create an indulgent treat.",
    image: "/temp4.JPG",
    price: "$2.75"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-pink-50 to-pink-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-pink-400">🍪 Bubba Bites</h2>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-400 transition-colors font-medium">Home</a>
              <a href="#flavors" className="text-gray-700 hover:text-pink-400 transition-colors font-medium">Flavors</a>
              <a href="/About" className="text-gray-700 hover:text-pink-400 transition-colors font-medium">About</a>
              <a href="/About#contact" className="text-gray-700 hover:text-pink-400 transition-colors font-medium">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-pink-400 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-pink-500 transition-all cursor-pointer">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-linear-to-r from-pink-200 via-pink-300 to-pink-200 text-white" id="home">
        <div className="absolute inset-0 bg-[url('/temp1.JPG')] opacity-10 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in drop-shadow-lg">
            Bubba Bites
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Handcrafted cookies made with love, premium ingredients, and a whole lot of flavor
          </p>
          <button className="bg-white text-pink-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-all transform hover:scale-105 shadow-lg cursor-pointer">
            Order Now
          </button>
          
          {/* Social Media Links */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <a href="#" className="text-white hover:text-pink-100 transition-all transform hover:scale-110" aria-label="TikTok">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-pink-100 transition-all transform hover:scale-110" aria-label="Instagram">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-pink-100 transition-all transform hover:scale-110" aria-label="YouTube">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 animate-fade-in-up animate-delay-100">
            <div className="text-5xl mb-4">🍪</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh Daily</h3>
            <p className="text-gray-600">Baked fresh every morning with premium ingredients</p>
          </div>
          <div className="p-6 animate-fade-in-up animate-delay-200">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">12 Flavors</h3>
            <p className="text-gray-600">Something delicious for every taste and occasion</p>
          </div>
          <div className="p-6 animate-fade-in-up animate-delay-300">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Made with Love</h3>
            <p className="text-gray-600">Every cookie is crafted with care and passion</p>
          </div>
        </div>
      </section>

      {/* Cookies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="flavors">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">
          Our Cookie Collection
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cookies.map((cookie, index) => (
            <div
              key={cookie.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover-float animate-scale-in animate-delay-${Math.min((index % 6) + 1, 6) * 100}`}
            >
              <div className="relative h-64 w-full bg-gray-200 overflow-hidden group">
                <Image
                  src={cookie.image}
                  alt={cookie.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{cookie.name}</h3>
                  <span className="text-pink-300 font-bold text-lg">{cookie.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {cookie.description}
                </p>
                <button className="w-full bg-linear-to-r from-pink-500 to-pink-300 text-white py-2 px-4 rounded-lg font-semibold hover:from-pink-600 hover:to-pink-300 transition-all transform hover:scale-105 cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-linear-to-r from-pink-300 to-pink-200 text-white py-20 animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up animate-delay-100">
            Ready to Treat Yourself?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up animate-delay-200">
            Order a dozen (or two!) and experience cookie perfection delivered to your door
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <button className="bg-white text-pink-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl cursor-pointer">
              Order Online
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-300 transition-all transform hover:scale-105 cursor-pointer">
              Visit Our Store
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Bubba Bites</h3>
          <p className="text-gray-400 mb-6">
            The sweetest cookies in town
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-pink-300 transition-colors">Contact</a>
            <a href="#" className="hover:text-pink-300 transition-colors">About</a>
            <a href="#" className="hover:text-pink-300 transition-colors">FAQ</a>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © 2025 Bubba Bites. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
