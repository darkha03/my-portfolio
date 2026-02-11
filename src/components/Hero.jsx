import { useI18n } from "../i18n";

export const Hero = () => {
  const { copy } = useI18n();

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
            {copy.hero.greeting} <span className="text-red-600">{copy.hero.nameHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6">
            {copy.hero.description}
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#skills"
              className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-black transition duration-300 inline-block"
            >
              {copy.hero.aboutCta}
            </a>
            <a
              href="/cv/CV_NguyenGiaKhanh.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-red-600 text-red-600 hover:bg-red-50 transition"
            >
              {copy.hero.cvCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
