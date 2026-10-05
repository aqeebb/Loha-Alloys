import PlaceholderImg from "../components/PlaceholderImg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function About() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "120+", label: "Professional Workers" },
    { value: "20+", label: "Recycling Solutions" },
    { value: "1000+", label: "Satisfied Customers" },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="overflow-hidden bg-white">

      {/* ================= HERO ================= */}
      <section
        className="relative mt-20 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/about.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-36 text-center">



          <h1 className="mt-4 text-5xl md:text-7xl font-display font-extrabold text-white">
            About <span className="text-gold">LOHA ALLOYS</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200 leading-8">
            Delivering premium ferrous and non-ferrous metal recycling solutions
            with advanced technology, uncompromising quality, and a commitment to
            building a sustainable future.
          </p>

        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="relative py-24">
        <div className="absolute top-10 left-10 h-52 w-52 rounded-full bg-forest-light blur-3xl opacity-60"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div className="group">
            <div className="overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group-hover:-translate-y-3">

              <img
                src="/Scarap.jpg"
                alt="LOHA ALLOYS Facility"
                className="h-[450px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

            </div>
          </div>

          {/* Content */}
          <div>

            <span className="text-gold uppercase tracking-[0.25em] text-sm font-semibold">
              WHO WE ARE
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-forest leading-tight">
              Transforming Scrap Into Sustainable Value
            </h2>

            <div className="mt-6 h-1 w-24 bg-gold rounded-full"></div>

            <p className="mt-8 text-gray-600 leading-8">
              Loha Alloy Trading and Contracting is one of the region's trusted processors of
              ferrous and non-ferrous metal scrap. We specialise in
              collecting, sorting, processing and supplying premium quality
              recycled metals to industries across the Middle East.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Using advanced recycling technology and strict quality control,
              we ensure every shipment meets international standards while
              reducing environmental impact and promoting sustainable
              industrial growth.
            </p>

            {/* Cards */}
            <div className="mt-10 grid sm:grid-cols-2 gap-6">

              <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-3xl mb-3">🎯</div>

                <h3 className="font-display text-xl font-bold text-forest">
                  Our Mission
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-7">
                  To provide sustainable recycling solutions while
                  delivering premium quality metal products with
                  integrity and reliability.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-3xl mb-3">🌍</div>

                <h3 className="font-display text-xl font-bold text-forest">
                  Our Vision
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-7">
                  To become a leading recycling company recognised for
                  innovation, sustainability and customer satisfaction.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section ref={ref} className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

            {[
              { value: 15, suffix: "+", label: "Years Experience" },
              { value: 120, suffix: "+", label: "Professional Workers" },
              { value: 20, suffix: "+", label: "Recycling Solutions" },
              { value: 1000, suffix: "+", label: "Satisfied Customers" },
            ].map((item, index) => (

              <div
                key={item.label}
                className={`group transition-all duration-300 hover:-translate-y-2 ${index !== 3 ? "lg:border-r lg:border-gray-200" : ""
                  }`}
              >

                <h2 className="text-4xl md:text-5xl font-display font-extrabold text-gold">
                  {inView && (
                    <CountUp
                      end={item.value}
                      duration={2.5}
                      suffix={item.suffix}
                    />
                  )}
                </h2>

                <div className="mx-auto mt-4 mb-4 h-1 w-12 rounded-full bg-gold transition-all duration-300 group-hover:w-20"></div>

                <p className="text-gray-600 text-sm md:text-base font-medium">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="py-24 bg-forest-light">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-gold uppercase tracking-[0.25em] text-sm font-semibold">
              WHY CHOOSE US
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-forest">
              Excellence In Every Process
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              We combine modern recycling technology, experienced professionals,
              and strict quality control to deliver reliable recycling solutions.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: "♻️",
                title: "Eco-Friendly Recycling",
                image: "/eco.jpg",
                desc: "Responsible recycling practices that help protect the environment.",
              },
              {
                icon: "🏭",
                title: "Advanced Processing",
                image: "/advance.jpeg",
                desc: "Modern machinery ensures maximum recovery and superior quality.",
              },
              {
                icon: "⭐",
                title: "Premium Quality",
                image: "/premium.avif",
                desc: "Strict inspection procedures guarantee consistent material standards.",
              },
              {
                icon: "🚚",
                title: "Fast Logistics",
                image: "/fast.jpg",
                desc: "Reliable collection and delivery services with timely execution.",
              },
              {
                icon: "🤝",
                title: "Trusted Partnership",
                image: "/trust.avif",
                desc: "Long-term relationships built on transparency and professionalism.",
              },
              {
                icon: "🌍",
                title: "Global Standards",
                image: "/global.jpeg",
                desc: "Delivering products that meet international industry requirements.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative h-[340px] overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
                  <div className="mb-4 text-4xl">{item.icon}</div>

                  <h3 className="text-2xl font-display font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-white/90 leading-7">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


    </div>
  );
}