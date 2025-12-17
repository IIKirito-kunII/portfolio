export const PROJECTS = {
  smrs: {
    title: "Smart Medical Record System",

    // 1️⃣ One-line problem
    problem:
      "Managing medical records across hospitals and clinics is fragmented and insecure.",

    // 2️⃣ What YOU built (this is critical)
    contribution:
      "I built the complete frontend dashboard and backend APIs to securely upload, store, and view patient medical PDFs with authentication.",

    // 3️⃣ Tech (frontend + backend, but concise)
    tech: [
      "React (Vite)",
      "TailwindCSS",
      "Firebase Auth",
      "Node.js",
      "Express",
      "Firestore",
      "Multer",
      "Groq AI",
      "Render",
    ],

    // 4️⃣ Screenshots (order matters)
    screenshots: [
      "/finder/smrs-front.png", // home / auth
    ],

    // 5️⃣ Links
    github: "https://github.com/IIKirito-kunII/medical-frontend",
    backend: "https://github.com/IIKirito-kunII/medical-backend",
    live: "https://medical-frontend-three.vercel.app/",
  },
  leads: {
    title: "Leads Tracker",
    problem:
      "Quickly capture text, code, and active tabs without breaking browsing flow.",
    contribution:
      "Built a lightweight Chrome extension with keyboard-first interactions to save snippets and tabs instantly using Chrome APIs and persistent storage.",
    tech: [
      "JavaScript",
      "HTML5",
      "CSS",
      "Chrome APIs",
      "Manifest V3",
      "LocalStorage",
    ],
    screenshots: ["/finder/UI.png"],
    github: "https://github.com/IIKirito-kunII/leads-tracker-extension",
    live: null,
  },
  luminous: {
    title: "Luminous Quotes",
    problem:
      "Create an interactive experience where light, motion, and quotes respond to user interaction.",
    contribution:
      "Built an interactive lamp-based quote generator with GSAP-powered pull animations, dynamic theming using CSS variables, and real-time quotes fetched from an API.",
    tech: ["React", "GSAP", "CSS Variables", "API", "Netlify"],
    screenshots: ["/finder/lamp-on.png"],
    github: "https://github.com/IIKirito-kunII/lamp-quote",
    live: "https://lampquote.netlify.app",
  },
};

export const SKILL_FACES = [
  {
    title: "Frontend",
    color: "#00B7C3",
    items: ["React (Vite) ", "TypeScript", "JavaScript", "Tailwind", "GSAP"],
  },
  {
    title: "Backend & Database",
    color: "#10893E",
    items: ["Node.js", "Express", "MongoDB", "Supabase", "REST APIs"],
  },
  {
    title: "Tools & Workflow",
    color: "#744DA9",
    items: ["Git/GitHub", "Docker", "Chrome Ext", "n8n", "Vercel"],
  },
  {
    title: "Soft Skills",
    color: "#FFB900",
    items: ["Problem Solving", "Teamwork", "Communication", "Fast Learner"],
  },
];

export const certificates = [
  {
    id: 1,
    date: "DEC 2024",
    title: "Front End Development Libraries V8 ~ FreeCodeCamp",
    image:
      "/images/Lavish_Kumar_Varshney_Front_End_Development_Libraries_V8_Certification_FreeCodeCamp-1.png",
    link: "https://www.freecodecamp.org/certification/iikiritoii/front-end-development-libraries",
  },
  {
    id: 2,
    date: "AUG 2024",
    title: "JavaScript Algorithms and Data Structures V8 ~ FreeCodeCamp",
    image:
      "/images/Lavish_Kumar_Varshney_Legacy_JavaScript_Algorithms_and_Data_Structures_V8_Certification_FreeCodeCamp-1.png",
    link: "https://www.freecodecamp.org/certification/iikiritoii/javascript-algorithms-and-data-structures-v8",
  },
  {
    id: 3,
    date: "JUL 2024",
    title: "Legacy Responsive Web Design V8 ~ FreeCodeCamp",
    image:
      "/images/Lavish_Kumar_Varshney_Legacy_Responsive_Web_Design_V8_Certification_FreeCodeCamp-1.png",
    link: "https://www.freecodecamp.org/certification/iikiritoii/responsive-web-design",
  },
];
