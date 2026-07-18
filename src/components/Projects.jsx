import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { projects } from "../data/projects";

function Projects() {

  return (
    <section id="projects" className="bg-slate-900 py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Real-world applications built with modern technologies.
          </p>

        </motion.div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          {projects.map((project,index)=>(


            <motion.div

              key={index}

              initial={{
                opacity:0,
                y:50
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.5,
                delay:index*0.1
              }}

              whileHover={{
                y:-12
              }}

              className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition shadow-xl"

            >


              {/* Image */}

              <div className="overflow-hidden relative">

                <img

                  src={project.image}

                  alt={project.title}

                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"

                />


                {index===0 && (

                  <span className="absolute top-4 left-4 flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">

                    <FaStar/>
                    Featured

                  </span>

                )}

              </div>




              <div className="p-6">


                <h3 className="text-2xl font-bold text-white">

                  {project.title}

                </h3>



                <p className="text-gray-400 mt-3">

                  {project.description}

                </p>



                {/* Tech */}

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((tech,i)=>(

                    <span

                      key={i}

                      className="text-sm bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full"

                    >

                      {tech}

                    </span>

                  ))}

                </div>




                {/* Buttons */}

                <div className="flex gap-4 mt-6">


                  <a

                    href={project.github}

                    target="_blank"

                    rel="noreferrer"

                    className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-white transition"

                  >

                    <FaGithub/>

                    Code

                  </a>



                  <a

                    href={project.demo}

                    target="_blank"

                    rel="noreferrer"

                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition"

                  >

                    <FaExternalLinkAlt/>

                    Live

                  </a>


                </div>



              </div>


            </motion.div>


          ))}


        </div>


      </div>

    </section>
  );
}

export default Projects;