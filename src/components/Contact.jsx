export const Contact = () => {
  return (
    <div className="py-16 px-6 text-center" id="contacts" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-red-600">Let's Work Together</h2>
      <p className="text-gray-700 mb-6 max-w-xl mx-auto">
        I'm open to internships and collaboration opportunities.
        Feel free to reach out!
      </p>
      <div className="flex justify-center gap-6 text-lg font-medium">
        <a
          href="mailto:steve.khanhnguyen@gmail.com"
          className="text-black hover:text-red-600 transition"
        >
          Email
        </a>
        <a
          href="https://github.com/darkha03"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-red-600 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/giakhanh-nguyen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-red-600 transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};
