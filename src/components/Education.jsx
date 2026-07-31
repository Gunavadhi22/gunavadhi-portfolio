import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-slate-800">
          Education
        </h2>

        <p className="text-center text-slate-500 mt-4 mb-14">
          My Academic Journey
        </p>

        <div className="max-w-4xl mx-auto">

          <div className="bg-slate-50 rounded-3xl shadow-lg p-10 hover:shadow-2xl transition duration-300">

            <div className="flex items-center gap-5">

              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl">
                <FaGraduationCap />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-800">
                  B.E Computer Science and Engineering
                </h3>

                <p className="text-lg text-blue-600 font-semibold mt-1">
                  Mount Zion College of Engineering and Technology
                </p>

                <p className="text-slate-500 mt-2">
                  2023 – 2027
                </p>
              </div>

            </div>

            <hr className="my-8" />

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-white rounded-xl p-6 shadow">
                <h4 className="font-bold text-blue-600">
                  Degree
                </h4>

                <p className="mt-2 text-slate-600">
                  Bachelor of Engineering
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow">
                <h4 className="font-bold text-blue-600">
                  Branch
                </h4>

                <p className="mt-2 text-slate-600">
                  Computer Science & Engineering
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow">
                <h4 className="font-bold text-blue-600">
                  Graduation
                </h4>

                <p className="mt-2 text-slate-600">
                  Expected - 2027
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;