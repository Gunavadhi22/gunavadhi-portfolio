import { FaUserGraduate, FaLaptopCode, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#0a0a0f]"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-4xl font-bold text-center text-white"
        >
          About <span className="text-violet-400">Me</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.1}
          className="text-center text-slate-400 mt-3"
        >
          Get to know me better
        </motion.p>

        {/* About Card */}

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.2}
          >

            <h3 className="text-3xl font-bold text-violet-400">
              Who am I?
            </h3>

            <p className="mt-6 text-slate-400 leading-8">

              I'm Gunavadhi Thiyagarajan, a Computer Science Engineering
              student passionate about Data Analytics, SQL, Python,
              Power BI, Machine Learning and Full Stack Development.

              I enjoy solving real-world problems through technology
              and continuously learning modern tools.

            </p>

          </motion.div>

          {/* Right */}

          <div className="grid grid-cols-1 gap-4">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.3}
              whileHover={{ scale: 1.02, y: -3 }}
              className="flex items-center gap-4 bg-white/5 border border-violet-500/20 rounded-xl p-4 hover:border-violet-500/40 transition-colors"
            >

              <div className="w-11 h-11 shrink-0 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <FaUserGraduate className="text-xl text-violet-400" />
              </div>

              <div>
                <h4 className="text-base font-bold text-white">
                  Education
                </h4>
                <p className="text-sm text-slate-400 mt-0.5">
                  B.E Computer Science Engineering
                </p>
              </div>

            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.4}
              whileHover={{ scale: 1.02, y: -3 }}
              className="flex items-center gap-4 bg-white/5 border border-violet-500/20 rounded-xl p-4 hover:border-violet-500/40 transition-colors"
            >

              <div className="w-11 h-11 shrink-0 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <FaLaptopCode className="text-xl text-violet-400" />
              </div>

              <div>
                <h4 className="text-base font-bold text-white">
                  Development
                </h4>
                <p className="text-sm text-slate-400 mt-0.5">
                  React • Java • Python • SQL
                </p>
              </div>

            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.5}
              whileHover={{ scale: 1.02, y: -3 }}
              className="flex items-center gap-4 bg-white/5 border border-violet-500/20 rounded-xl p-4 hover:border-violet-500/40 transition-colors"
            >

              <div className="w-11 h-11 shrink-0 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <FaChartLine className="text-xl text-violet-400" />
              </div>

              <div>
                <h4 className="text-base font-bold text-white">
                  Data Analytics
                </h4>
                <p className="text-sm text-slate-400 mt-0.5">
                  Power BI • Excel • Machine Learning
                </p>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;