export const WhyHire = () => {
  const reasons = [
    {
      title: "Reliable",
      description: "Consistently meet deadlines and deliver high-quality code.",
    },
    {
      title: "Collaborative",
      description: "Great team player with excellent communication skills.",
    },
    {
      title: "Problem Solver",
      description: "Enjoy tackling challenges with practical, clean solutions.",
    },
    {
      title: "Eager to Learn",
      description: "Always learning new technologies and improving my craft.",
    },
  ];

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto text-center" id="why-hire" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-red-600">Why Hire Me?</h2>
      <p className="text-gray-700 mb-10">
        Here’s why I’d be a great addition to your team:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            className="border border-black p-6 rounded-xl hover:bg-black hover:text-white transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
