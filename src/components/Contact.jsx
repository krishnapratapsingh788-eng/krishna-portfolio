import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {

  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7pztv5j",
        "template_50q9zsb",
        form.current,
        {
          publicKey: "A-e_JshKJjr1xHpaY",
        }
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };


  return (
    <section id="contact" className="bg-slate-900 py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get In <span className="text-blue-500">Touch</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Feel free to connect with me for internships, collaborations, or projects.
          </p>
        </motion.div>


        <div className="grid md:grid-cols-2 gap-10">


          {/* Contact Info */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">


            <div className="flex items-center gap-4 mb-6">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <div>
                <h3 className="text-white font-semibold">
                  Email
                </h3>
                <p className="text-gray-400">
                  your-email@gmail.com
                </p>
              </div>
            </div>


            <div className="flex items-center gap-4 mb-6">
              <FaGithub className="text-blue-500 text-2xl" />
              <div>
                <h3 className="text-white font-semibold">
                  GitHub
                </h3>

                <a
                  href="https://github.com/krishnapratapsingh788-eng"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-blue-400"
                >
                  krishnapratapsingh788-eng
                </a>

              </div>
            </div>



            <div className="flex items-center gap-4 mb-6">

              <FaLinkedin className="text-blue-500 text-2xl" />

              <div>
                <h3 className="text-white font-semibold">
                  LinkedIn
                </h3>

                <a
                  href="https://www.linkedin.com/in/krishna-pratap-singh-189339383/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Krishna Pratap Singh
                </a>

              </div>

            </div>



            <div className="flex items-center gap-4">

              <FaMapMarkerAlt className="text-blue-500 text-2xl" />

              <div>
                <h3 className="text-white font-semibold">
                  Location
                </h3>

                <p className="text-gray-400">
                  Lucknow, Uttar Pradesh, India
                </p>

              </div>

            </div>


          </div>



          {/* Form */}

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">


            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >


              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-slate-900 text-white outline-none"
              />



              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-slate-900 text-white outline-none"
              />



              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-xl bg-slate-900 text-white outline-none"
              ></textarea>



              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition"
              >
                Send Message
              </button>


              {
                status && (
                  <p className="text-blue-400 mt-3">
                    {status}
                  </p>
                )
              }


            </form>


          </div>


        </div>


      </div>


    </section>
  );
}

export default Contact;