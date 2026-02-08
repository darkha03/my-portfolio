// Projects data for portfolio
export const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with React and TailwindCSS.",
    details: `• Designed and implemented a responsive portfolio website using React and TailwindCSS
      • Integrated smooth scrolling navigation and component-based architecture
      • Set up Vite for fast development and hot module replacement
      • Deployed the application on Vercel with CI/CD pipeline`,
    technologies: ["React", "TailwindCSS", "Vite", "Vercel"],
    github: "https://github.com/darkha03/my-portfolio",
    demo: "https://www.giakhanhnguyen.dev",
    image: "/projects/project1.png",
    duration: "Oct 2025 - Nov 2025",
    translations: {
      fr: {
        title: "Site portfolio",
        description: "Un portfolio personnel construit avec React et TailwindCSS.",
        details: `• Conception et implémentation d'un portfolio responsive avec React et TailwindCSS
      • Navigation fluide par ancrage et architecture en composants
      • Configuration de Vite pour un développement rapide et le hot reload
      • Déploiement sur Vercel avec pipeline CI/CD`,
      },
    },
  },
  {
    id: 2,
    title: "Kichen Chaos Clone",
    description: "A Unity learning project recreating the core mechanics of the game Kitchen Chaos.",
    details: `• Followed Code Monkey Kitchen Chaos tutorial to learn Unity game development fundamentals
      • Created various kitchen environments with interactive objects and props
      • Built game logic using C# scripts for player movement, cooking mechanics, and scoring
      • Tested and debugged gameplay features to ensure smooth multiplayer experience`,
    technologies: ["Unity", "C#", "Game Development"],
    github: "https://github.com/darkha03/KitchenChaosClone",
    demo: "https://darkha03.itch.io/kichen-chaos-clone",
    image: "/projects/project2.png",
    duration: "Mar 2025 - Aug 2025",
    gallery: [
      "projects/project2.png",
      "/projects/project2-screen1.png",
      "/projects/project2-screen2.png",
      "/projects/project2-screen3.png",
      "/projects/project2-screen4.png",
    ],
    translations: {
      fr: {
        title: "Clone de Kitchen Chaos",
        description: "Projet d'apprentissage Unity qui recrée les mécaniques du jeu Kitchen Chaos.",
        details: `• Suivi du tutoriel Code Monkey pour apprendre les bases du développement Unity
      • Création d'environnements de cuisine avec objets et accessoires interactifs
      • Logique de jeu en C# pour les déplacements, la cuisine et le scoring
      • Tests et débogage des fonctionnalités pour assurer une expérience multijoueur fluide`,
      },
    },
  },
  {
    id: 3,
    title: "Wall Street Game",
    description: "An online stategy game for 2 players or with AI opponents.",
    details: `• Designed and developed a strategic online multiplayer game for 2 players
      • Implemented AI opponents with different difficulty levels for single-player mode
      • Built RESTful API endpoints using FastAPI for game logic and player actions
      • Created responsive frontend interface with React for smooth gameplay
      • Deployed full-stack application with proper error handling and validation`,
    technologies: ["FastAPI", "Python", "React", "REST API"],
    github: "https://github.com/thanhtulearncode/Projet_App",
    demo: "https://wall-street-game.vercel.app/",
    image: "/projects/project3.png",
    duration: "Jun 2025 - Jun 2025",
    gallery: [
      "/projects/project3.png",
      "/projects/project3-screen1.png",
      "/projects/project3-screen2.png",
      "/projects/project3-screen3.png",
    ],
    translations: {
      fr: {
        title: "Wall Street Game",
        description: "Jeu de stratégie en ligne pour 2 joueurs ou avec une IA.",
        details: `• Conception et développement d'un jeu de stratégie multijoueur en ligne
      • IA avec plusieurs niveaux de difficulté pour le mode solo
      • API REST avec FastAPI pour la logique de jeu et les actions des joueurs
      • Interface responsive React pour une expérience fluide
      • Déploiement full-stack avec gestion des erreurs et validations`,
      },
    },
  },
  {
    id: 4,
    title: "Distance Love App",
    description: "A mobile app to help long-distance couples stay connected.",
    details: `• Developed cross-platform mobile application using React Native and Expo
      • Created status update with Socket.io for instant updates
      • Integrated push notifications for reminders and messages
      • Set up PostgreSQL database for user data and relationship information
      • Implemented native modules for device-specific features
      • Designed intuitive UI/UX to enhance user experience for couples`,
    technologies: ["React Native", "Node.js", "Expo", "PostgreSQL", "Socket.io", "Native Modules"],
    github: "https://github.com/darkha03/distanceApp",
    image: "/projects/project4.png",
    duration: "Sep 2025 - Nov 2025",
    gallery: [
      "/projects/project4.png",
      "/projects/project4-screen1.png",
      "/projects/project4-screen2.png",
      "/projects/project4-screen3.png",
      "/projects/project4-screen4.png",
      "/projects/project4-screen5.png",
    ],
    translations: {
      fr: {
        title: "Distance Love App",
        description: "Application mobile pour aider les couples à distance à rester connectés.",
        details: `• Application mobile multiplateforme avec React Native et Expo
      • Statuts en temps réel via Socket.io pour des mises à jour instantanées
      • Notifications push pour rappels et messages
      • Base PostgreSQL pour les données utilisateurs et relations
      • Modules natifs pour des fonctionnalités spécifiques aux appareils
      • UI/UX intuitive pour améliorer l'expérience des couples`,
      },
    },
  },
  {
    id: 5,
    title: "My Count",
    description: "A website to help users track their expenses and manage plans with groups.",
    details: `• Built full-stack web application using Python Flask framework
      • Designed and implemented MySQL database schema for expense tracking
      • Modeled domain entities with SQLAlchemy and managed schema evolution with Flask-Migrate (Alembic).
      • Styled responsive frontend using Bootstrap for mobile-friendly interface
      • Create CI/CD pipeline for automated testing and deployment`,
    technologies: ["Python", "Flask", "MySQL", "Bootstrap", "SQLAlchemy"],
    github: "https://github.com/darkha03/MyCount",
    demo: "https://darkha03.pythonanywhere.com/",
    image: "/projects/project5.png",
    duration: "Aug 2025 - Nov 2025",
    gallery: [
      "/projects/project5.png",
      "/projects/project5-screen1.png",
      "/projects/project5-screen2.png",
      "/projects/project5-screen3.png",
      "/projects/project5-screen4.png",
      "/projects/project5-screen5.png",
    ],
    translations: {
      fr: {
        title: "My Count",
        description: "Site web pour suivre ses dépenses et gérer des plans en groupe.",
        details: `• Application web full-stack avec Flask
      • Schéma MySQL pensé pour le suivi des dépenses
      • Modélisation des entités métier avec SQLAlchemy et migrations Alembic
      • Frontend responsive avec Bootstrap
      • Pipeline CI/CD pour les tests et le déploiement automatisés`,
      },
    },
  },
];
