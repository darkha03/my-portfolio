import { createContext, useContext, useMemo, useState } from "react";

// Minimal translation store; extend here when adding new copy
const translations = {
  en: {
    meta: { title: "My Portfolio" },
    navbar: { home: "Home", projects: "Projects", contact: "Contact", languageLabel: "Language" },
    hero: {
      greeting: "Hello, I'm",
      nameHighlight: "Gia Khanh NGUYEN",
      description:
        "Informatic engineer student passionate about turning creative ideas into applications. Seeking internships to apply my skills and contribute to innovative projects.",
      aboutCta: "More About Me",
      cvCta: "Download My CV",
    },
    skills: {
      title: "Skills",
      subtitle: "Here are the technologies I work with:",
      categories: {
        programming: "Programming Languages",
        frameworks: "Frameworks & Libraries",
        tools: "Tools",
        databases: "Databases",
      },
    },
    whyHire: {
      title: "Why Hire Me?",
      subtitle: "Here’s why I’d be a great addition to your team:",
      reasons: [
        { title: "Reliable", description: "Consistently meet deadlines and deliver high-quality code." },
        { title: "Collaborative", description: "Great team player with excellent communication skills." },
        { title: "Problem Solver", description: "Enjoy tackling challenges with practical, clean solutions." },
        { title: "Eager to Learn", description: "Always learning new technologies and improving my craft." },
      ],
    },
    offer: {
      title: "What I Offer",
      subtitle: "Here's how I can help bring your ideas to life:",
      services: [
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
      ],
    },
    education: {
      title: "Education",
      subtitle: "Here's a timeline of my educational journey:",
      startLabel: "Start",
      continueLabel: "Continue",
      certificateCta: "View Certificate",
    },
    projects: {
      title: "Projects",
      subtitle: "Click a project to view more details.",
      durationLabel: "Duration:",
      github: "GitHub",
      liveDemo: "Live Demo",
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "I'm open to internships and collaboration opportunities. Feel free to reach out!",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
  fr: {
    meta: { title: "Mon Portfolio" },
    navbar: { home: "Accueil", projects: "Projets", contact: "Contact", languageLabel: "Langue" },
    hero: {
      greeting: "Bonjour, je suis",
      nameHighlight: "Gia Khanh NGUYEN",
      description:
        "Étudiant ingénieur en informatique, passionné par la création d'applications. Je cherche un stage pour appliquer mes compétences et contribuer à des projets innovants.",
      aboutCta: "En savoir plus",
      cvCta: "Télécharger mon CV",
    },
    skills: {
      title: "Compétences",
      subtitle: "Voici les technologies que j'utilise :",
      categories: {
        programming: "Langages de programmation",
        frameworks: "Frameworks et bibliothèques",
        tools: "Outils",
        databases: "Bases de données",
      },
    },
    whyHire: {
      title: "Pourquoi me recruter ?",
      subtitle: "Voici pourquoi je serais un atout pour votre équipe :",
      reasons: [
        { title: "Fiable", description: "Respect des délais et code de qualité." },
        { title: "Collaboratif", description: "Excellent travail en équipe avec une communication claire." },
        { title: "Résolveur de problèmes", description: "J'aime relever les défis avec des solutions simples et propres." },
        { title: "Curieux", description: "Toujours en apprentissage de nouvelles technologies." },
      ],
    },
    offer: {
      title: "Ce que je propose",
      subtitle: "Voici comment je peux concrétiser vos idées :",
      services: [
        {
          title: "Développement Frontend",
          description: "Interfaces réactives et interactives avec React, TailwindCSS et le duo HTML/CSS.",
        },
        {
          title: "Développement Backend",
          description: "Backends évolutifs avec Node.js, Express, Flask et intégration base de données.",
        },
        {
          title: "Design UI/UX",
          description: "Interfaces modernes, épurées et accessibles pour une bonne expérience utilisateur.",
        },
      ],
    },
    education: {
      title: "Formation",
      subtitle: "Mon parcours académique en un coup d'œil :",
      startLabel: "Début",
      continueLabel: "À suivre",
      certificateCta: "Voir le certificat",
    },
    projects: {
      title: "Projets",
      subtitle: "Cliquez sur un projet pour en voir plus.",
      durationLabel: "Durée :",
      github: "GitHub",
      liveDemo: "Démo en ligne",
    },
    contact: {
      title: "Travaillons ensemble",
      subtitle: "Ouvert aux stages et collaborations. Contactez-moi !",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
};

const I18nContext = createContext({ lang: "en", setLang: () => {}, copy: translations.en });

const getNested = (obj, path) => path.split(".").reduce((acc, key) => acc?.[key], obj);

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const value = useMemo(() => {
    const copy = translations[lang] ?? translations.en;
    return {
      lang,
      setLang,
      copy,
      t: (path) => getNested(copy, path) ?? getNested(translations.en, path) ?? path,
    };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);
