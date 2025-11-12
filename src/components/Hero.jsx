export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-4" id="hero" data-aos="fade-up">
      <div className="max-w-5xl mx-auto w-full md:grid md:grid-cols-2 gap-8 items-center">
        {/* Left: avatar */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src="/avartar/avatar.png"
            alt="Avatar"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-red-600 shadow-lg"
          />
        </div>

        {/* Right: introduction */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Hello, I'm <span className="text-red-600">Gia Khanh NGUYEN</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6">
            Informatic engineer student passionate about turning creative ideas into applications. Seeking internships to apply my skills and contribute to innovative projects.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#skills"
              className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-black transition duration-300 inline-block"
            >
              More About Me
            </a>
            <a
              href="/cv/GiaKhanh_Nguyen_CV.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-red-600 text-red-600 hover:bg-red-50 transition"
            >
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
