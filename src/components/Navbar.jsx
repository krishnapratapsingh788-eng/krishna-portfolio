import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
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
        <div className="hidden md:flex items-center gap-6">

          <ul className="flex gap-7 text-white">

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

          </ul>


          {/* Theme Button */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-full bg-slate-800 text-white hover:bg-blue-600 transition"
          >
            {theme === "dark" ? <Sun size={22}/> : <Moon size={22}/>}
          </button>


          {/* Resume */}
          <a
            href="/resume/Krishna_Pratap_Singh_Resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition"
          >
            Resume
          </a>

        </div>



        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-white"
        >
          {menuOpen ? <FaTimes/> : <FaBars/>}
        </button>


      </div>



      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <ul className="flex flex-col text-center py-5">

            {navLinks.map((item)=>(
              <li key={item.name} className="py-3">
                <a
                  href={item.href}
                  onClick={()=>setMenuOpen(false)}
                  className="text-white hover:text-blue-400"
                >
                  {item.name}
                </a>
              </li>
            ))}


            <li className="mt-4">

              <button
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                className="bg-slate-800 text-white px-5 py-2 rounded-lg"
              >
                {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>

            </li>


            <li className="mt-4">

              <a
                href="/resume/Krishna_Pratap_Singh_Resume.pdf"
                download
                className="inline-block bg-blue-600 px-5 py-2 rounded-lg text-white"
              >
                📄 Resume
              </a>

            </li>


          </ul>

        </div>

      )}

    </nav>
  );
}

export default Navbar;