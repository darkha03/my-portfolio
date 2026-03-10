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
      • Modeled domain entities with SQLAlchemy and managed schema evolution with Flask-Migrate (Alembic).
      • Styled responsive frontend using Bootstrap for mobile-friendly interface
      • Secured the infrastructure using an Nginx reverse proxy with HTTPS, maintained system stability with 73% unit test coverage.
      • Implemented Docker containerization (multi-stage builds) and established automated deployment pipelines via GitHub Actions to a VPS
      • Monitored application performance and reliability post-deployment with Grafana`,
    technologies: ["Python", "Flask", "PosgreSQL", "Docker", "GitHub Actions", "Nginx", "SQLAlchemy", "Grafana"],
    github: "https://github.com/darkha03/MyCount",
    demo: "https://mycount.online/",
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
      • Modélisation des entités métier avec SQLAlchemy et migrations Alembic
      • Frontend responsive avec Bootstrap
      • Sécurisation de l'infrastructure avec Nginx en reverse proxy HTTPS ; maintien de la stabilité du système avec 73% de couverture de tests unitaires.
      • Containerisation Docker (multi-stage builds) et pipelines de déploiement automatisés via GitHub Actions vers un VPS DigitalOcean
      • Surveillance des performances et de la fiabilité post-déploiement avec Grafana`,
      },
    },
  },
  {
    id: 6,
    title: "SCADA Cybersecurity Simulation",
    description: "A simulation environment to demonstrate cybersecurity attacks and defenses in SCADA systems.",
    details: `• Developed a SCADA system simulation using Python and Modbus protocol
      • Designed and deployed a complete cyber range environment using Ansible and Ludus
      • Created Docker container and custom Ansible roles to automate simulator setup
      • Led a multidisciplinary project team, defining target architecture, task distribution, and conducting code reviews to ensure project quality`,
    technologies: ["Python", "Modbus", "Cybersecurity", "Docker", "Ansible", "Ludus", "Infrastructure as Code", "Project Management"],
    github: "https://github.com/darkha03/Projet-System-Security",
    image: "/projects/project6.png",
    duration: "Nov 2025 - Jan 2026",
    translations: {
      fr: {
        title: "Simulation de cybersécurité SCADA",
        description: "Environnement de simulation pour démontrer les attaques et défenses en cybersécurité dans les systèmes SCADA.",
        details: `• Simulation de système SCADA avec Python et protocole Modbus
        • Conception et déploiement d'un environnement complet de cyber-entraînement utilisant Ansible et Ludus
        • Développement de conteneurs Docker et de rôles Ansible personnalisés pour automatiser la configuration du simulateur
        • Pilotage d'une équipe projet multidisciplinaire, définition de l'architecture cible, répartition des tâches, et réalisation de revues de code pour assurer la qualité du projet`,
      },
    },
  },
  {
    id: 7,
    title: "Kaggle Challenges",
    description: "Participated in various Kaggle competitions to apply machine learning techniques on real-world datasets.",
    details: `• Competed in multiple Kaggle competitions, applying machine learning algorithms to solve real-world problems
      • Utilized Python libraries such as Pandas, Scikit-learn, and XGBoost for data preprocessing, feature engineering, and model training
      • Analyzed datasets, handled missing values, and performed exploratory data analysis to gain insights
      • Achieved a overall 90% accuracy, demonstrating strong problem-solving and data science skills`,
    technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Machine Learning", "Data Analysis", "NumPy", "TensorFlow", "PyTorch", "Keras"],
    github: "https://github.com/darkha03/Kaggle_Challenges",
    image: "/projects/project7.png",
    duration: "2026 - Present",
    gallery: [
      "/projects/project7.png"
    ],
    translations: {
      fr: {
        title: "Défis Kaggle",
        description: "Participation à divers concours Kaggle pour appliquer des techniques de machine learning sur des datasets réels.",
        details: `• Participation à plusieurs compétitions Kaggle, appliquant des algorithmes de machine learning pour résoudre des problèmes réels
        • Utilisation de bibliothèques Python telles que Pandas, Scikit-learn, et XGBoost pour le prétraitement des données, l'ingénierie des fonctionnalités, et l'entraînement de modèles
        • Analyse des datasets, gestion des valeurs manquantes, et réalisation d'analyses exploratoires pour obtenir des insights
        •  Atteinte d'une précision globale de 90%, démontrant de solides compétences en résolution de problèmes et en data science`,
      },
    },
  },
  {
    id: 8,
    title: "Naruto Jutsu Detection",
    description: "A computer vision project to detect and classify Naruto jutsu hand signs using deep learning.",
    details: `• Developed a computer vision model to detect and classify Naruto jutsu hand signs using convolutional neural networks (CNNs)
      • Collected and annotated a dataset of hand sign images for training and evaluation
      • Implemented a prediction stabilization, and a stateful, error-tolerant sequence matcher to recognize from noisy frame predictions.
      • Optimized the detection pipeline to reduce latency up to 50% for low-latency (<30ms) performance`,
    technologies: ["Python", "TensorFlow", "Computer Vision", "Deep Learning", "YOLO", "OpenCV"],
    github: "https://github.com/darkha03/Naruto_Jutsu_Detection",
    image: "/projects/project8.png",
    duration: "2026 - Present",
    gallery: [
      "/projects/project8.png"
    ],
    translations: {
      fr: {
        title: "Détection de Jutsu Naruto",
        description: "Un projet de vision par ordinateur pour détecter et classifier les signes de main des jutsu de Naruto en utilisant le deep learning.",  
        details: `• Développement d'un modèle de vision par ordinateur pour détecter et classifier les signes de main des jutsu de Naruto en utilisant des réseaux de neurones convolutionnels (CNNs)
        • Collecte et annotation d'un dataset d'images de signes de main pour l'entraînement et l'évaluation
        • Implémentation d'une stabilisation des prédictions et d'un séquenceur à état, tolérant les erreurs pour reconnaître à partir de prédictions de frames bruitées.
        • Optimisation du pipeline de détection pour réduire la latence jusqu'à 50% afin d'obtenir des performances à faible latence (<30ms)`,
      },
    },
  }
];
