import { Project, SkillCategory, Service, EducationItem, Certification, ExperienceItem } from "./types";
import diceeGameImg from "./assets/images/dicee_game_mockup_1784302295746.jpg";
import simonGameImg from "./assets/images/simon_game_mockup_1784308836918.jpg";
import aiToolsShowcaseImg from "./assets/images/ai_tools_showcase_mockup_1784310886188.jpg";

// Personal Details
export const personalInfo = {
  name: "Zeenathul Husniya",
  role: "Junior Software Developer",
  email: "zeenathul.it@gmail.com",
  phone: "+94 75 935 3055",
  location: "Colombo, Sri Lanka",
  github: "https://github.com/zeenathulhusniya",
  linkedin: "https://www.linkedin.com/in/zeenathul-husniya/",
  resumeUrl: "#", // Standard mock resume link that will download a virtual resume or trigger a modal
  avatarUrl: "https://i.postimg.cc/xj6F9hZm/Chat-GPT-Image-Jun-24-2026-10-11-39-AM.png",
  bio: "A results-oriented Junior Software Developer currently undergoing Cyber Security Internship Training at Mars Tech Campus. Passionate about software development, cybersecurity, clean code, and continuous learning. Skilled in Java, Python, SQL, JavaScript, and modern web technologies.",
  detailedAbout: "I am a Junior Software Developer currently undergoing Cyber Security Internship Training at Mars Tech Campus. I am passionate about software development, cybersecurity, and building efficient, scalable, and user-friendly applications. I continuously improve my skills in Java, Python, JavaScript, SQL, and modern web technologies while learning industry best practices."
};

// Services Offered
export const servicesData: Service[] = [
  {
    id: "service-1",
    title: "Software Application Development",
    description: "Developing clean, efficient, and maintainable software applications using Java and Python while following modern programming practices, object-oriented programming principles, and industry coding standards.",
    iconName: "Cpu"
  },
  {
    id: "service-2",
    title: "Frontend Web Development",
    description: "Building responsive, modern, and user-friendly web applications using HTML5, CSS3, JavaScript, and React to deliver seamless user experiences across all devices.",
    iconName: "Globe"
  },
  {
    id: "service-3",
    title: "Database Management",
    description: "Designing and managing SQL databases, writing optimized queries, and implementing reliable data storage solutions to support scalable software applications.",
    iconName: "Lightbulb"
  }
];

// Skills Structure with proficiency levels (out of 100) for a highly polished UI experience
export const skillsData: { category: string; list: { name: string; level: number }[] }[] = [
  {
    category: "Programming Languages",
    list: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 80 }
    ]
  },
  {
    category: "Web Technologies",
    list: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 90 },
      { name: "React.js", level: 75 }
    ]
  },
  {
    category: "Database & Tools",
    list: [
      { name: "SQL", level: 85 },
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 }
    ]
  },
  {
    category: "Core Skills",
    list: [
      { name: "Problem Solving", level: 85 },
      { name: "Object-Oriented Programming (OOP)", level: 80 },
      { name: "Responsive Web Design", level: 85 }
    ]
  }
];

// Education Timeline Items
export const educationData: EducationItem[] = [
  {
    degree: "Cyber Security Internship Training",
    institution: "Mars Tech Campus",
    location: "Colombo, Sri Lanka",
    period: "2026",
    description: "Currently undergoing Cyber Security Internship Training with a focus on cybersecurity fundamentals, network security, ethical hacking concepts, secure software development, and industry best practices while strengthening practical technical skills.",
    tags: ["Cyber Security", "Internship Training"]
  },
  {
    degree: "Junior Software Developer",
    institution: "Professional Development",
    location: "Colombo, Sri Lanka",
    period: "Present",
    description: "Continuously improving software development skills by building responsive web applications and learning Java, Python, JavaScript, SQL, Git, GitHub, and modern development practices.",
    points: [
      "Developing responsive and user-friendly web applications.",
      "Improving problem-solving and programming skills.",
      "Learning secure coding principles and software development best practices.",
      "Building projects to strengthen practical experience."
    ]
  }
];

// Projects Showcase
export const projectsData: Project[] = [
  {
    id: "project-booknest",
    title: "BookNest – Modern Book Tracker",
    category: "HTML5 • CSS3",
    isNew: true,
    description: "BookNest is a modern and responsive Book Tracker website built using HTML5 and CSS3. It allows users to explore trending fiction books, browse categories, view reading statistics, and enjoy a clean digital library experience with an elegant user interface.",
    longDescription: "A beautifully structured frontend application for avid readers to curate lists, track reading time and stats, and view trending book titles in a dark, atmospheric UI with dynamic grid grids.",
    features: [
      "Responsive Design",
      "Modern UI",
      "Trending Fiction Books",
      "Reading Dashboard",
      "Categories Section",
      "Featured Books",
      "Elegant Animations",
      "Mobile Friendly"
    ],
    learningOutcomes: [
      "Implementing custom fluid column systems using CSS Grid and Flexbox layouts.",
      "Structuring responsive and eye-safe typography setups using modern scale designs."
    ],
    technologies: ["HTML5", "CSS3", "Responsive Design", "CSS Grid", "Flexbox"],
    githubUrl: "https://github.com/zeenathulhusniya/booknest",
    liveUrl: "https://booknest-library.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80",
    status: "Completed"
  },
  {
    id: "project-1",
    title: "Dicee Game",
    category: "HTML5 • CSS3 • JavaScript",
    isNew: true,
    description: "Dicee Game is a fun and interactive web application built using HTML5, CSS3, and JavaScript. Players can roll two virtual dice to generate random outcomes, making it a simple project that demonstrates DOM manipulation, random number generation, and responsive web design.",
    longDescription: "A fully responsive, fun, and interactive web implementation of a two-dice rolling board game. Includes animated outcomes and displays the winner dynamically in real-time, utilizing vanilla JavaScript DOM manipulation methodologies.",
    features: [
      "Random dice roll generation",
      "Interactive gameplay",
      "Responsive design",
      "Clean and modern UI",
      "Beginner-friendly project",
      "Fast loading"
    ],
    learningOutcomes: [
      "Handling real-time DOM updates and event listeners efficiently in vanilla JavaScript.",
      "Configuring randomized logic to simulate fair dice behaviors dynamically on each click."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
    githubUrl: "https://github.com/yourusername/dicee-game",
    githubLabel: "Source Code",
    liveUrl: "https://thedicee-game.netlify.app/",
    imageUrl: diceeGameImg,
    status: "Completed"
  },
  {
    id: "project-3",
    title: "The Simon Game",
    category: "HTML5 • CSS3 • JavaScript",
    isNew: true,
    description: "The Simon Game is an interactive memory game developed using HTML5, CSS3, and JavaScript. Players must remember and repeat the sequence of colors to progress through levels. This project demonstrates JavaScript logic, DOM manipulation, event handling, and interactive UI development.",
    longDescription: "An interactive color-sequence memory training web application inspired by the classic Hasbro handheld game. Correctly repeat progressive patterns of lighting tones and flashing colors to level up.",
    features: [
      "Sequence memory tracking",
      "Dynamic color flash effects",
      "Interactive audio tones",
      "Responsive layout design",
      "Event-driven gameplay loops",
      "Level status tracking"
    ],
    learningOutcomes: [
      "Mastering vanilla JavaScript timers and sequence comparisons.",
      "Binding interactive click handlers for immediate gameplay audio feedback."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
    githubUrl: "https://github.com/zeenathulhusniya/The-Simon-Game",
    githubLabel: "GitHub Repository",
    liveUrl: "https://thesimongamewebsite.netlify.app/",
    imageUrl: simonGameImg,
    status: "Completed"
  },
  {
    id: "project-4",
    title: "AI Tools Showcase Website",
    category: "HTML5 • CSS3 • JavaScript",
    isNew: true,
    description: "AI Tools Showcase Website is a modern and responsive web platform that displays popular AI tools with clean categorization and an attractive user interface. This project helps users explore different AI tools, understand their features, and discover useful AI solutions through a simple and organized layout.",
    longDescription: "A beautifully curated and responsive web interface designed to highlight state-of-the-art AI applications, platforms, and API utilities. Features modular categorized listings and clean interactive showcase cards.",
    features: [
      "Modern AI tools showcase interface",
      "Tool categories and cards",
      "Search-friendly layout",
      "Responsive design",
      "Clean and professional UI",
      "Interactive components",
      "User-friendly navigation"
    ],
    learningOutcomes: [
      "Structuring clean semantic directory layouts and interactive search controls.",
      "Implementing highly responsive design rules across multi-tier display grids."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX Design"],
    githubUrl: "https://github.com/zeenathulhusniya/AI-Tools-Showcase-Website",
    githubLabel: "Source Code",
    liveUrl: "https://ai-tools-showcase-website.netlify.app/",
    imageUrl: aiToolsShowcaseImg,
    status: "Completed"
  }
];

// Certifications Data
export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: "Full-Stack Development 101",
    issuer: "Simplilearn SkillUp",
    status: "Completed",
    period: "2026",
    description: "Successfully mastered modern full-stack development foundations, covering fundamental architectures, core frontend modules, and server-side integration strategies.",
    skills: ["Full-Stack Dev", "Modern Architectures", "Web Foundations", "Responsive Workflows"],
    imageUrl: "https://i.postimg.cc/fLQ6hcjc/FULL-STATCK-DEVELOPMENT-CERTIFICATE.jpg",
    credentialUrl: "https://i.postimg.cc/fLQ6hcjc/FULL-STATCK-DEVELOPMENT-CERTIFICATE.jpg"
  },
  {
    id: "cert-2",
    title: "Web Design for Beginners",
    issuer: "Centre for Open & Distance Learning, University of Moratuwa",
    status: "Completed",
    period: "2026",
    description: "Acquired fundamental theoretical and practical competencies in user interface design, styling mechanisms, responsive structural grid grids, and semantic HTML components.",
    skills: ["HTML5 & CSS3", "UI/UX Principles", "Layout Design", "Responsive CSS"],
    imageUrl: "https://i.postimg.cc/cLKjg9F5/Screenshot-2026-07-03-173927.png",
    credentialUrl: "https://i.postimg.cc/cLKjg9F5/Screenshot-2026-07-03-173927.png"
  },
  {
    id: "cert-3",
    title: "Learn Full Stack Web Development",
    issuer: "Cursa",
    status: "Completed",
    period: "2026",
    description: "Deep study of full-stack engineering lifecycles, database system designs, interactive components, backend services, and asynchronous API integrations.",
    skills: ["Full Stack Engineering", "Database Systems", "API Integration", "Dynamic State Flow"],
    imageUrl: "https://i.postimg.cc/zD0PdZ6Z/certificate.png",
    credentialUrl: "https://i.postimg.cc/zD0PdZ6Z/certificate.png"
  },
  {
    id: "cert-4",
    title: "Front-End Web Development",
    issuer: "Centre for Open & Distance Learning, University of Moratuwa",
    status: "Completed",
    period: "2026",
    description: "Intensively learned client-side application design, including dynamic JavaScript interactivity, DOM control, layout mechanics, and complex responsive design practices.",
    skills: ["Front-End Web Development", "JavaScript (ES6+)", "Responsive Grid System", "DOM Interactivity"],
    imageUrl: "https://i.postimg.cc/26xXRPSg/Screenshot-2026-07-05-155022.png",
    credentialUrl: "https://i.postimg.cc/26xXRPSg/Screenshot-2026-07-05-155022.png"
  }
];

// Experience & Training Data
export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Cyber Security Internship Trainee",
    company: "Mars Tech Campus",
    location: "Colombo, Sri Lanka",
    period: "2026 – Present",
    summary: "Currently undergoing Cyber Security Internship Training while continuously improving software development and cybersecurity skills through practical learning and hands-on exercises.",
    description: [
      "Learning cybersecurity fundamentals and secure software development practices.",
      "Strengthening programming skills using Java, Python, JavaScript, and SQL.",
      "Building responsive web applications and improving problem-solving abilities.",
      "Using Git and GitHub for version control and project management.",
      "Continuously learning modern software development technologies and industry best practices."
    ],
    type: "INTERNSHIP"
  }
];

