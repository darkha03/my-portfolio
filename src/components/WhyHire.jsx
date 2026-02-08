import { useI18n } from "../i18n";

export const WhyHire = () => {
  const { copy } = useI18n();

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto text-center" id="why-hire" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-red-600">{copy.whyHire.title}</h2>
      <p className="text-gray-700 mb-10">
        {copy.whyHire.subtitle}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {copy.whyHire.reasons.map((item, idx) => (
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
