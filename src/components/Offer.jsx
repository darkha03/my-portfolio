import { useI18n } from "../i18n";

export const Offer = () => {
  const { copy } = useI18n();

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto text-center" id="offer" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-red-600">{copy.offer.title}</h2>
      <p className="text-gray-700 mb-10">
        {copy.offer.subtitle}
      </p>
      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {copy.offer.services.map((service, idx) => (
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
