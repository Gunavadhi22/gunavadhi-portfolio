import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

function Experience() {
  const experiences = [
    {
      company: "GB Tech Corp",
      role: "Data Analyst Intern",
      duration: "June 2026 – July 2026",
      location: "Chennai, India",
      description:
        "Worked on data cleaning, SQL, Power BI dashboards, and business insights using real-world datasets.",
    },
    {
      company: "CodTech IT Solutions",
      role: "Cyber Security & Ethical Hacking Intern",
      duration: "Dec 2025 – Jan 2026",
      location: "Remote",
      description:
        "Learned networking, vulnerability assessment, ethical hacking basics, and security best practices.",
    },
    {
      company: "MeeCadd",
      role: "Java Programmer Intern",
      duration: "21 Jun 2025 – 11 Jul 2025",
      location: "Pari Nagar, Karaikudi",
      description:
        "Completed an internship as a Java Programmer, demonstrating strong proficiency and dedication in Java programming tasks.",
    },
  ];

  return (
    <section id="experience" className="py-16 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-3xl font-bold text-center text-white"
        >
          <span className="text-violet-400">Experience</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.1}
          className="text-center text-slate-400 mt-2 mb-10"
        >
          Internship Experience
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.2 + index * 0.15}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white/5 border border-violet-500/20 rounded-2xl hover:border-violet-500/40 transition-colors duration-300 p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center text-white text-lg">
                  <FaBriefcase />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {exp.role}
                  </h3>

                  <p className="text-violet-400 font-semibold text-sm">
                    {exp.company}
                  </p>
                </div>
              </div>

              <p className="text-slate-400 text-sm">
                📅 {exp.duration}
              </p>

              <p className="text-slate-400 mt-1 text-sm">
                📍 {exp.location}
              </p>

              <p className="text-slate-400 mt-4 text-sm leading-6">
                {exp.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;