import { Link } from 'react-router-dom'
import { products } from '../data/products.js'

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3 relative z-10">
        <div>
          <h4 className="text-white font-display font-semibold text-lg mb-4">About</h4>
          <p className="leading-relaxed">
            Loha Alloy is one of the largest Processor of ferrous and non-ferrous metal
            scraps with business operations in middle east region.
          </p>
          <div className="flex gap-3 mt-6">
            {['twitter', 'facebook', 'instagram'].map((s) => (
              <span
                key={s}
                className="w-10 h-10 rounded-full bg-olive/70 flex items-center justify-center text-white text-xs uppercase"
              >
                {s[0]}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold text-lg mb-4">Products</h4>
          <ul className="space-y-2">
            {products.map((p) => (
              <li key={p.slug}>
                <Link to={`/products/${p.slug}`} className="hover:text-gold transition-colors">
                  {p.name.replace('Alluminium', 'Aluminium')}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold text-lg mb-4">Contact</h4>
          <p className="mb-3">Qatar : +974 5545 5930</p>
          
          <p className="mb-1">info@lohaalloys.com</p>
          <p className="mb-4">shariq4328@gmail.com</p>
          <p className="leading-relaxed">
            Loha Alloy Trading and Contracting <br></br>
            GOLDEN TOWER, 882 St., Zone 26, Bldg.no 2, floor 3, office no. 3<br></br>
DOHA, QATAR
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm relative z-10">
        © {new Date().getFullYear()} Green World. All rights reserved.
      </div>
    </footer>
  )
}
