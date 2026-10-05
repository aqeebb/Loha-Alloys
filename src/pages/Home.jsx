import { Link } from 'react-router-dom'
import { products } from '../data/products.js'
import PlaceholderImg from "../components/PlaceholderImg";
import OurServices from "../components/OurServices";

const stats = [
  { value: '15+', label: 'Years Of Experience' },
  { value: '120', label: 'Professional Workers' },
  { value: '20+', label: 'Recycle Managements' },
  { value: '1000+', label: 'Satisfied Customers' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero2.mp4"
          poster="/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* Overlay - lightened for video clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/45 to-black/25"></div>

        {/* Blur circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-500/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">

            <span className="inline-block bg-gold/20 border border-gold/40 backdrop-blur-md text-gold px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase">
              Sustainable Metal Recycling
            </span>

            <h1 className="hero-title font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-none text-white mt-4">
              <span>LOHA ALLOYS</span>
            </h1>

            <p className="mt-8 max-w-xl text-base md:text-lg leading-8 text-gray-200">
              Loha Alloys delivers sustainable ferrous and non-ferrous metal recycling
              solutions across the Middle East with quality, reliability and
              environmental responsibility.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5">

              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-gold text-forest-dark font-bold hover:scale-105 hover:bg-yellow-400 transition-all duration-300 shadow-2xl text-center"
              >
                Book Collection
              </Link>

              <Link
                to="/products"
                className="px-8 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 transition-all duration-300 text-center"
              >
                Explore Products
              </Link>

            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-10">
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14m0 0l6-6m-6 6l-6-6"
            />
          </svg>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display font-bold text-3xl text-forest text-center mb-2">
            Our Products
          </h2>
          <p className="text-gray-500 text-center mb-12">
            We deal with all grades of ferrous and non-ferrous metal scrap.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="relative block h-40 rounded-lg overflow-hidden group"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-0 left-0 bg-gold text-forest-dark font-bold uppercase text-sm px-4 py-2">
                  {p.name.replace('Alluminium', 'Aluminium')}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <OurServices />

      {/* Why choose us */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0 items-stretch">
          <div className="bg-forest text-white p-12 flex flex-col justify-center">
            <p className="text-gold font-display italic mb-3">Why Choose us</p>
            <h3 className="font-display font-bold text-3xl mb-6 leading-snug">
              We only Provide Quality Services
            </h3>
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold-dark text-forest-dark font-semibold px-6 py-3 rounded-md w-fit transition-colors"
            >
              Book Now
            </Link>
          </div>

        </div>

        <div className="bg-forest-dark text-white">
          <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display font-extrabold text-4xl text-white">{s.value}</p>
                <p className="text-gold mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl text-forest mb-4">About LOHA ALLOYS</h2>
          <p className="text-gray-600 leading-relaxed">
            Loha Alloys is one of the largest processors of ferrous and non-ferrous metal
            scraps with business operations in the Middle East region. We ensure purity
            and quality across every grade of scrap we process.
          </p>
          <Link to="/about" className="inline-block mt-6 text-olive font-semibold hover:text-forest">
            Learn more about us →
          </Link>
        </div>
      </section>
    </div>
  )
}