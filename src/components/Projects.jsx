import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Chettinadu Catering Website",
      tech: "React • Firebase • SQL",
      desc:
        "Premium catering management platform with online booking, admin dashboard, menu management and customer management.",
      github:
        "https://github.com/Gunavadhi22/NEWCATERINGWEBSITE",
      image: "/projects/catering.png",
    },

    {
      title: "Smart Irrigation System(Team Project)",
      tech: "IoT • Arduino • Sensors",
      desc:
        "IoT based smart irrigation system that monitors soil moisture and automatically controls water supply for agriculture.",
      github:
        "https://github.com/Gunavadhi22/smartirrigationsystem",
      image: "/projects/irrigation.jpg",
    },

    {
      title: "Mess Attendance System(Team Project)",
      tech: "Python • OpenCV • SQL Server",
      desc:
        "AI Face Recognition attendance system for hostel mess using ArcFace, InsightFace and SQL Server database.",
      github:
        "https://github.com/Gunavadhi22/Messattendance",
      image: "/projects/mess-attendance.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-slate-800">
          Projects
        </h2>

        <p className="text-center text-slate-500 mt-4 mb-14">
          Featured Projects
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />

              </div>

              <div className="p-7">

                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                  {project.tech}
                </span>

                <h3 className="text-2xl font-bold text-slate-800 mt-5">
                  {project.title}
                </h3>

                <p className="text-slate-600 leading-7 mt-4">
                  {project.desc}
                </p>

                <div className="flex gap-3 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 flex justify-center items-center border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition"
                  >
                    <FaExternalLinkAlt />
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;