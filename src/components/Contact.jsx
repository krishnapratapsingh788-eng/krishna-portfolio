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

        {/* Heading */}
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
            Feel free to connect with me for internships, collaborations,
            freelance work, or exciting AI projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">

            {/* Email */}
            <div className="flex items-center gap-4 mb-6">
              <FaEnvelope className="text-blue-500 text-2xl" />

              <div>
                <h3 className="text-white font-semibold">Email</h3>

                <a
                  href="mailto:krishnapratapsingh788@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  krishnapratapsingh788@gmail.com
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-4 mb-6">
              <FaGithub className="text-blue-500 text-2xl" />

              <div>
                <h3 className="text-white font-semibold">GitHub</h3>

                <a
                  href="https://github.com/krishnapratapsingh788-eng"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  github.com/krishnapratapsingh788-eng
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4 mb-6">
              <FaLinkedin className="text-blue-500 text-2xl" />

              <div>
                <h3 className="text-white font-semibold">LinkedIn</h3>

                <a
                  href="https://www.linkedin.com/in/krishna-pratap-singh-189339383/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Krishna Pratap Singh
                </a>
              </div>
            </div>

            {/* Google Skills Profile */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/icons/google-skills.png"
                alt="Google Skills"
                className="w-10 h-10 object-contain rounded-md"
              />

              <div>
                <h3 className="text-white font-semibold">
                  Google Skills Profile
                </h3>

                <a
                  href="https://www.skills.google/public_profiles/f47697cf-6455-40dd-8f62-4dc75d22a0e8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition font-medium"
                >
                  View My Google Skills Profile →
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-500 text-2xl" />

              <div>
                <h3 className="text-white font-semibold">Location</h3>

                <p className="text-gray-400">
                  Lucknow, Uttar Pradesh, India
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
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
                className="w-full p-4 rounded-xl bg-slate-900 text-white border border-slate-700 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-slate-900 text-white border border-slate-700 outline-none focus:border-blue-500"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-xl bg-slate-900 text-white border border-slate-700 outline-none focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
              >
                Send Message 🚀
              </button>

              {status && (
                <p className="text-center text-blue-400 font-medium">
                  {status}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;