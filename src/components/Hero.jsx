import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-white via-sky-50 to-blue-100"
    >
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <p className="text-blue-600 text-xl font-semibold">
              👋 Hello, I'm
            </p>

            <h1 className="mt-4 text-6xl md:text-7xl font-black text-slate-900">
              Gunavadhi
            </h1>

            <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Thiyagarajan
            </h1>

            <div className="mt-6">
              <TypeAnimation
                sequence={[
                  "Data Analyst",
                  2000,
                  "Python Developer",
                  2000,
                  "SQL Enthusiast",
                  2000,
                  "Power BI Developer",
                  2000,
                  "React Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-3xl font-bold text-blue-600"
              />
            </div>

            <p className="mt-8 text-lg text-slate-600 leading-8 max-w-xl">
              Passionate Computer Science Engineering student with hands-on
              experience in Python, SQL, Power BI, React, Machine Learning and
              Web Development. I enjoy building modern, responsive and scalable
              applications that solve real-world problems.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="/Gunavadhi_Resume.pdf"
                download
                className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
              >
                View Projects
              </a>

            </div>

            {/* Social Icons */}

            <div className="flex gap-6 mt-10">

              <a
                href="https://github.com/Gunavadhi22"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="mailto:gunavadhithiyagarajan@gmail.com"
                className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <FaEnvelope size={24} />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-blue-300 rounded-full blur-3xl opacity-50"></div>

              <div className="relative w-96 h-96 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-2xl flex items-center justify-center">

                <h1 className="text-8xl font-black text-white">
                  GT
                </h1>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;