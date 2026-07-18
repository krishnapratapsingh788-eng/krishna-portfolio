import { motion } from "framer-motion";
import {
  FaCloud,
  FaLaptopCode,
  FaGlobe,
  FaCode,
  FaChartBar,
  FaPython,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaCloud size={40} />,
    title: "Google Cloud Arcade Facilitator 2026",
    description:
      "Selected as a Google Cloud Arcade Facilitator and completed hands-on Google Cloud labs and learning paths.",
  },
  {
    icon: <FaAward size={40} />,
    title: "Google Cloud Skill Badges",
    description:
      "Earned multiple Google Cloud Skill Badges by completing cloud learning paths and practical labs.",
  },
  {
    icon: <FaLaptopCode size={40} />,
    title: "FoodSpend AI",
    description:
      "Built an AI-powered food expense tracker using Flutter, Firebase, and AI technologies.",
  },
  {
    icon: <FaGlobe size={40} />,
    title: "Chauhan Rooms Online",
    description:
      "Designed and deployed a responsive room booking website with WhatsApp integration and modern UI.",
  },
  {
    icon: <FaCode size={40} />,
    title: "59 LeetCode Problems Solved",
    description:
      "Solved 59 Data Structures & Algorithms problems to strengthen coding and problem-solving skills.",
  },
  {
    icon: <FaChartBar size={40} />,
    title: "Power BI Certification",
    description:
      "Completed Power BI training and learned data visualization, dashboards, and business analytics.",
  },
  {
    icon: <FaPython size={40} />,
    title: "Python Certification (GUVI)",
    description:
      "Completed Python certification through GUVI and built hands-on Python programming projects.",
  },
  {
    icon: <FaGraduationCap size={40} />,
    title: "B.Tech AI & ML Student",
    description:
      "Currently pursuing a Bachelor's degree in Artificial Intelligence & Machine Learning at MUIT, Lucknow.",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="bg-slate-800 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-blue-500">Achievements</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Certifications, projects, coding milestones, and academic achievements.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-lg hover:border-blue-500 hover:shadow-blue-500/20 transition"
            >
              <div className="text-blue-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Achievements;