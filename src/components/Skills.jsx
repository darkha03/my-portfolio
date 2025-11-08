import { useState, useEffect } from "react";
import { Code2, Box, Database, Braces, FileJson, Smartphone, Server, Palette, Gamepad2, GitBranch, Github, Container, Cloud } from "lucide-react";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programming');
  const [fadeState, setFadeState] = useState('in'); // 'in' | 'out'

  const skillCategories = {
    programming: [
      { name: "JavaScript", icon: FileJson },
      { name: "Python", icon: Code2 },
      { name: "Java", icon: Code2 },
      { name: "C", icon: Code2 },
      { name: "TypeScript", icon: Braces },
      { name: "C#", icon: Code2 },
      { name: "HTML", icon: Code2 },
      { name: "CSS", icon: Palette }
    ],
    frameworks: [
      { name: "React", icon: Box },
      { name: "ReactNative", icon: Smartphone },
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Server },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Unity", icon: Gamepad2 },
      { name: "Flask", icon: Server },
      { name: "FastAPI", icon: Server }
    ],
    tools: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "Proxmox", icon: Server },
      { name: "Docker", icon: Container }
    ],
    databases: [
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "Cloudinary", icon: Cloud }
    ]
  };

  const categoryTitles = {
    programming: 'Programming Languages',
    frameworks: 'Frameworks & Libraries',
    tools: 'Tools',
    databases: 'Databases'
  };

  const renderSkillCategory = (title, skills) => (
    <div>
      {/* Show subtitle inside content only on small screens; desktop shows it in top-right header cell */}
      <h3 className="text-xl font-semibold mb-6 text-red-600 md:hidden">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <div
              key={idx}
              className="border border-black py-4 px-2 rounded-lg hover:bg-red-600 hover:text-white transition flex flex-col items-center gap-2"
            >
              <Icon size={26} />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  const handleSelect = (cat) => {
    if (cat === activeCategory) return;
    setFadeState('out');
    setTimeout(() => {
      setActiveCategory(cat);
      setFadeState('in');
    }, 180);
  };

  useEffect(() => { setFadeState('in'); }, []);

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto" id="skills" data-aos="fade-up">
      {/* Unified section header outside grid */}
      <div className="text-center md:text-center mb-10">
        <h2 className="text-3xl font-bold mb-6 text-red-600">Skills</h2>
        <p className="text-gray-700">Here are the technologies I work with:</p>
        {/* Mobile category tabs under header */}
        <div className="md:hidden grid grid-cols-2 gap-2 mt-6">
          {['programming','frameworks','tools','databases'].map(key => (
            <button
              key={key}
              onClick={() => handleSelect(key)}
              className={`px-3 py-2 rounded-md border text-xs transition ${activeCategory === key ? 'border-red-600 bg-red-600 text-white' : 'border-gray-300 hover:border-red-600 hover:bg-red-50 hover:text-red-600'}`}
            >{key.charAt(0).toUpperCase()+key.slice(1)}</button>
          ))}
        </div>
      </div>
      <div className="md:grid md:grid-cols-[190px_1fr] md:grid-rows-[auto_1fr] gap-10">
        {/* Desktop dynamic category subtitle in top-right cell */}
        <div className="hidden md:block md:col-start-2 md:row-start-1 mb-2">
          <h3 className="text-xl font-semibold text-red-600">{categoryTitles[activeCategory]}</h3>
        </div>
        <div className="hidden md:flex md:col-start-1 md:row-start-2 flex-col gap-2 sticky top-24 h-fit text-left pt-2">
          {['programming','frameworks','tools','databases'].map(key => (
            <button
              key={key}
              onClick={() => handleSelect(key)}
              className={`px-4 py-2 rounded-lg border text-sm transition flex items-center gap-2 ${activeCategory === key ? 'border-red-600 bg-red-600 text-white shadow' : 'border-gray-300 hover:border-red-600 hover:bg-red-50 hover:text-red-600'}`}
            >
              <span>{key.charAt(0).toUpperCase()+key.slice(1)}</span>
            </button>
          ))}
        </div>
        <div className={`md:col-start-2 md:row-start-2 transition-opacity duration-200 ${fadeState === 'in' ? 'opacity-100' : 'opacity-0'}`}>
          {activeCategory === 'programming' && renderSkillCategory('Programming Languages', skillCategories.programming)}
          {activeCategory === 'frameworks' && renderSkillCategory('Frameworks & Libraries', skillCategories.frameworks)}
          {activeCategory === 'tools' && renderSkillCategory('Tools', skillCategories.tools)}
          {activeCategory === 'databases' && renderSkillCategory('Databases', skillCategories.databases)}
        </div>
      </div>
    </div>
  );
};
