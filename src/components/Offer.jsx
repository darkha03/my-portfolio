export const Offer = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive interfaces with React, TailwindCSS, and modern HTML/CSS.",
    },
    {
      title: "Backend Development",
      description: "Creating scalable backend systems using Node.js, Express, Flask, and database integration.",
    },
    {
      title: "UI/UX Design",
      description: "Designing user-friendly interfaces that are clean, modern, and accessible.",
    },
  ];

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto text-center" id="offer" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-red-600">What I Offer</h2>
      <p className="text-gray-700 mb-10">
        Here's how I can help bring your ideas to life:
      </p>
      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-6 border border-black rounded-xl hover:bg-red-600 hover:text-white transition"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
