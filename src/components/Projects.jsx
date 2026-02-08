import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { projectsData } from "../data/projectsData";
import { X, ExternalLink, Github } from "lucide-react";
import { useI18n } from "../i18n";

export const Projects = () => {
  const { copy, lang } = useI18n();
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [thumbStart, setThumbStart] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset to first image
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  // Auto-cycle through gallery images every 5 seconds
  useEffect(() => {
    if (!selectedProject || !selectedProject.gallery) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev >= selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [selectedProject]);

  // Close on ESC and lock background scroll when modal is open
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  // Reset thumbnail zone when modal opens or image changes
  useEffect(() => {
    setThumbStart(
      selectedProject && selectedProject.gallery
        ? Math.max(Math.min(currentImageIndex, selectedProject.gallery.length - 3), 0)
        : 0
    );
  }, [selectedProject, currentImageIndex]);

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto text-center" id="projects" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-red-600">{copy.projects.title}</h2>
      <p className="text-gray-700 mb-10">{copy.projects.subtitle}</p>

      <div className="grid gap-6 md:grid-cols-2 grid-cols-1 text-left">
        {projectsData.map((project) => {
          const localized = project.translations?.[lang] ?? {};
          const title = localized.title ?? project.title;
          const description = localized.description ?? project.description;
          return (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="border border-black rounded-xl p-4 cursor-pointer hover:shadow-lg transition transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-700">{description}</p>
              {project.technologies && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      

      {/* Modal */}
      {selectedProject && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden"
            style={{ maxHeight: "85vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 p-2 rounded-full text-gray-600 hover:text-red-600 hover:bg-red-50 transition"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            {/* Content */}
            <div className="grid md:grid-cols-3 gap-6 p-6 overflow-y-auto" style={{ maxHeight: "85vh" }}>
              {/* Left: Image + Gallery */}
              <div className="md:col-span-1 flex flex-col gap-3">
                {/* Main Image */}
                <div className="w-full h-48 md:h-64 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
                  {selectedProject.gallery ? (
                    <img
                      src={selectedProject.gallery[currentImageIndex]}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain transition-opacity duration-500"
                    />
                  ) : selectedProject.image ? (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200" />
                  )}
                </div>

                {/* Gallery Carousel */}
                {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                  <div className="relative w-full mt-2">
                    {/* Prev Button */}
                    <button
                      onClick={() => {
                        setCurrentImageIndex(
                          currentImageIndex === 0
                            ? selectedProject.gallery.length - 1
                            : currentImageIndex - 1
                        );
                        setThumbStart(
                          thumbStart === 0
                            ? Math.max(selectedProject.gallery.length - 3, 0)
                            : thumbStart - 1
                        );
                      }}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-red-100 text-red-600 rounded-full p-2 shadow transition"
                      aria-label="Previous image"
                      style={{ marginLeft: '4px' }}
                    >
                      &#8592;
                    </button>
                    {/* Next Button */}
                    <button
                      onClick={() => {
                        setCurrentImageIndex(
                          currentImageIndex === selectedProject.gallery.length - 1
                            ? 0
                            : currentImageIndex + 1
                        );
                        setThumbStart(
                          thumbStart === Math.max(selectedProject.gallery.length - 3, 0)
                            ? 0
                            : thumbStart + 1
                        );
                      }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-red-100 text-red-600 rounded-full p-2 shadow transition"
                      aria-label="Next image"
                      style={{ marginRight: '4px' }}
                    >
                      &#8594;
                    </button>
                    {/* Thumbnails Zone */}
                    <div className="flex justify-center gap-2 pt-2 overflow-hidden">
                      {selectedProject.gallery
                        .slice(thumbStart, thumbStart + 3)
                        .map((img, idx) => {
                          const realIdx = thumbStart + idx;
                          return (
                            <button
                              key={realIdx}
                              onClick={() => setCurrentImageIndex(realIdx)}
                              className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all bg-gray-50 ${
                                realIdx === currentImageIndex
                                  ? "border-red-600 ring-2 ring-red-200"
                                  : "border-gray-300 hover:border-red-400"
                              }`}
                              aria-label={`Go to image ${realIdx + 1}`}
                            >
                              <img
                                src={img}
                                alt={`Thumbnail ${realIdx + 1}`}
                                className="absolute inset-0 w-full h-full object-contain p-0.5"
                              />
                            </button>
                          );
                        })}
                    </div>
                  </div>
                )}

              </div>

              {/* Right: Title + Details */}
              <div className="md:col-span-2 flex flex-col">
                {(() => {
                  const localized = selectedProject.translations?.[lang] ?? {};
                  const title = localized.title ?? selectedProject.title;
                  const description = localized.description ?? selectedProject.description;
                  const details = localized.details ?? selectedProject.details;
                  return (
                    <>
                      <h3 id="project-modal-title" className="text-2xl font-bold text-red-600 mb-2">
                        {title}
                      </h3>
                      {selectedProject.duration && (
                        <div className="text-sm text-gray-500 mb-2">
                          <span className="font-semibold">{copy.projects.durationLabel}</span> {selectedProject.duration}
                        </div>
                      )}
                      <p className="text-gray-700 mb-4">{description}</p>
                      <div className="text-gray-800 leading-relaxed whitespace-pre-line flex-1">
                        {details}
                      </div>
                    </>
                  );
                })()}

                {/* Footer: Tech + Buttons */}
                <div className="mt-6 border-t pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                      selectedProject.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))
                    )}
                  </div>
                  {/* Action buttons */}
                  <div className="flex gap-3 justify-end">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black transition"
                    >
                      <Github size={18} /> {copy.projects.github}
                    </a>
                    {selectedProject.demo && selectedProject.demo !== "#" && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-red-600 text-red-600 hover:bg-red-50 transition"
                      >
                        <ExternalLink size={18} /> {copy.projects.liveDemo}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
