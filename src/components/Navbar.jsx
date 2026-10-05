import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-black/45 backdrop-blur-2xl border-b border-white/10 shadow-xl"
          : "bg-black/15 backdrop-blur-md"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between h-20">

            {/* Logo */}

            <NavLink to="/" className="flex items-center gap-4">

              <img
                src="/logoo.png"
                alt="Green World Logo"
                className="h-14 md:h-16 w-auto object-contain"
              />



            </NavLink>

            {/* Desktop */}

            <nav className="hidden lg:flex items-center gap-10">

              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `group relative font-medium tracking-wide transition duration-300 ${isActive ? "text-gold" : "text-white hover:text-gold"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}

                      <span
                        className={`absolute left-0 -bottom-2 h-[2px] bg-gold transition-all duration-300 ${isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                          }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                Send Enquiry
              </NavLink>

            </nav>

            {/* Mobile Button */}

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M18 6L6 18"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

          </div>

        </div>

        {/* Mobile Menu */}

        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${open ? "max-h-96" : "max-h-0"
            }`}
        >
          <div className="mx-5 mb-5 rounded-3xl border border-white/10 bg-black/70 backdrop-blur-2xl p-6">

            <nav className="flex flex-col gap-5">

              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 transition ${isActive
                      ? "bg-gold text-forest font-semibold"
                      : "text-white hover:bg-white/10"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

            </nav>

          </div>
        </div>
      </header>

      {/* Spacer */}

    </>
  );
}