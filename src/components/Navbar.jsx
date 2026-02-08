import { Mail, Github, Linkedin } from "lucide-react";
import { useI18n } from "../i18n";

export const Navbar = () => {
  const { lang, setLang, copy } = useI18n();

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">Khanh.</h1>
        <div className="flex items-center space-x-6">
        <ul className="flex gap-6 font-medium text-black">
          <li><a href="#hero" className="hover:text-red-600">{copy.navbar.home}</a></li>
          <li><a href="#projects" className="hover:text-red-600">{copy.navbar.projects}</a></li>
          <li><a href="#contacts" className="hover:text-red-600">{copy.navbar.contact}</a></li>
        </ul>
        <div className="hidden md:flex items-center border border-gray-300 rounded-full text-xs">
          {(["en", "fr"]).map((code) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className={`px-3 py-1 rounded-full transition ${
                lang === code ? "bg-red-600 text-white" : "text-gray-700 hover:bg-red-50"
              }`}
              aria-label={`${copy.navbar.languageLabel} ${code.toUpperCase()}`}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
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
      {/* Mobile language toggle */}
      <div className="md:hidden">
        <div className="flex items-center border border-gray-300 rounded-full text-xs">
          {(["en", "fr"]).map((code) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className={`px-3 py-1 rounded-full transition ${
                lang === code ? "bg-red-600 text-white" : "text-gray-700 hover:bg-red-50"
              }`}
              aria-label={`${copy.navbar.languageLabel} ${code.toUpperCase()}`}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      </div>
      </div>
    </nav>
  );
};
