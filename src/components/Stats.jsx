import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaCloud,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaCode />,
    number: "59+",
    title: "LeetCode Problems",
  },
  {
    icon: <FaLaptopCode />,
    number: "3+",
    title: "Projects Built",
  },
  {
    icon: <FaCloud />,
    number: "5+",
    title: "Cloud Badges",
  },
  {
    icon: <FaAward />,
    number: "2026",
    title: "Arcade Facilitator",
  },
];

function Stats() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-800 hover:border-blue-500 transition"
            >

              <div className="text-4xl text-blue-500 flex justify-center mb-5">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold text-white">
                {item.number}
              </h2>

              <p className="text-gray-400 mt-3">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;