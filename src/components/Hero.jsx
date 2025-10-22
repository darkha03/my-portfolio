export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4" id="hero" data-aos="fade-up">
      <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
        Hello, I'm <span className="text-red-600">Gia Khanh NGUYEN</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6">
        A passionate developer building clean, modern, and responsive websites.
      </p>
      <a
        href="#contacts"
        className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-black transition duration-300"
      >
        Let's Work Together
      </a>
    </div>
  );
};
