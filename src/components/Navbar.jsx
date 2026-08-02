import { Link } from "react-scroll";

function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-3">

        <h1 className="text-xl font-bold text-blue-600">GT</h1>

        <ul className="hidden md:flex items-center gap-6 text-sm text-slate-700 font-medium">
          <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 transition-colors">About</Link></li>
          <li><Link to="education" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 transition-colors">Education</Link></li>
          <li><Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 transition-colors">Skills</Link></li>
          <li><Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 transition-colors">Experience</Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 transition-colors">Projects</Link></li>
          <li><Link to="certifications" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 transition-colors">Certifications</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 transition-colors">Contact</Link></li>
        </ul>

        <a
          href="/RESUME/GUNAVADHI_RESUME.pdf"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white text-sm px-5 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Resume
        </a>

      </nav>
    </header>
  );
}

export default Navbar;
