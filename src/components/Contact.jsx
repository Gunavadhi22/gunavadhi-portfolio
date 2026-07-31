import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-slate-800">
          Contact Me
        </h2>

        <p className="text-center text-slate-500 mt-4 mb-16">
          Let's connect and build something amazing together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-6">

            <div className="flex items-center gap-4 bg-sky-50 p-5 rounded-2xl">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <span>gunavadhithiyagarajan@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 bg-sky-50 p-5 rounded-2xl">
              <FaPhone className="text-blue-600 text-2xl" />
              <span>+91 9342986476</span>
            </div>

            <div className="flex items-center gap-4 bg-sky-50 p-5 rounded-2xl">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <span>Karaikudi, Tamil Nadu</span>
            </div>

            <div className="flex gap-6 text-3xl mt-8">

              <a href="#" className="text-blue-600 hover:scale-110 transition">
                <FaGithub />
              </a>

              <a href="#" className="text-blue-600 hover:scale-110 transition">
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <form className="bg-sky-50 rounded-3xl p-8 shadow-lg">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl mb-5 border"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-xl mb-5 border"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full p-4 rounded-xl border"
            ></textarea>

            <button
              className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;