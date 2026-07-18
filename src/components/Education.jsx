import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {

  const education = [
    {
      year: "2025 - Expected 2029",
      degree: "B.Tech Artificial Intelligence & Machine Learning",
      institute:
        "Maharishi University of Information Technology (MUIT), Lucknow",
      description:
        "Currently pursuing B.Tech in AI & ML, focusing on Artificial Intelligence, Machine Learning, Data Structures, Software Development, and emerging technologies.",
    },

    {
      year: "Passed: 2025",
      degree: "Class 12th (PCM)",
      institute:
        "Lawrence Homan Public School",
      description:
        "Completed Higher Secondary Education with Physics, Chemistry, and Mathematics (PCM).",
    },

    {
      year: "2021 - 2023",
      degree: "Industrial Training Institute (ITI)",
      institute:
        "ITI Certification",
      description:
        "Completed ITI training with practical technical skills and hands-on learning.",
    },

    {
      year: "Passed: 2021",
      degree: "Class 10th",
      institute:
        "St. Xavier's Inter College",
      description:
        "Completed secondary education with a strong academic foundation.",
    },
  ];


  return (
    <section id="education" className="bg-slate-900 py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{opacity:0,y:-30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="text-center mb-14"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-blue-500">Education</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Academic background and learning journey.
          </p>

        </motion.div>


        <div className="space-y-8">

          {education.map((item,index)=>(

            <motion.div
              key={index}
              initial={{opacity:0,x:-50}}
              whileInView={{opacity:1,x:0}}
              transition={{duration:0.5}}
              className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition"
            >

              <div className="flex gap-5">

                <FaGraduationCap className="text-blue-500 text-4xl mt-1"/>

                <div>

                  <p className="text-blue-400">
                    {item.year}
                  </p>

                  <h3 className="text-2xl font-bold text-white mt-2">
                    {item.degree}
                  </h3>

                  <h4 className="text-gray-300 mt-2">
                    {item.institute}
                  </h4>

                  <p className="text-gray-400 mt-3">
                    {item.description}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;