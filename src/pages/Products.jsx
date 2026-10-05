import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { products } from '../data/products.js'
import PlaceholderImg from "../components/PlaceholderImg";

export default function Products() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const active = products.find((p) => p.slug === slug) || products[0]

  const [openGrade, setOpenGrade] = useState(active.grades[0].name)

  // Reference to the product details section
  const detailsRef = useRef(null)

  // Scroll to product details after clicking a product
  useEffect(() => {
    if (location.state?.scrollToDetails && detailsRef.current) {
      // Small delay allows the new route/content to render first
      const timer = setTimeout(() => {
        detailsRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })

        // Remove the navigation state so refresh doesn't scroll again
        window.history.replaceState({}, document.title)
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [slug, location.state])

  return (
    <div>
      {/* Header */}
      <section className="bg-forest text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-display font-bold text-4xl">
            Products
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-[280px_1fr] gap-8">

        {/* Sidebar */}
        <div className="flex flex-col gap-3 h-fit">
          {products.map((p) => {
            const isActive = p.slug === active.slug

            return (
              <button
                key={p.slug}
                onClick={() => {
                  setOpenGrade(p.grades[0].name)

                  navigate(`/products/${p.slug}`, {
                    state: {
                      scrollToDetails: true,
                    },
                  })
                }}
                className={`flex items-center justify-between px-5 py-4 rounded-md font-semibold text-left transition-colors ${
                  isActive
                    ? 'bg-gold text-forest-dark'
                    : 'bg-forest-light text-gray-700 hover:bg-gold/30'
                }`}
              >
                {p.name}
                <span>→</span>
              </button>
            )
          })}

          <div className="bg-forest rounded-md p-6 mt-4 text-center text-white">
            <p className="text-gold font-display font-semibold mb-2">
              Need help?
            </p>

            <p className="mb-2">
              Talk to an expert
            </p>

            <p className="font-bold text-lg">
              +974 5545 5930
            </p>
          </div>
        </div>

        {/* Detail */}
        <div
          ref={detailsRef}
          className="scroll-mt-24"
        >

          {/* Product Information */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">

            {active.image ? (
              <img
                src={active.image}
                alt={active.name}
                className="h-72 w-full object-cover rounded-xl"
              />
            ) : (
              <PlaceholderImg
                label={active.name}
                gradient={active.thumbColor}
                className="h-72 rounded-xl"
              />
            )}

            <div>
              <h2 className="font-display font-bold text-3xl text-forest mb-4">
                {active.name.replace('Alluminium', 'Aluminium')}
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {active.description}
              </p>
            </div>
          </div>

          {/* Grades accordion */}
          <div className="border rounded-md divide-y">

            {active.grades.map((grade) => {
              const isOpen = openGrade === grade.name

              return (
                <div key={grade.name}>

                  <button
                    onClick={() =>
                      setOpenGrade(
                        isOpen ? null : grade.name
                      )
                    }
                    className={`w-full flex items-center justify-between px-6 py-4 text-left font-semibold ${
                      isOpen
                        ? 'text-olive'
                        : 'text-forest'
                    }`}
                  >
                    {grade.name}

                    <span
                      className={`transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      ⌄
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 grid grid-cols-2 sm:grid-cols-3 gap-4">

                      {grade.images && grade.images.length > 0 ? (
                        grade.images.map((img, i) => (
                          <div
                            key={i}
                            className="aspect-square w-full overflow-hidden rounded-md bg-gray-100"
                          >
                            <img
                              src={img}
                              alt={`${grade.name} photo ${i + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ))
                      ) : (
                        [1, 2, 3].map((i) => (
                          <PlaceholderImg
                            key={i}
                            label="Grade photo"
                            gradient={active.thumbColor}
                            className="aspect-square rounded-md text-xs"
                          />
                        ))
                      )}

                    </div>
                  )}

                </div>
              )
            })}

          </div>
        </div>

      </section>
    </div>
  )
}