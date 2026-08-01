import {
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
  FaDatabase,
  FaChartBar,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaMicrosoft,
} from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay, ease: "easeOut" },
  }),
};

function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython className="text-3xl text-blue-500" /> },
    { name: "Power BI", icon: <FaChartBar className="text-3xl text-yellow-500" /> },
    { name: "Java", icon: <FaJava className="text-3xl text-red-500" /> },
    { name: "SQL", icon: <FaDatabase className="text-3xl text-indigo-500" /> },
    { name: "React", icon: <FaReact className="text-3xl text-cyan-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-3xl text-orange-500" /> },
    { name: "Firebase", icon: <span className="text-3xl">🔥</span> },
    { name: "Pandas", icon: <span className="text-3xl">🐼</span> },
    { name: "HTML", icon: <FaHtml5 className="text-3xl text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-3xl text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-3xl text-yellow-400" /> },
    { name: "MS Office", icon: <FaMicrosoft className="text-3xl text-red-600" /> },
    { name: "VS Code", icon: <span className="text-3xl">💻</span> },
    { name: "Tableau", icon: <span className="text-3xl">📊</span> },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-3"
        >
          <span className="text-violet-400">Skills</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.1}
          className="text-center text-slate-400 mb-12"
        >
          Technologies & Tools I work with
        </motion.p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.15 + index * 0.03}
              whileHover={{ scale: 1.05, y: -6 }}
              className="bg-white/5 border border-violet-500/20 rounded-xl p-4 flex flex-col items-center hover:border-violet-500/40 transition-colors duration-300"
            >
              {skill.icon}
              <h3 className="mt-2 text-sm font-semibold text-slate-300">
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