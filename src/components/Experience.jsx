import { FaBriefcase } from "react-icons/fa";

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
    <section id="experience" className="py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-slate-800">
          Experience
        </h2>

        <p className="text-center text-slate-500 mt-2 mb-10">
          Internship Experience
        </p>

        <div className="grid md:grid-cols-3 gap-5">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg">
                  <FaBriefcase />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {exp.role}
                  </h3>

                  <p className="text-blue-600 font-semibold text-sm">
                    {exp.company}
                  </p>
                </div>
              </div>

              <p className="text-slate-500 text-sm">
                📅 {exp.duration}
              </p>

              <p className="text-slate-500 mt-1 text-sm">
                📍 {exp.location}
              </p>

              <p className="text-slate-600 mt-4 text-sm leading-6">
                {exp.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;