// Projects data for portfolio
export const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with React and TailwindCSS.",
    details: `This project includes smooth scrolling, responsive design, and component structure. It uses Vite for development and is deployed on Vercel.`,
    technologies: ["React", "TailwindCSS", "Vite", "Vercel"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio-site.com",
  image: "/projects/project1.jpg",
  duration: "Jan 2024 - Mar 2024"
  },
  {
    id: 2,
    title: "Kichen Chaos Clone",
    description: "A Unity learning project recreating the core mechanics of the game Kitchen Chaos.",
    details: `Built in Unity using C#. Features include multiplayer support, various kitchen environments, and cooperative gameplay mechanics. A small Unity learning project following Code Monkey Kitchen Chaos tutorial: https://youtu.be/AmGSEH7QcDg.`,
    technologies: ["Unity", "C#", "Game Development"],
    github: "https://github.com/darkha03/KitchenChaosClone",
    demo: "https://darkha03.itch.io/kichen-chaos-clone",
  image: "/projects/project2.png",
  duration: "Mar 2024 - Aug 2024",
    gallery: [
      "projects/project2.png",
      "/projects/project2-screen1.png",
      "/projects/project2-screen2.png",
      "/projects/project2-screen3.png",
      "/projects/project2-screen4.png"
    ]
  },
  {
    id: 3,
    title: "Wall Street Game",
    description: "An online stategy game for 2 players or with AI opponents.",
    details: `Implements routes for users, authentication, and content. 
              MongoDB stores data. Used in multiple frontend projects.`,
    technologies: ["FastAPI", "Python", "React", "REST API"],
    github: "https://github.com/thanhtulearncode/Projet_App",
    demo: "https://wall-street-game.vercel.app/",
  image: "/projects/project3.png",
  duration: "Jun 2025",
    gallery: [
      "/projects/project3.png",
      "/projects/project3-screen1.png",
      "/projects/project3-screen2.png",
      "/projects/project3-screen3.png"
    ]
  }
];
