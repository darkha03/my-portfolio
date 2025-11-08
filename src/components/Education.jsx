import { useEffect, useRef, useState } from "react";
import { educationData } from "../data/educationData";

export const Education = () => {
  const [fillPercent, setFillPercent] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showAllDetails, setShowAllDetails] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!shouldAnimate) return;
    let percent = 0;
    let idx = -1;
    const interval = setInterval(() => {
      percent += 2;
      if (percent > 100) percent = 100;
      setFillPercent(percent);
      // Activate next timestamp as fill passes it
      const step = 100 / (educationData.length - 1);
      const newIdx = Math.floor(percent / step);
      if (newIdx !== idx) {
        idx = newIdx;
        setActiveIndex(idx);
      }
      if (percent === 100) {
        clearInterval(interval);
        setShowAllDetails(true);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [shouldAnimate]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6 max-w-5xl mx-auto text-center" id="education">
      <h2 className="text-3xl font-bold mb-36 text-red-600">Education</h2>
      {/* Mobile: vertical timeline with alternating left/right details */}
      <div className="md:hidden relative w-full max-w-md mx-auto">
        {/* "Start" label above timeline */}
        <div className="text-center mb-6">
          <span className="text-sm font-bold text-red-600">Start</span>
        </div>
        {/* 3-column grid: left details | timeline | right details */}

        <div className="grid grid-cols-[1fr_auto_1fr] gap-x-4 gap-y-12 relative">
          {/* Continuous vertical line background spanning all rows */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-300 rounded-full -translate-x-1/2" style={{ gridRow: '1 / -1' }} />
          {/* Animated fill spanning all rows */}
          <div
            className="absolute top-0 left-1/2 w-1 bg-red-500 rounded-full transition-all duration-300 -translate-x-1/2"
            style={{ height: `${fillPercent}%` }}
          />
          
          {/* Each row contains: left/right detail, center dot+year */}
          {educationData.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            const isLastRow = idx === educationData.length - 1;
            return (
              <>
                {/* Detail column (left or right) */}
                {(showAllDetails || idx <= activeIndex) && item.label != null && (
                  <div
                    key={`detail-${idx}`}
                    className={`relative ${isLeft ? 'col-start-1 text-right' : 'col-start-3 text-left'}`}
                    style={{ gridRow: idx + 1, minHeight: isLastRow ? 'auto' : '80px' }}
                  >
                    {/* Horizontal connector line from timeline to detail */}
                    <span
                      className={`absolute top-2 h-[2px] bg-red-500 ${
                        isLeft ? 'right-0 w-4' : 'left-0 w-4'
                      }`}
                    />
                    {/* Detail content */}
                    <div className={`${isLeft ? 'pr-6' : 'pl-6'}`}>
                      <div className={`text-xs font-bold mb-1 ${idx <= activeIndex ? 'text-red-600' : 'text-gray-400'}`}>
                        {item.year}
                      </div>
                      <div className="font-semibold text-red-600 text-sm">{item.label}</div>
                      <div className="text-gray-700 text-xs leading-snug">{item.details}</div>
                    </div>
                  </div>
                )}
                
                {/* Center timeline dot */}
                <div
                  key={`dot-${idx}`}
                  className="col-start-2 relative flex items-start justify-center"
                  style={{ gridRow: idx + 1, minHeight: isLastRow ? 'auto' : '80px' }}
                >
                  <span
                    className={`w-4 h-4 rounded-full border-2 transition-all z-10 bg-white ${
                      idx <= activeIndex ? 'bg-red-500 border-red-600' : 'border-gray-400'
                    }`}
                  />
                </div>
              </>
            );
          })}
        </div>
        {/* "Continue" label below timeline */}
        <div className="text-center mt-6">
          <span className="text-sm font-bold text-red-600">Continue</span>
        </div>
      </div>
      {/* Desktop: existing horizontal timeline */}
      <div className="hidden md:flex md:flex-col md:items-center">
        {/* Timeline */}
        <div className="relative w-full max-w-5xl h-2 bg-gray-300 rounded-full mb-16" ref={timelineRef}>
          <div
            className="absolute left-4 top-0 h-2 bg-red-500 rounded-full transition-all duration-300"
            style={{ width: `${fillPercent}%` }}
          />
          {/* Timestamps */}
          {educationData.map((item, idx) => {
            const step = 100 / (educationData.length - 1);
            const left = `${idx * step}%`;
            return (
              <div
                key={idx}
                className="absolute -top-2 flex flex-col items-center"
                style={{ left }}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    idx <= activeIndex ? "bg-red-500 border-red-600 text-white" : "bg-white border-gray-400 text-gray-400"
                  }`}
                />
                <div className={`mt-2 text-xs font-bold ${idx <= activeIndex ? "text-red-600" : "text-gray-400"}`}>{item.year}</div>
              </div>
            );
          })}
        </div>
        {/* Alternating details with connector lines from timeline dots */}
        <div className="relative w-full max-w-5xl overflow-visible" style={{ minHeight: '220px' }}>
          {educationData.map((item, idx) => {
            const step = 100 / (educationData.length - 1);
            const left = `${idx * step}%`;
            const isAbove = idx % 2 === 1; // alternate above/below
            if ((showAllDetails || idx <= activeIndex) && item.label != null) {
              return (
                <div
                  key={idx}
                  className="absolute"
                  style={{ left, top: isAbove ? -150 : -10 }}
                >
                  {/* Connector line slightly to the right of the dot */}
                  <span
                    className={`absolute left-4 w-[2px] bg-red-500 ${
                      isAbove ? 'bottom-[-24px] h-16' : 'top-[-4px] h-20'
                    }`}
                  />
                  {/* Text content to the right of the connector */}
                  <div className={`${isAbove ? '' : 'top-[-20px]'} ml-6 text-left min-w-[220px] max-w-sm`}
                  >
                    <div className="font-semibold text-red-600">{item.label}</div>
                    <div className="text-gray-700 text-sm leading-snug">{item.details}</div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
