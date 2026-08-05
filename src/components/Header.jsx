import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary-dark/95 backdrop-blur-sm shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="text-2xl font-bold text-accent tracking-wider"
          >
            Opuiyo Prince-Emmanuel
          </a>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-accent transition duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            id="menu-button"
            className="md:hidden text-gray-300 hover:text-accent focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${menuOpen ? "" : "hidden"} md:hidden absolute w-full bg-secondary-dark/95 border-t border-gray-700`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block py-2 px-4 text-gray-300 hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
