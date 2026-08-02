import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

function Projects() {
  const projects = [
    {
      title: "Chettinadu Catering Website",
      tech: "React • Firebase • SQL",
      desc: "Premium catering management platform with online booking, admin dashboard, menu management and customer management.",
      github: "https://github.com/Gunavadhi22/NEWCATERINGWEBSITE",
      image: "/projects/catering.png",
    },
    {
      title: "Smart Irrigation System (Team Project)",
      tech: "IoT • Arduino • Sensors",
      desc: "IoT based smart irrigation system that monitors soil moisture and automatically controls water supply for agriculture.",
      github: "https://github.com/Gunavadhi22/smartirrigationsystem",
      image: "/projects/irrigation.jpg",
    },
    {
      title: "Mess Attendance System (Team Project)",
      tech: "Python • OpenCV • SQL Server",
      desc: "AI Face Recognition attendance system for hostel mess using ArcFace, InsightFace and SQL Server database.",
      github: "https://github.com/Gunavadhi22/Messattendance",
      image: "/projects/mess-attendance.jpg",
    },
  ];

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-4xl font-bold text-center text-white"
        >
          <span className="text-violet-400">Projects</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.1}
          className="text-center text-slate-400 mt-3 mb-10"
        >
          Featured Projects
        </motion.p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const cardDelay = 0.2 + index * 0.15;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={cardDelay}
                whileHover={{ y: -6 }}
                className="group bg-white/5 rounded-2xl overflow-hidden border border-violet-500/20 hover:border-violet-500/40 transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-5">
                  <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    {project.tech}
                  </span>

                  <h3 className="text-lg font-bold text-white mt-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-6 mt-2">
                    {project.desc}
                  </p>

                  <div className="flex gap-2.5 mt-5">
                    <button
                      onClick={() => openLink(project.github)}
                      className="flex-1 flex justify-center items-center gap-2 bg-violet-600 text-white text-sm py-2.5 rounded-xl hover:bg-violet-500 transition"
                    >
                      <FaGithub size={14} />
                      GitHub
                    </button>

                    <button
                      onClick={() => openLink(project.github)}
                      className="w-11 flex justify-center items-center border-2 border-violet-500/40 text-violet-300 rounded-xl hover:bg-violet-600 hover:text-white hover:border-violet-600 transition"
                    >
                      <FaExternalLinkAlt size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects