import { useState } from "react";
import { FaBriefcase, FaGraduationCap, FaTrophy, FaArrowRight, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

const internships = [
  "CODETECH.png",
  "GBTECH DATA ANALYST.png",
  "JAVA DEVELOPER.jpg",
];

const courses = [
  "AIagent2026.png",
  "AIdataStrategymangodb2026.png",
  "ANALYSTFOUNDATION.png",
  "AskQuestionCOURSERA.png",
  "basic for students 2026.png",
  "conceptofcybersecurity.png",
  "CRUDoperations2025.png",
  "DataStructres in C.png",
  "DCA(CSC).png",
  "Deeplearningonramp.png",
  "DSAsimplilearn.png",
  "learnAIgenAI.png",
  "machinelearningonramp.png",
  "mangodb.png",
  "MangoDBfundamentals.png",
  "microsoftcopilot.png",
  "nptelcryptography.png",
  "RAG 2025.png",
  "RAG with MangoDB 2026.png",
  "Relational to document model.png",
  "selfmanaged mangodb.png",
  "staticsonramp.png",
  "vector2025.png",
  "vectorsearchfundamentals.png",
];

const achievements = [
  "aarahon(fathima sympo).jpg",
  "appreiction.jpeg",
  "AR&VR.jpg",
  "be10X.png",
  "ENGG PICTIONARY.jpg",
  "greenengineering.jpeg",
  "mindmaze.jpeg",
  "PHP nd sql.jpg",
  "STUDENT COLLOQUIM.jpg",
];

function Certifications() {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      key: "internships",
      title: "Internship Certificates",
      description: "Professional Internship & Industry Certificates",
      icon: <FaBriefcase />,
      color: "from-indigo-500 to-violet-600",
      glow: "rgba(124,58,237,0.55)",
      folder: "internships",
      files: internships,
    },
    {
      key: "courses",
      title: "Course Certificates",
      description: "Online Courses & College Achievements",
      icon: <FaGraduationCap />,
      color: "from-violet-500 to-fuchsia-600",
      glow: "rgba(168,85,247,0.55)",
      folder: "courses",
      files: courses,
    },
    {
      key: "achievements",
      title: "Achievements & Participations",
      description: "Hackathons, Awards & Recognitions",
      icon: <FaTrophy />,
      color: "from-fuchsia-500 to-pink-600",
      glow: "rgba(217,70,239,0.55)",
      folder: "achievements",
      files: achievements,
    },
  ];

  const activeData = categories.find((c) => c.key === activeCategory);

  return (
    <section id="certifications" className="py-16 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-violet-400">Certifications</span>
          </h2>

          <div className="w-16 h-1 bg-violet-600 rounded-full mx-auto mt-3"></div>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            Explore my learning journey through certifications, internships and achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <motion.div
              key={item.key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.15 + index * 0.15}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative cursor-pointer rounded-2xl p-[1px] transition-all duration-500"
              style={{
                background: `linear-gradient(135deg, ${item.glow}, transparent 60%)`,
              }}
            >
              {/* Animated glow blob behind card */}
              <motion.div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{ background: item.glow }}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <div
                className="relative bg-[#0d0d14] border border-violet-500/20 rounded-2xl p-6 h-full group-hover:border-violet-400/50 transition-all duration-500 overflow-hidden"
              >

                {/* Shimmer sweep on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:rotate-6 group-hover:scale-110 transition duration-500`}
                  animate={{
                    boxShadow: [
                      `0 0 10px ${item.glow}`,
                      `0 0 22px ${item.glow}`,
                      `0 0 10px ${item.glow}`,
                    ],
                  }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {item.icon}
                </motion.div>

                <h3 className="relative mt-5 text-lg font-bold text-white group-hover:text-violet-300 transition">
                  {item.title}
                </h3>

                <p className="relative mt-2 text-slate-400 text-sm leading-6">
                  {item.description}
                </p>

                <button
                  onClick={() => setActiveCategory(item.key)}
                  className="relative mt-6 w-full flex justify-center items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm py-2.5 rounded-xl font-semibold group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 group-hover:shadow-[0_0_18px_rgba(139,92,246,0.6)] transition-all duration-300"
                >
                  Explore
                  <FaArrowRight size={13} />
                </button>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* MODAL */}

      <AnimatePresence>
        {activeData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCategory(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f0f16] border border-violet-500/30 rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col shadow-[0_0_40px_rgba(139,92,246,0.3)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-violet-500/20 shrink-0">
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {activeData.title}
                </h3>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="w-9 h-9 rounded-full bg-white/5 border border-violet-500/20 flex items-center justify-center text-violet-300 hover:bg-violet-600 hover:text-white transition"
                >
                  <FaTimes size={14} />
                </button>
              </div>

              {/* Image Grid */}
              <div className="p-6 overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeData.files.map((file, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="rounded-xl overflow-hidden border border-violet-500/20 bg-white flex items-center justify-center hover:border-violet-400/60 hover:shadow-[0_0_18px_rgba(139,92,246,0.4)] transition-all duration-300"
                    >
                      <img
                        src={encodeURI(`/certificates/${activeData.folder}/${file}`)}
                        alt={file}
                        className="w-full h-auto max-h-[420px] object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Certifications;
