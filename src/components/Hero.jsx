import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#0a0a0f] pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}

          <motion.div initial="hidden" animate="visible" variants={fadeUp}>

            {/* Welcome Badge */}

            <motion.span
              variants={fadeUp}
              custom={0}
              className="inline-block bg-violet-500/10 text-violet-300 border border-violet-500/30 px-4 py-1.5 rounded-full text-sm font-semibold"
            >
              👋 Welcome to my Portfolio
            </motion.span>

            {/* Name */}

            <motion.h1
              variants={fadeUp}
              custom={0.15}
              whileHover={{ scale: 1.01 }}
              className="mt-5 text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
            >
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Gunavadhi Thiyagarajan
              </span>
            </motion.h1>

            {/* Type Animation */}

            <motion.div variants={fadeUp} custom={0.3} className="mt-4">
              <TypeAnimation
                sequence={[
                  "📊 Data Analyst",
                  1800,
                  "🐍 Python Developer",
                  1800,
                  "📈 Power BI Developer",
                  1800,
                  "⚛ React Developer",
                  1800,
                  "💾 SQL Enthusiast",
                  1800,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                className="text-2xl md:text-3xl font-semibold text-violet-300"
              />
            </motion.div>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              custom={0.45}
              className="mt-6 max-w-lg text-slate-400 text-base md:text-lg leading-7"
            >
              Passionate Computer Science Engineering student specializing in
              Python, SQL, Power BI, React, Firebase and Data Analytics.
              I enjoy building scalable web applications and solving
              real-world business problems through technology.
            </motion.p>

            {/* Buttons */}

            <motion.div variants={fadeUp} custom={0.6} className="flex flex-wrap gap-4 mt-8">
              <motion.a
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.96 }}
                href="/Gunavadhi_Resume.pdf"
                download
                className="px-7 py-3.5 rounded-full bg-violet-600 text-white text-base font-semibold shadow-lg shadow-violet-900/40 hover:bg-violet-500 transition-all duration-300"
              >
                Download Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.96 }}
                href="#projects"
                className="px-7 py-3.5 rounded-full border-2 border-violet-500 text-violet-300 text-base font-semibold flex items-center gap-2 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all duration-300"
              >
                View Projects
                <FaArrowRight size={15} />
              </motion.a>
            </motion.div>

            {/* Social Icons */}

            <motion.div variants={fadeUp} custom={0.75} className="flex gap-4 mt-8">
              <motion.a
                whileHover={{ scale: 1.15, y: -4 }}
                href="https://github.com/Gunavadhi22"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-violet-500/30 flex items-center justify-center text-violet-300 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all"
              >
                <FaGithub size={19} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15, y: -4 }}
                href="https://www.linkedin.com/in/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-violet-500/30 flex items-center justify-center text-violet-300 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all"
              >
                <FaLinkedin size={19} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15, y: -4 }}
                href="mailto:gunavadhithiyagarajan@gmail.com"
                className="w-11 h-11 rounded-full bg-white/5 border border-violet-500/30 flex items-center justify-center text-violet-300 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all"
              >
                <FaEnvelope size={19} />
              </motion.a>
            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-violet-600 blur-3xl opacity-30"></div>

              {/* Main Circle */}

              <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full bg-gradient-to-br from-violet-600 via-purple-700 to-fuchsia-800 shadow-[0_15px_40px_rgba(139,92,246,0.35)] flex items-center justify-center overflow-hidden">

                {/* Rotating Ring */}

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 rounded-full border border-dashed border-white/20"
                />

                {/* Inner Ring */}

                <div className="absolute inset-5 rounded-full border border-white/10"></div>

                {/* GT */}

                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-center"
                >
                  <h1 className="text-5xl md:text-6xl font-black tracking-wider text-white">
                    GT
                  </h1>

                  <p className="mt-1 text-xs md:text-sm text-violet-200 font-medium">
                    Data Analyst
                  </p>
                </motion.div>

              </div>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;