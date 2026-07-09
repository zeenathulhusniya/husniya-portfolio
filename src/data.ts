import { Project, SkillCategory, Service, EducationItem, Certification, ExperienceItem } from "./types";
import studentMgmtImg from "./assets/images/student_mgmt_mockup_1782548917866.jpg";
import portfolioImg from "./assets/images/portfolio_mockup_1782548948052.jpg";
import taskMgmtImg from "./assets/images/task_mgmt_mockup_1782548929708.jpg";

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
    id: "project-1",
    title: "Student Management System",
    description: "A Java and SQL based desktop application for managing student records, attendance, and academic information. This project is currently under development.",
    longDescription: "Under development: A robust desktop management utility built with standard software design patterns, featuring transactional operations, student registers, administrative credentials verification, and editable record matrices.",
    features: [
      "ACID-compliant schema designed to track attendance and grade logs.",
      "Optimized query functions executing clean CRUD statements.",
      "Custom administrative dashboard panels built with secure inputs."
    ],
    learningOutcomes: [
      "Deepening object-oriented logic, thread handlers, and MVC configurations.",
      "Learning to write performant, injection-safe SQL query expressions."
    ],
    technologies: ["Java", "SQL", "JDBC"],
    githubUrl: "https://github.com/zeenathulhusniya/student-management-system",
    liveUrl: undefined,
    imageUrl: studentMgmtImg,
    status: "Coming Soon"
  },
  {
    id: "project-2",
    title: "Personal Portfolio Website",
    description: "A responsive personal portfolio showcasing my skills, certificates, and journey as a Junior Software Developer.",
    longDescription: "An optimized modern web application built using React and TypeScript, styled with Tailwind CSS, and containing detailed sections showcasing professional training, technical skills, and credential certificates.",
    features: [
      "Fully responsive and eye-safe design system with custom accent themes.",
      "Interactive lightbox galleries supporting clean mobile zoom & touch gestures.",
      "Modular components structure with strict TypeScript type-safety constraints."
    ],
    learningOutcomes: [
      "Mastering Tailwind's layout configuration utility grids and variable bindings.",
      "Constructing scalable, reusable, and responsive React component packages."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/zeenathulhusniya/developer-portfolio",
    liveUrl: "https://zeenathulhusniya.vercel.app",
    imageUrl: portfolioImg,
    status: "Live"
  },
  {
    id: "project-3",
    title: "Inventory Management System",
    description: "A database-driven application for managing products, stock levels, and sales records using Java and SQL.",
    longDescription: "Planned: A highly optimized transactional system aimed at warehouse product tracking, categorizing stock, monitoring low-level alerts, and generating periodic reports.",
    features: [
      "Product metadata grids with pricing index and automatic tax calculators.",
      "Alert mechanism triggers when stock levels fall below thresholds.",
      "Interactive relational schema to query stock levels and histories."
    ],
    learningOutcomes: [
      "Structuring multi-table constraints, keys, and relational joins.",
      "Designing clean user input workflows to prevent data corruption."
    ],
    technologies: ["Java", "SQL"],
    githubUrl: "https://github.com/zeenathulhusniya",
    liveUrl: undefined,
    imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80",
    status: "Coming Soon"
  },
  {
    id: "project-4",
    title: "Task Management Application",
    description: "A modern web application for creating, organizing, and tracking daily tasks with a clean user interface.",
    longDescription: "Planned: A lightweight web organizer enabling software developers to categorize project tasks, define priorities, and monitor current status streams.",
    features: [
      "Clean task columns for organizing todo, doing, and completed task lists.",
      "Persistent cloud database sync with Firebase authentication and Firestore.",
      "Interactive user profile configuration and task category filtering."
    ],
    learningOutcomes: [
      "Utilizing Firebase cloud storage systems in front-end React workflows.",
      "Configuring flexible component states for dynamic list filters."
    ],
    technologies: ["React", "JavaScript", "Firebase"],
    githubUrl: "https://github.com/zeenathulhusniya/task-manager-app",
    liveUrl: undefined,
    imageUrl: taskMgmtImg,
    status: "Planned"
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

