import { useI18n } from "../i18n";

export const Contact = () => {
  const { copy } = useI18n();
  return (
    <div className="py-16 px-6 text-center" id="contacts" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-red-600">{copy.contact.title}</h2>
      <p className="text-gray-700 mb-6 max-w-xl mx-auto">
        {copy.contact.subtitle}
      </p>
      <div className="flex justify-center gap-6 text-lg font-medium">
        <a
          href="mailto:steve.khanhnguyen@gmail.com"
          className="text-black hover:text-red-600 transition"
        >
          {copy.contact.email}
        </a>
        <a
          href="https://github.com/darkha03"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-red-600 transition"
        >
          {copy.contact.github}
        </a>
        <a
          href="https://linkedin.com/in/giakhanh-nguyen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-red-600 transition"
        >
          {copy.contact.linkedin}
        </a>
      </div>
    </div>
  );
};
