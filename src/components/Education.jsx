import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

function Education() {
  return (
    <section id="education" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto px-8">

        {/* Heading */}

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-4xl font-bold text-center text-white"
        >
          <span className="text-violet-400">Education</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.1}
          className="text-center text-slate-400 mt-3"
        >
          My Academic Journey
        </motion.p>

        {/* Timeline */}

        <div className="mt-14 space-y-5">

          {/* B.E Degree */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.2}
            whileHover={{ scale: 1.01, y: -3 }}
            className="flex items-start gap-4 bg-white/5 border border-violet-500/20 rounded-xl p-5 hover:border-violet-500/40 transition-colors"
          >

            <div className="w-11 h-11 shrink-0 rounded-lg bg-violet-500/10 flex items-center justify-center">
              <FaGraduationCap className="text-xl text-violet-400" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base font-bold text-white">
                  B.E Computer Science and Engineering
                </h4>
                <span className="text-xs font-semibold text-violet-300 bg-violet-500/10 px-2.5 py-1 rounded-full">
                  2023 – 2027
                </span>
              </div>

              <p className="text-sm text-slate-400 mt-1">
                Mount Zion College of Engineering and Technology
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-sm">
                <p className="text-slate-400">
                  <span className="text-slate-500">Degree:</span>{" "}
                  <span className="text-slate-300">Bachelor of Engineering</span>
                </p>
                <p className="text-slate-400">
                  <span className="text-slate-500">Branch:</span>{" "}
                  <span className="text-slate-300">Computer Science & Engineering</span>
                </p>
                <p className="text-slate-400">
                  <span className="text-slate-500">Graduation:</span>{" "}
                  <span className="text-slate-300">Expected – 2027</span>
                </p>
              </div>
            </div>

          </motion.div>

          {/* 12th School */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.3}
            whileHover={{ scale: 1.01, y: -3 }}
            className="flex items-start gap-4 bg-white/5 border border-violet-500/20 rounded-xl p-5 hover:border-violet-500/40 transition-colors"
          >

            <div className="w-11 h-11 shrink-0 rounded-lg bg-violet-500/10 flex items-center justify-center">
              <FaSchool className="text-xl text-violet-400" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base font-bold text-white">
                  Higher Secondary (12th)
                </h4>
                <span className="text-xs font-semibold text-violet-300 bg-violet-500/10 px-2.5 py-1 rounded-full">
                  2023
                </span>
              </div>

              <p className="text-sm text-slate-400 mt-1">
                Ramanathan Chettiar Higher Secondary School
              </p>

              <p className="text-sm text-slate-400 mt-3">
                <span className="text-slate-500">Status:</span>{" "}
                <span className="text-slate-300">Passed Out</span>
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Education;