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
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-3">
          Skills
        </h2>

        <p className="text-center text-slate-500 mb-12">
          Technologies & Tools I work with
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center hover:-translate-y-2"
            >
              {skill.icon}
              <h3 className="mt-2 text-sm font-semibold text-slate-700">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;