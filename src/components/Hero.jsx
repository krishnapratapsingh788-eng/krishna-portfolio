import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 pt-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg font-medium">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 leading-tight">
            Krishna
            <span className="text-blue-500"> Pratap Singh</span>
          </h1>

          <TypeAnimation
            sequence={[
              "AI & ML Student",
              2000,
              "Flutter Developer",
              2000,
              "React Developer",
              2000,
              "Python Programmer",
              2000,
              "Google Cloud Arcade Facilitator",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl font-semibold text-cyan-400 mt-6 block"
          />

          <p className="text-gray-300 mt-6 text-lg leading-8 max-w-xl">
            Passionate about Artificial Intelligence, Flutter, React, Python,
            and Cloud technologies. I enjoy building modern applications that
            solve real-world problems and continuously improve my development
            skills.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="/resume/Krishna_Pratap_Singh_Resume.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold transition"
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-blue-500 hover:bg-blue-600 px-7 py-3 rounded-xl font-semibold transition"
            >
              Contact Me
            </a>

          </div>

          {/* Social */}
          <div className="flex gap-6 mt-8 text-3xl">

            <a
              href="https://github.com/krishnapratapsingh788-eng"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/krishna-pratap-singh-189339383/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 transition hover:scale-110"
            >
              <FaLinkedin />
            </a>

          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative group">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30 group-hover:opacity-60 transition"></div>

            {/* Ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-blue-500/30 animate-pulse"></div>

            {/* Image */}
            <img
              src="/profile.png"
              alt="Krishna Pratap Singh"
              className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-blue-500 shadow-2xl transition duration-500 group-hover:scale-105"
            />

          </div>
        </motion.div>

      </div>

      {/* Scroll Down */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-blue-400 text-2xl"
      >
        <FaArrowDown />
      </a>

    </section>
  );
}

export default Hero;