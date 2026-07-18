import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiFlutter,
  SiFirebase,
  SiMysql,
  SiTensorflow,
} from "react-icons/si";

const skills = [
  { icon: <FaPython size={40} />, name: "Python" },
  { icon: <FaReact size={40} />, name: "React" },
  { icon: <SiFlutter size={40} />, name: "Flutter" },
  { icon: <SiFirebase size={40} />, name: "Firebase" },
  { icon: <SiMysql size={40} />, name: "MySQL" },
  { icon: <SiTensorflow size={40} />, name: "TensorFlow" },
  { icon: <FaGitAlt size={40} />, name: "Git" },
  { icon: <FaGithub size={40} />, name: "GitHub" },
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-blue-400 mb-12"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="bg-slate-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-blue-500/20 transition"
            >
              <div className="flex justify-center text-blue-400 mb-4">
                {skill.icon}
              </div>

              <h3 className="text-white font-semibold">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;