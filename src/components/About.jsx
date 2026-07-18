import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="bg-slate-800 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-blue-400"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-lg text-center mt-8 leading-8"
        >
          I'm Krishna Pratap Singh, a B.Tech AI & Machine Learning student
          passionate about building AI-powered applications, Flutter apps,
          modern web solutions, and solving real-world problems through
          technology.
        </motion.p>

      </div>
    </section>
  );
}

export default About;