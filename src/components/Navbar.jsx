import { Link } from "react-scroll";

function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          GT
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-slate-700 font-medium">

          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
              About
            </Link>
          </li>

          <li>
            <Link to="education" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
              Education
            </Link>
          </li>

          <li>
            <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
              Skills
            </Link>
          </li>

          <li>
            <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
              Experience
            </Link>
          </li>

          <li>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
              Projects
            </Link>
          </li>

          <li>
            <Link to="certifications" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
              Certifications
            </Link>
          </li>

          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
              Contact
            </Link>
          </li>

        </ul>

        {/* Resume Button */}
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
          Resume
        </button>

      </nav>
    </header>
  );
}

export default Navbar;