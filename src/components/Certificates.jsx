import { motion } from "framer-motion";
import { certificates } from "../data/certificates";

function Certificates() {
  return (
    <section id="certificates" className="bg-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-blue-500">Certificates</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Certifications that showcase my learning journey and technical skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-white">
                  {certificate.title}
                </h3>

                <p className="text-blue-400 mt-2">
                  {certificate.issuer}
                </p>

                <p className="text-gray-400 mt-2">
                  {certificate.date}
                </p>

                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;