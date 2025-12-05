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
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
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
    name: "Articles", // was "Safari"
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
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js"],
  },
  // {
  //   category: "Mobile",
  //   items: ["React Native", "Expo"],
  // },
  {
    category: "Styling",
    items: ["Tailwind CSS", "bootstrap", "Material UI"],
  },
  {
    category: "Backend",
    items: ["Spring Boot"],
  },
  {
    category: "Database",
    items: ["Relational Databases"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
  {
    category: "Languages",
    items: ["Python", "Java"],
  },
  {
    category: "Proficiency",
    items: ["Machine Learning", "Deep learning", "Java Full Stack Development"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Abhay-Agnihotri01",
  },
  // {
  //   id: 2,
  //   text: "Platform",
  //   icon: "/icons/atom.svg",
  //   bg: "#4bcb63",
  //   link: "https://jsmastery.com/",
  // },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/AbhayAgnih47174",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/abhay-agnihotri/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/photo-portfolio-1.jpg",
  },
  {
    id: 2,
    img: "/images/photo-portfolio-2.jpg",
  },
  {
    id: 3,
    img: "/images/photo-portfolio-3.jpg",
  },
  {
    id: 4,
    img: "/images/photo-portfolio-4.jpg",
  },
  {
    id: 5,
    img: "/images/photo-portfolio-5.jpg",
  },
  {
    id: 6,
    img: "/images/photo-portfolio-6.jpg",
  },
  {
    id: 7,
    img: "/images/photo-portfolio-7.jpg",
  },
  {
    id: 8,
    img: "/images/photo-portfolio-8.jpg",
  },
  {
    id: 9,
    img: "/images/photo-portfolio-9.jpg",
  },
  {
    id: 10,
    img: "/images/photo-portfolio-10.jpg",
  },
  {
    id: 11,
    img: "/images/photo-portfolio-11.jpg",
  },
];

const memories = [
  {
    id: 1,
    title: "GDSC Wow Event - 2022",
    subtitle: "Best days ever",
    cover: "/images/photo-portfolio-2.jpg",
    images: [
      { id: 1, img: "/images/photo-portfolio-2.jpg" },
      { id: 2, img: "/images/photo-portfolio-1.jpg" },
    ],
  },
  {
    id: 2,
    title: "Google DevFest - 2025",
    subtitle: "Lucknow",
    cover: "/images/photo-portfolio-6.jpg",
    images: [
      { id: 1, img: "/images/photo-portfolio-6.jpg" },
      { id: 2, img: "/images/photo-portfolio-11.jpg" },
      { id: 3, img: "/images/photo-portfolio-9.jpg" },
      { id: 4, img: "/images/photo-portfolio-8.jpg" },
      { id: 5, img: "/images/photo-portfolio-7.jpg" },
    ],
  },
  {
    id: 3,
    title: "IIT BHU - KashiYatra 2023, 2022 Recap",
    subtitle: "Varanasi",
    cover: "/images/photo-portfolio-6.jpg",
    images: [
      { id: 1, img: "/images/photo-portfolio-5.jpg" },
      { id: 2, img: "/images/photo-portfolio-3.jpg" },
    ],
  },
];

const places = [
  {
    id: 1,
    place: "GDSC Wow Event - 2022",
    cover: "/images/photo-portfolio-1.jpg",
    images: [
      { id: 2, img: "/images/photo-portfolio-6.jpg" },
      { id: 1, img: "/images/photo-portfolio-11.jpg" },
      { id: 3, img: "/images/photo-portfolio-13.jpg" },
      { id: 5, img: "/images/photo-portfolio-15.jpg" },
      { id: 4, img: "/images/photo-portfolio-14.jpg" },
      { id: 4, img: "/images/photo-portfolio-12.jpg" },
    ]
  },
  {
    id: 2,
    place: "Google DevFest - 2025",
    cover: "/images/photo-portfolio-6.jpg",
    images: [
      { id: 1, img: "/images/photo-portfolio-6.jpg" },
      { id: 2, img: "/images/photo-portfolio-11.jpg" },
      { id: 4, img: "/images/photo-portfolio-9.jpg" },
      { id: 3, img: "/images/photo-portfolio-8.jpg" },
      { id: 3, img: "/images/photo-portfolio-7.jpg" },
    ]
  },
  {
    id: 3,
    place: "IIT BHU - KashiYatra 2023, 2022 Recap",
    cover: "/images/photo-portfolio-10.jpg",
    images: [
      { id: 1, img: "/images/photo-portfolio-5.jpg" },
      { id: 2, img: "/images/photo-portfolio-3.jpg" },
      { id: 3, img: "/images/photo-portfolio-16.jpg" },
      { id: 4, img: "/images/photo-portfolio-17.jpg" },
      { id: 5, img: "/images/photo-portfolio-18.jpg" },
    ]
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
  memories,
  places,
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
      name: "Resumind - AI Based Resume Analyzer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Resumind.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Developed a full-stack web app using React 19, TypeScript, and TailwindCSS that integrates Claude AI for ATSdriven resume analysis, real-time scoring, PDF processing, and secure storage with Puter.js."
            ,
          ],
        },
        {
          id: 2,
          name: "Live.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ai-resume-analyzer-main.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "nike.png",
          icon: "/images/project-1-photo-portfolio.jpg",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Linklytics - URL Shortener Service like bitly",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[22vh] left-7",
      children: [
        {
          id: 1,
          name: "Linklytics.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Built a comprehensive URL shortening platform similar to Bitly with React frontend and Spring Boot backend. Key features include user authentication, analytics dashboard with Chart.js visualizations, click tracking, and responsive design. Implemented JWT security, RESTful APIs, and MySQL database integration.",
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Abhay-Agnihotri01/LinkLytics",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ai-resume-analyzer.png",
          icon: "/images/project-2-photo-portfolio.jpg",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 left-5",
        // },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Power BI Dashboard - 2024 Indian Election Result Report",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[41vh] left-7",
      children: [
        {
          id: 1,
          name: "Dashboard.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Built an interactive Power BI dashboard for the 2024 Indian Elections using a relational data model and DAX measures to calculate KPIs like vote share, turnout, and winning margins, with drilldowns from national to constituency level for dynamic analysis.",
          ],
        },
        {
          id: 2,
          name: "Live.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://app.powerbi.com/view?r=eyJrIjoiZWY1ZWQwYmEtY2UxMi00OWUxLTlhOGEtMWExMWI3Y2ZhZDQ2IiwidCI6ImIyZTljYjQyLTUxMTktNDUxYi05NzI5LWYyNGE1NzEzNjk3MyJ9",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "food-delivery-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3-photo-portfolio.jpg",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
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
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/about-me.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/photo-portfolio-11.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/photo-portfolio-8.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/about-me.jpg",
      description: [
        "Hey! I’m Abhay 👋 — an AI & full-stack developer who loves turning complex ideas into clean, intelligent, and actually useful digital experiences.",

        "I work across Python, Java, React, Spring Boot, and ML/DL frameworks, building everything from AI-powered apps to interactive dashboards to full-stack web platforms. If it involves solving a real problem with smart engineering, I’m already interested.",

        "I’m big on writing code that’s clean, scalable, and not a debugging nightmare, and I love creating interfaces that feel smooth, intuitive, and delightfully responsive — whether it’s a resume analyzer, a URL analytics platform, or a computer vision model classifying tree species.",

        "When I’m not deep into a model, a REST API, or a UI layout, you’ll probably find me tweaking a dashboard, exploring a new ML paper, or convincing myself that learning one more framework at 2AM is a perfectly reasonable life choice 😅.",

        "Always building. Always learning. Always caffeinated",
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
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
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
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };