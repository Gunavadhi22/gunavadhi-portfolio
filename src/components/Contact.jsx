import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    const subject = encodeURIComponent("Portfolio Contact from " + formData.name);
    const body = encodeURIComponent(
      "Name: " + formData.name + "\nEmail: " + formData.email + "\n\nMessage:\n" + formData.message
    );

    window.location.href = "mailto:gunavadhithiyagarajan@gmail.com?subject=" + subject + "&body=" + body;
  };

  return (
    <section id="contact" className="py-16 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-4xl font-bold text-center text-white"
        >
          <span className="text-violet-400">Contact</span> Me
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.1}
          className="text-center text-slate-400 mt-3 mb-12 text-sm"
        >
          Let's connect and build something amazing together.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE - Form + Contact Info */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.2}
          >

            {/* Message Form */}

            <form onSubmit={handleSubmit} className="bg-white/5 border border-violet-500/20 rounded-xl p-4 space-y-3">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2.5 rounded-lg bg-white/5 border border-violet-500/20 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2.5 rounded-lg bg-white/5 border border-violet-500/20 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition"
              />

              <textarea
                rows="3"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full p-2.5 rounded-lg bg-white/5 border border-violet-500/20 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition resize-none"
              ></textarea>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="relative w-full overflow-hidden bg-violet-600 text-white text-xs font-semibold px-6 py-3 rounded-full hover:bg-violet-500 transition shadow-[0_0_20px_rgba(139,92,246,0.6)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FaPaperPlane size={12} />
                  Send Message
                </span>

                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ["-150%", "150%"] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: "50%" }}
                />

                <motion.span
                  className="absolute inset-0 rounded-full"
                  animate={{ boxShadow: [
                    "0 0 10px rgba(139,92,246,0.4)",
                    "0 0 25px rgba(139,92,246,0.9)",
                    "0 0 10px rgba(139,92,246,0.4)"
                  ] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.button>

            </form>

            {/* Contact Info */}

            <div className="space-y-3 mt-6">

              <a
                href="mailto:gunavadhithiyagarajan@gmail.com"
                className="flex items-center gap-3 bg-white/5 border border-violet-500/20 p-3 rounded-lg hover:border-violet-500/40 hover:bg-white/10 transition-colors"
              >
                <FaEnvelope className="text-violet-400 text-sm shrink-0" />
                <span className="text-xs text-slate-300">gunavadhithiyagarajan@gmail.com</span>
              </a>

              <a
                href="tel:+919342986476"
                className="flex items-center gap-3 bg-white/5 border border-violet-500/20 p-3 rounded-lg hover:border-violet-500/40 hover:bg-white/10 transition-colors"
              >
                <FaPhone className="text-violet-400 text-sm shrink-0" />
                <span className="text-xs text-slate-300">+91 9342986476</span>
              </a>

              <div className="flex items-center gap-3 bg-white/5 border border-violet-500/20 p-3 rounded-lg">
                <FaMapMarkerAlt className="text-violet-400 text-sm shrink-0" />
                <span className="text-xs text-slate-300">Karaikudi, Tamil Nadu</span>
              </div>

              <div className="flex gap-3 text-lg pt-1">
                <motion.a whileHover={{ scale: 1.15, y: -3 }} href="#" className="w-8 h-8 rounded-full bg-white/5 border border-violet-500/30 flex items-center justify-center text-violet-300 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all">
                  <FaGithub size={13} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, y: -3 }} href="#" className="w-8 h-8 rounded-full bg-white/5 border border-violet-500/30 flex items-center justify-center text-violet-300 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all">
                  <FaLinkedin size={13} />
                </motion.a>
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE - Girl Image */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.3}
            className="flex flex-col items-center justify-center"
          >

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-violet-600 blur-3xl opacity-30 rounded-full"></div>

              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-violet-500/30 shadow-[0_15px_40px_rgba(139,92,246,0.35)]">
                <img
                  src="/CONTACT/GIRLIMAGE.jpg"
                  alt="Portfolio illustration"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                animate={{ opacity: [0, 1, 0], y: [0, -14, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
                className="absolute -top-3 -right-2 w-3 h-3 rounded-full bg-violet-300"
              />
              <motion.div
                animate={{ opacity: [0, 1, 0], y: [0, -14, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-2 -left-3 w-2.5 h-2.5 rounded-full bg-fuchsia-300"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.45}
              className="text-center mt-5"
            >
              <p className="text-white font-semibold text-sm">
                Thank you for visiting my portfolio!
              </p>
              <p className="text-slate-400 text-xs mt-1">
                I'd love to hear from you — let's connect.
              </p>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
