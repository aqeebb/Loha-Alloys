import { useState } from "react";

// ⚠️ Replace with your client's real inbox if the address below isn't exact.
const CLIENT_EMAIL = "shariq4328@gmail.com";

// Manager's number, used for Call Now / WhatsApp. Update if this changes.
const MANAGER_PHONE_DISPLAY = "+974 55455930";
const MANAGER_PHONE_DIGITS = MANAGER_PHONE_DISPLAY.replace(/[^\d]/g, ""); // wa.me needs digits only, no + or spaces

// Engineer's number — placeholder, swap in the real one.
const ENGINEER_PHONE_DISPLAY = "+974 0000 0000";
const ENGINEER_PHONE_DIGITS = ENGINEER_PHONE_DISPLAY.replace(/[^\d]/g, "");

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New Enquiry from ${form.name || "Website Visitor"}`;

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "-"}`,
      `Company: ${form.company || "-"}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    // Opens Gmail's compose window directly (works when the visitor is
    // signed into Gmail in their browser). Falls back gracefully to the
    // default mail app if Gmail isn't available, since it's a normal link.
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      CLIENT_EMAIL
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
    setSent(true);
  };

  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section
        className="relative flex h-[45vh] items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/contactus.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-gold/20 blur-[140px]"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-forest/30 blur-[140px]"></div>

        <div className="relative z-10 max-w-6xl px-6 text-center">
          <span className="rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-gold">
            CONTACT US
          </span>
          <h1 className="mt-8 font-display text-5xl font-bold text-white md:text-7xl">
            Let's Build Together
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Connect with LOHA ALLOYS TRADING AND CONTRACTING for premium ferrous and non-ferrous metal
            recycling solutions across Qatar and Bahrain.
          </p>
        </div>
      </section>

      {/* ================= CONTACT (split layout) ================= */}
      <section className="bg-[#f8faf9] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-start">
          {/* ---------- LEFT: INFO PANEL ---------- */}
          <div className="rounded-[30px] border border-gray-200 bg-white p-10 shadow-xl">
            <div>
              <span className="rounded-full bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                CONTACT
              </span>

              <h2 className="mt-5 font-display text-4xl font-bold text-forest">
                Let's Discuss Your Project
              </h2>

              <p className="mt-4 text-gray-600">
                Reach out for ferrous and non-ferrous metal recycling
                solutions across Qatar and Bahrain.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-forest">
                  Fast Response
                </span>
                <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-forest">
                  Qatar &amp; Bahrain Coverage
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {/* Manager card — replace with real details */}
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-600">
                    Manager
                  </span>
                  <p className="mt-2 font-semibold text-forest">
                    Mohammed Shariq
                  </p>
                  <a
                    href={`tel:+${MANAGER_PHONE_DIGITS}`}
                    className="mt-1 flex items-center gap-2 text-sm font-medium text-gold hover:underline"
                  >
                    📞 {MANAGER_PHONE_DISPLAY}
                  </a>
                </div>

                

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 space-y-2">
                  <a
                    href={`mailto:${CLIENT_EMAIL}`}
                    className="flex items-center gap-2 text-sm font-medium text-forest hover:underline"
                  >
                    ✉️ {CLIENT_EMAIL}
                  </a>
                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    📍 Doha, Qatar
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${MANAGER_PHONE_DIGITS}?text=${encodeURIComponent(
                  "Hello LOHA ALLOYS, I'd like to know more about your products."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-green-700"
              >
                💬 WhatsApp
              </a>
              <a
                href={`tel:+${MANAGER_PHONE_DIGITS}`}
                className="flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-semibold text-forest shadow-sm transition hover:bg-gray-50"
              >
                📞 Call Now
              </a>
            </div>
          </div>

          {/* ---------- RIGHT: FORM ---------- */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gold/20 blur-3xl"></div>

            <div className="relative flex h-full flex-col rounded-[30px] border border-gray-200 bg-white p-10 shadow-2xl">
              <span className="rounded-full bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                SEND ENQUIRY
              </span>

              <h2 className="mt-5 font-display text-4xl font-bold text-forest">
                Get In Touch
              </h2>

              <p className="mt-3 text-gray-600">
                Fill out the form below — it opens Gmail with your details
                ready to send to our team.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 flex-1 space-y-6">
                <div>
                  <label className="mb-2 block font-semibold text-forest">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-forest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@email.com"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-semibold text-forest">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+974..."
                      className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-semibold text-forest">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-forest">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your enquiry..."
                    className="w-full resize-none rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gold px-8 py-4 font-semibold text-forest-dark shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
                >
                  Send Enquiry →
                </button>

                {sent && (
                  <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
                    ✅ Gmail should have opened in a new tab with your message
                    ready — just hit send there.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GOOGLE MAP ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold">
              FIND US
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-forest">
              Visit Our Office
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We proudly serve customers across Qatar and Bahrain with
              reliable recycling and metal trading solutions.
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] shadow-2xl border border-gray-200">
            <iframe
              title="LOHA ALLOYS Location"
              src="https://www.google.com/maps?q=Doha,Qatar&output=embed"
              className="w-full h-[450px]"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
