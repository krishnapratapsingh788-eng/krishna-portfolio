import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-500">
              Krishna Pratap Singh
            </h2>

            <p className="text-gray-400 mt-2">
              AI & Machine Learning Student | Flutter Developer | React Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-2xl">

            <a
              href="https://github.com/krishnapratapsingh788-eng"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/krishna-pratap-singh-189339383/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <hr className="border-slate-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {year} Krishna Pratap Singh. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-500 text-sm">
            Made with <FaHeart className="text-red-500" /> using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;