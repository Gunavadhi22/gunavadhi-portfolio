import { FaUserGraduate, FaLaptopCode, FaChartLine } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <h2 className="text-5xl font-bold text-center text-slate-800">
          About Me
        </h2>

        <p className="text-center text-slate-500 mt-4">
          Get to know me better
        </p>

        {/* About Card */}

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-bold text-blue-600">
              Who am I?
            </h3>

            <p className="mt-6 text-slate-600 leading-8">

              I'm Gunavadhi Thiyagarajan, a Computer Science Engineering
              student passionate about Data Analytics, SQL, Python,
              Power BI, Machine Learning and Full Stack Development.

              I enjoy solving real-world problems through technology
              and continuously learning modern tools.

            </p>

          </div>

          {/* Right */}

          <div className="grid grid-cols-1 gap-6">

            <div className="bg-sky-50 rounded-2xl p-6 shadow">

              <FaUserGraduate className="text-4xl text-blue-600" />

              <h4 className="text-xl font-bold mt-4">
                Education
              </h4>

              <p className="text-slate-600 mt-2">
                B.E Computer Science Engineering
              </p>

            </div>

            <div className="bg-sky-50 rounded-2xl p-6 shadow">

              <FaLaptopCode className="text-4xl text-blue-600" />

              <h4 className="text-xl font-bold mt-4">
                Development
              </h4>

              <p className="text-slate-600 mt-2">
                React • Java • Python • SQL
              </p>

            </div>

            <div className="bg-sky-50 rounded-2xl p-6 shadow">

              <FaChartLine className="text-4xl text-blue-600" />

              <h4 className="text-xl font-bold mt-4">
                Data Analytics
              </h4>

              <p className="text-slate-600 mt-2">
                Power BI • Excel • Machine Learning
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;