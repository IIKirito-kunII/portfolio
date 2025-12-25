export const wallpapers = [
  "/images/wall1.png",
  "/images/wall2.jpg",
  "/images/wall3.jpg",
];
const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];
const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
    type: "music",
    canOpen: true,
  },
  {
    id: 2,
    img: "/icons/search.svg",
    type: "safari",
    canOpen: true,
  },
  {
    id: 3,
    img: "/icons/user.svg",
    type: "github",
    canOpen: true,
  },
  {
    id: 4,
    img: "/icons/mode.svg",
    type: "finder",
    canOpen: true,
  },
];
const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Certificates", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];
const certificates = [
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
const techStack = [
  {
    category: "Frontend",
    items: ["HTML5", "React.js", "TypeScript", "JavaScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Python"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Supabase"],
  },
  {
    category: "Styling",
    items: ["CSS3", "Tailwind CSS"],
  },
  {
    category: "Animation",
    items: ["GSAP"],
  },
  {
    category: "Automation",
    items: ["n8n"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];
const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/IIKirito-kunII",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/lavish-kumar-varshney-32b141222/",
  },
];
const LIBRARY_GALLERY = {
  id: 1,
  icon: "/icons/gicon1.svg",
  title: "Library",
  children: [
    {
      id: 1,
      img: "/gallery/education.png",
    },
    {
      id: 2,
      img: "/gallery/t.jpeg",
    },
    {
      id: 3,
      img: "/gallery/t1.jpeg",
    },
  ],
};
const MEMORIES_GALLERY = {
  id: 2,
  icon: "/icons/gicon2.svg",
  title: "Memories",
  children: [
    {
      id: 1,
      img: "/gallery/m1.jpeg",
    },
    {
      id: 2,
      img: "/gallery/m2.jpeg",
    },
    {
      id: 3,
      img: "/gallery/m3.jpeg",
    },
  ],
};
const PLACES_GALLERY = {
  id: 3,
  icon: "/icons/file.svg",
  title: "Places",
  children: [
    {
      id: 1,
      img: "/gallery/c1.png",
    },
    {
      id: 2,
      img: "/gallery/c2.png",
    },
    {
      id: 3,
      img: "/gallery/v.jpeg",
    },
    {
      id: 4,
      img: "/gallery/v1.jpeg",
    },
    {
      id: 5,
      img: "/gallery/v2.jpeg",
    },
  ],
};
const PEOPLE_GALLERY = {
  id: 4,
  icon: "/icons/gicon4.svg",
  title: "People",
  children: [
    {
      id: 1,
      img: "/gallery/p.jpeg",
    },
  ],
};
const FAVORITES_GALLERY = {
  id: 5,
  icon: "/icons/gicon5.svg",
  title: "Favorites",
  children: [
    {
      id: 1,
      img: "/gallery/s.jpeg",
    },
    {
      id: 2,
      img: "/gallery/s1.webp",
    },
    {
      id: 3,
      img: "/gallery/s2.jpeg",
    },
  ],
};
const songs = [
  {
    id: 1,
    title: "I Really Want to Stay at Your House",
    src: "/audio/lucysong.mp3",
    cover: "/audioimg/lucysong.jpg",
  },
  {
    id: 2,
    title: "City Ruins - Rays of Light",
    src: "/audio/City Ruins - Rays of Light (NieR_Automata Original Soundtrack)Audio.mp3",
    cover: "/audioimg/city.webp",
  },
  {
    id: 3,
    title: "Feel It",
    src: "/audio/feelit.mp3",
    cover: "/audioimg/feelit.jpg",
  },
  {
    id: 4,
    title: "Ma Meilleure Ennemie",
    src: "/audio/arcane.mp3",
    cover: "/audioimg/arcane.jpg",
  },
  {
    id: 5,
    title: "Fire Again",
    src: "/audio/fireagain.mp3",
    cover: "/audioimg/fireagain.jpg",
  },
  {
    id: 6,
    title: "Die For You",
    src: "/audio/dieforyou.mp3",
    cover: "/audioimg/dieforyou.jpg",
  },
  {
    id: 7,
    title: "Ticking Away",
    src: "/audio/Ticking Away.mp3",
    cover: "/audioimg/tickingAway.jpg",
  },
  {
    id: 8,
    title: "Be a flower",
    src: "/audio/Be a flower.mp3",
    cover: "/audioimg/maomao.jpg",
  },
  {
    id: 9,
    title: "Anytime Anywhere",
    src: "/audio/Anytime Anywhere.mp3",
    cover: "/audioimg/anytimeanywhere.jpg",
  },
  {
    id: 10,
    title: "The Path to Becoming a Hero",
    src: "/audio/The Path to Becoming a Hero.mp3",
    cover: "/audioimg/miyabi.jpg",
  },
  {
    id: 11,
    title: "Dandelion",
    src: "/audio/Dandelion.mp3",
    cover: "/audioimg/dandelion.jpg",
  },
  {
    id: 12,
    title: "Odoriko",
    src: "/audio/odoriko.mp3",
    cover: "/audioimg/odorika.jpg",
  },
];
export {
  navLinks,
  navIcons,
  dockApps,
  certificates,
  techStack,
  socials,
  songs,
};
const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Smart Medical Record System [SMRS]",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "README.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-15 left-25",
          description: [
            "👨🏻‍💻 Smart Medical Record System [SMRS]",
            "A full-stack platform to securely upload, store, manage, and view medical PDF records using React, Firebase, and Render.",
            "🚀 Backend Features",
            "| PDF upload & validation | Secure file storage | Firestore integration | Firebase Auth | REST endpoints | Env variables | CORS enabled | Production deployment |",
            "🧩 Backend Tech Stack",
            "| Node.js | Express.js | Firebase | Firestore | Multer (file uploads) | dotenv | Render |",
            "🚀 Frontend Features",
            "| Firebase Authentication | Upload & manage PDFs | Fetch + display records | PDF preview | Responsive UI | Env variable support | Hosted on Vercel |",
            "🧩 Frontend Tech Stack",
            "| React (Vite) | Firebase Auth | TailwindCSS | CSS | Vercel |",
          ],
        },
        {
          id: 2,
          name: "Live Project",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://medical-frontend-three.vercel.app",
          position: "top-15 left-95",
        },
        {
          id: 3,
          name: "SMRS Home page",
          icon: "/finder/smrs-front.png",
          kind: "file",
          fileType: "img",
          position: "top-55 left-40",
          imageUrl: "/finder/smrs-front.png",
        },
        {
          id: 4,
          name: "SMRS Dashboard",
          icon: "/finder/smrs.png",
          kind: "file",
          fileType: "img",
          position: "top-25 left-55",
          imageUrl: "/finder/smrs.png",
        },
        {
          id: 5,
          name: "SMRS Frontend Source Code Repo",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/IIKirito-kunII/medical-frontend",
          position: "top-50 left-85",
        },
        {
          id: 6,
          name: "SMRS Backend Source Code Repo",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/IIKirito-kunII/medical-backend",
          position: "top-40 left-5",
        },
      ],
    },
    // ▶ Project 2
    {
      id: 6,
      name: "Leads Tracker – Lightweight Chrome Extension",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-20",
      windowPosition: "top-[20vh] left-5",
      children: [
        {
          id: 1,
          name: "README.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-15 left-10",
          description: [
            "👨🏻‍💻 Leads Tracker – Lightweight Chrome Extension",
            "A minimal, fast Chrome extension to save text snippets, code, and current tabs instantly | Designed for developers, students, researchers, and anyone who needs quick browser-based note storage",
            "🌟 Features",
            "| Save any text or code instantly | One-click Save Current Tab | Copy to clipboard | Delete single items | Delete all (double click) | Smart keyboard shortcuts | Auto-save using localStorage |",
            "⌨️ Keyboard Shortcuts",
            "| Ctrl/Cmd + Enter → Save input | Arrow Down ↓ → Save current tab | Arrow Up ↑ → Delete last item |",
            "🛠️ How It Works",
            "| Built with Manifest V3 | Uses chrome.tabs API | Uses localStorage for persistence | Lead objects stored under localStorage.myLeads | Type can be 'text' or 'tab' |",
          ],
        },
        {
          id: 2,
          name: "Leads Tracker UI",
          icon: "/finder/UI.png",
          kind: "file",
          fileType: "img",
          position: "top-30 left-50",
          imageUrl: "/finder/UI.png",
        },
        {
          id: 3,
          name: "Leads Tracker Source Code Repo",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/IIKirito-kunII/leads-tracker-extension",
          position: "top-50 left-5",
        },
      ],
    },
    // ▶ Project 3
    {
      id: 7,
      name: "Luminous Quotes – Interactive Lamp & Quote Generator",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[40vh] left-5",
      children: [
        {
          id: 1,
          name: "README.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-30 left-85",
          description: [
            "👨🏻‍💻 Luminous Quotes – Interactive Lamp & Quote Generator",
            "An interactive React + GSAP project where pulling a lamp cord toggles the light and displays inspirational quotes | Smooth animations, dynamic glow colors, and a playful UI experience",
            "🎨 Overview",
            "| Built with React | GSAP animations | Quote API integration | CSS variable theming | Twitter sharing | Fully responsive UI |",
            "✨ Features",
            "| Interactive lamp cord toggle | Random inspirational quotes | Dynamic glow color palette | Share quotes on Twitter | Mobile + Desktop responsive |",
            "🛠️ Technologies Used",
            "| React | GSAP | CSS Variables | Fetch API | React Icons | Netlify Deployment |",
          ],
        },
        {
          id: 2,
          name: "Live Project",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://lampquote.netlify.app",
          position: "top-10 left-20",
        },
        {
          id: 3,
          name: "Lamp-off UI",
          icon: "/finder/lamp-off.png",
          kind: "file",
          fileType: "img",
          position: "top-25 left-50",
          imageUrl: "/finder/lamp-off.png",
        },
        {
          id: 4,
          name: "Lamp-on UI",
          icon: "/finder/lamp-on.png",
          kind: "file",
          fileType: "img",
          position: "top-50 left-20",
          imageUrl: "/finder/lamp-on.png",
        },
        {
          id: 5,
          name: "Luminous Quotes Source Code Repo",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/IIKirito-kunII/lamp-quote",
          position: "top-55 left-60",
        },
      ],
    },
  ],
};
const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "git.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      position: "top-10 left-5",
      target: "github",
    },
    {
      id: 2,
      name: "my Discord Profile",
      icon: "/finder/discord.png",
      kind: "file",
      fileType: "img",
      position: "top-25 left-28",
      imageUrl: "/finder/discord.png",
    },
    {
      id: 3,
      name: "my Education Details",
      icon: "/gallery/education.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-60",
      imageUrl: "/gallery/education.png",
    },
    {
      id: 4,
      name: "my Whatsapp Profile",
      icon: "/finder/whatsapp.jpg",
      kind: "file",
      fileType: "img",
      position: "top-45 left-75",
      imageUrl: "/finder/whatsapp.jpg",
    },
    {
      id: 5,
      name: "my College ID Card",
      icon: "/finder/college-id.jpeg",
      kind: "file",
      fileType: "img",
      position: "top-52 left-40",
      imageUrl: "/finder/college-id.jpeg",
    },
    {
      id: 6,
      name: "GATE CSE 2025 Scorecard",
      icon: "/finder/gate.png",
      kind: "file",
      fileType: "img",
      position: "top-20 left-100",
      imageUrl: "/finder/gate.png",
    },
    {
      id: 7,
      name: "About Me",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code ~ Lavish Kumar Varshney",
      image: "/images/sdp.jpeg",
      description: [
        "I am a full-stack MERN developer who builds fast, modern, and interactive applications. I combine strong frontend engineering with solid backend architecture using Node, Express, MongoDB, and API-driven development. I focus heavily on design, animations, user experience, and building clean, scalable digital products.",
        "I am currently pursuing a B.Tech in Computer Science at Gurukula Kangri Vishwavidyalaya and qualified GATE 2025 (CS) in my 3rd year, strengthening my foundation in core computer science concepts and problem-solving.",
      ],
    },
  ],
};
const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      target: "resume",
      position: "top-20 left-10",
    },
  ],
};
const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/finder/font sizing.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/finder/font sizing.png",
    },
    // {
    //   id: 2,
    //   name: "trash2.png",
    //   icon: "/images/trash-2.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-40 left-80",
    //   imageUrl: "/images/trash-2.png",
    // },
  ],
};
export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};
export const Gallerys = {
  library: LIBRARY_GALLERY,
  memories: MEMORIES_GALLERY,
  places: PLACES_GALLERY,
  people: PEOPLE_GALLERY,
  favorites: FAVORITES_GALLERY,
};
const INITIAL_Z_INDEX = 1000;
const WINDOW_CONFIG = {
  finder: { isOpen: false, isMax: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, isMax: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, isMax: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, isMax: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, isMax: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, isMax: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, isMax: false, zIndex: INITIAL_Z_INDEX, data: null },
  music: { isOpen: false, isMax: false, zIndex: INITIAL_Z_INDEX, data: null },
  github: { isOpen: false, isMax: false, zIndex: INITIAL_Z_INDEX, data: null },
  theme: { isOpen: false, isMax: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: {
    isOpen: false,
    isMax: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
};
export { INITIAL_Z_INDEX, WINDOW_CONFIG };
