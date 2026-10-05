import { useState } from "react";
import { FaWhatsapp, FaTimes, FaCommentDots } from "react-icons/fa";

const contacts = [
    {
        country: "🇶🇦 Qatar",
        name: "Mohammed Shariq",
        role: "Manager",
        number: "+974 55455930",
    },
];

export default function WhatsAppWidget() {
    const [open, setOpen] = useState(false);

    const message =
        "Hello LOHA ALLOYS, I would like to know more about your products.";

    return (
        <>
            {/* Floating Button */}

            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-6 z-[9999] h-16 w-16 rounded-full bg-[#25D366] shadow-2xl flex items-center justify-center text-white text-3xl hover:scale-110 transition"
            >
                {open ? <FaTimes /> : <FaWhatsapp />}
            </button>

            {/* Widget */}

            <div
                className={`fixed bottom-28 right-6 z-[9999] w-[360px] max-w-[calc(100vw-30px)] overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,.25)] transition-all duration-300 ${open
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-8 opacity-0"
                    }`}
            >
                {/* Header */}

                <div className="relative bg-forest px-6 py-5 text-white">

                    <h2 className="text-2xl font-bold">
                        LOHA ALLOYS
                    </h2>

                    <p className="mt-1 flex items-center gap-2 text-sm text-white/80">
                        <span className="h-2 w-2 rounded-full bg-green-400"></span>
                        Typically replies instantly
                    </p>

                    <button
                        onClick={() => setOpen(false)}
                        className="absolute right-5 top-5 text-white/90 hover:text-white"
                        aria-label="Close"
                    >
                        <FaTimes size={18} />
                    </button>

                </div>

                {/* Welcome */}

                <div className="px-6 py-5">

                    <h3 className="text-lg leading-snug text-gray-900">
                        👋 Hello! Welcome to{" "}
                        <span className="font-bold">LOHA ALLOYS</span>.
                    </h3>

                    <p className="mt-2 text-gray-500">
                        Choose an agent to chat:
                    </p>

                </div>

                {/* Contacts */}

                {contacts.map((person) => (

                    <a
                        key={person.name}
                        href={`https://wa.me/${person.number.replace(/\s+/g, "")}?text=${encodeURIComponent(
                            message
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between border-t px-6 py-5 hover:bg-green-50 transition"
                    >

                        <div className="flex items-center gap-4">

                            <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                                👨‍💼
                            </div>

                            <div>

                                <h4 className="font-bold text-lg text-gray-900">
                                    {person.name}
                                </h4>

                                <p className="text-gray-500">
                                    {person.role}
                                </p>

                                <p className="mt-1 flex items-center gap-1.5 text-sm text-green-600">
                                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                    Online
                                </p>

                            </div>

                        </div>

                        <div className="h-11 w-11 shrink-0 rounded-full bg-[#25D366] flex items-center justify-center text-white text-xl">
                            <FaCommentDots />
                        </div>

                    </a>

                ))}

                <div className="py-4 text-center text-xs text-gray-400">
                    Powered by WhatsApp Business
                </div>

            </div>
        </>
    );
}
