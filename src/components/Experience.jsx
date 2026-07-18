import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026",
    title: "Google Cloud Arcade Facilitator",
    description:
      "Selected as a Google Cloud Arcade Facilitator. Completed cloud learning paths, hands-on labs, and guided cloud learning activities.",
  },
  {
    year: "2026",
    title: "FoodSpend AI",
    description:
      "Developed an AI-powered expense tracking application using Flutter and Firebase with smart spending insights.",
  },
  {
    year: "2026",
    title: "Chauhan Rooms Online",
    description:
      "Built and deployed a responsive room booking website with modern UI and WhatsApp integration.",
  },
  {
    year: "2025",
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    description:
      "Started Bachelor's degree in AI & ML at Maharishi University of Information Technology (MUIT), Lucknow.",
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-blue-500">Journey</span>
          </h2>

          <p className="text-gray-400 mt-4">
            My academic and professional milestones.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-blue-500 ml-4">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-11 top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900"></div>

              <span className="text-blue-400 font-semibold">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold text-white mt-2">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;