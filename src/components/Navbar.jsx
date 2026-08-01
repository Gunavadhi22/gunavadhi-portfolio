import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";

function Navbar() {
  const menu = [
    "about",
    "education",
    "skills",
    "experience",
    "projects",
    "certifications",
    "contact",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">

      <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6 lg:px-10">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 flex items-center justify-center shadow">

            <span className="text-white font-bold text-lg">
              GT
            </span>

          </div>

          <div>

            <h1 className="text-lg font-bold text-slate-800 leading-none">
              Gunavadhi
            </h1>

            <p className="text-xs text-slate-500 leading-none mt-1">
              Data Analyst
            </p>

          </div>

        </div>

        {/* Menu */}

        <ul className="hidden lg:flex items-center gap-6">

          {menu.map((item) => (

            <li key={item}>

              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-blue-600"
                className="capitalize text-[15px] font-medium text-slate-600 cursor-pointer hover:text-blue-600 transition"
              >
                {item}
              </Link>

            </li>

          ))}

        </ul>

        {/* Resume */}

        <a
          href="/Gunavadhi_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition shadow"
        >

          <FaDownload size={13} />

          Resume

        </a>

      </nav>

    </header>
  );
}

export default Navbar;