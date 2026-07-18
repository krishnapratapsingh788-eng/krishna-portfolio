import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">
          Krishna.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-7 text-white items-center">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-blue-400 transition"
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Resume Button */}
          <li>
            <a
              href="/resume/Krishna_Pratap_Singh_Resume.pdf"
              download
              className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col text-center py-5">

            {navLinks.map((item) => (
              <li key={item.name} className="py-3">
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-blue-400 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Resume Button */}
            <li className="pt-4">
              <a
                href="/resume/Krishna_Pratap_Singh_Resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="inline-block bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Download Resume
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;