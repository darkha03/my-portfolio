export const Skills = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js", "Git", "GitHub"
  ];

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto text-center" id="skills" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-red-600">Skills</h2>
      <p className="text-gray-700 mb-10">Here are some tools and technologies I work with:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="border border-black py-4 px-2 rounded-lg hover:bg-red-600 hover:text-white transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
