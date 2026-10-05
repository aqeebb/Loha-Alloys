import { HardHat, Recycle, Globe2 } from "lucide-react";

const services = [
    {
        icon: HardHat,
        title: "Dismantling / Demolition",
        description:
            "Efficient and safe dismantling and demolition services for any structure. Our experienced team ensures a smooth and successful project.",
        image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    },
    {
        icon: Recycle,
        title: "Recycling",
        description:
            "Sustainable recycling solutions that reduce waste and promote a cleaner environment. We're committed to responsible and eco-friendly practices.",
        image:
            "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=800&auto=format&fit=crop",
    },
    {
        icon: Globe2,
        title: "Trading",
        description:
            "We trade in non-ferrous and ferrous scrap. CRGO (Cold Rolled Grain Oriented) steel is ideal for transformers due to its high magnetic permeability and low core loss properties.",
        image: null, // keeps the globe-icon look from the reference instead of a photo
    },
];

export default function OurServices() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="font-display font-bold text-3xl text-forest text-center mb-2">
                    Our Services
                </h2>
                <p className="text-gray-500 text-center mb-12">
                    What we do, from teardown to trade.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map(({ icon: Icon, title, description, image }) => (
                        <div
                            key={title}
                            className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100"
                        >
                            {/* Media */}
                            <div className="relative h-48 w-full overflow-hidden bg-forest-dark flex items-center justify-center">
                                {image ? (
                                    <img
                                        src={image}
                                        alt={title}
                                        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <Globe2
                                        className="w-20 h-20 text-gold opacity-90"
                                        strokeWidth={1.25}
                                    />
                                )}
                                <span className="absolute bottom-3 left-3 h-9 w-9 rounded-full bg-gold flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-forest-dark" strokeWidth={2} />
                                </span>
                            </div>

                            {/* Text */}
                            <div className="p-6">
                                <h3 className="font-display font-semibold text-lg text-forest mb-2">
                                    {title}
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-600">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
