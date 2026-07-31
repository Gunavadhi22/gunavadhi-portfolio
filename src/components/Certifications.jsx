import {
  FaChartBar,
  FaBriefcase,
  FaLeaf,
  FaMicrosoft,
  FaGraduationCap,
  FaLaptopCode,
  FaTrophy,
  FaUniversity,
  FaArrowRight,
} from "react-icons/fa";

function Certifications() {
  const categories = [
    {
      title: "Data Analytics",
      description: "Power BI, Excel, Tableau & Analytics",
      icon: <FaChartBar />,
      color: "from-sky-500 to-blue-600",
    },
    {
      title: "Internships",
      description: "Professional Internship Certificates",
      icon: <FaBriefcase />,
      color: "from-indigo-500 to-violet-600",
    },
    {
      title: "MongoDB",
      description: "Database & AI Learning",
      icon: <FaLeaf />,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Microsoft",
      description: "Microsoft Learn Certifications",
      icon: <FaMicrosoft />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "NPTEL",
      description: "Government Certified Courses",
      icon: <FaGraduationCap />,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Great Learning",
      description: "Professional Skill Courses",
      icon: <FaLaptopCode />,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Symposium",
      description: "Paper Presentations & Workshops",
      icon: <FaTrophy />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "College",
      description: "Academic Achievements",
      icon: <FaUniversity />,
      color: "from-purple-500 to-fuchsia-600",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-b from-white via-sky-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-extrabold text-slate-800">
            Certifications
          </h2>

          <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-4"></div>

          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg">
            Explore my learning journey through certifications,
            internships, technical workshops and professional courses.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {categories.map((item, index) => (

            <div
              key={index}
              className="group cursor-pointer bg-white/80 backdrop-blur-md border border-sky-100 rounded-3xl p-7 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >

              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color}
                flex items-center justify-center text-white text-4xl
                shadow-lg group-hover:rotate-6 group-hover:scale-110
                transition duration-500`}
              >
                {item.icon}
              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-500 text-sm leading-6">
                {item.description}
              </p>

              <button
                className="mt-8 w-full flex justify-center items-center gap-2
                bg-sky-100 text-blue-700 py-3 rounded-xl
                font-semibold
                group-hover:bg-blue-600
                group-hover:text-white
                transition-all duration-300"
              >
                Explore
                <FaArrowRight />
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;