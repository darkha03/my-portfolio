import { Mail, Github, Linkedin } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">Khanh.</h1>
        <div className="flex items-center space-x-6">
        <ul className="flex gap-6 font-medium text-black">
          <li><a href="#hero" className="hover:text-red-600">Home</a></li>
          <li><a href="#projects" className="hover:text-red-600">Projects</a></li>
          <li><a href="#contacts" className="hover:text-red-600">Contact</a></li>
        </ul>
        <div className="hidden md:flex space-x-4 ml-4">
        <a
          href="mailto:steve.khanhnguyen@gmail.com"
          className="hover:text-red-600"
          title="Email"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://github.com/darkha03"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600"
          title="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/giakhanh-nguyen"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600"
          title="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
      </div>
      </div>
      </div>
    </nav>
  );
};
