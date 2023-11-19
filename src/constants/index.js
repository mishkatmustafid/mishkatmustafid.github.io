import {
  web,
  mobile,
  backend,
  creator,
  html,
  css,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  django,
  solidity,
  fastapi,
  python,
  rust,
  flutter,
  dart,
  postgresql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Blockchain Development",
    icon: mobile,
  },
  {
    title: "AI Integration",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];
const experiences = [
  {
    title: "Backend Developer",
    company_name: "Tiger Trade",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Sep 2022",
    points: [
      "Developed secure Python code in the FastAPI framework, implementing token timeouts for enhanced authentication security.",
      "Engineered scrapers and crawlers for data retrieval from public domains, concurrently building APIs and data clients for efficient data consumption.",
      "Conducted thorough troubleshooting, testing, and debugging, enhancing code quality and system efficiency.",
      "Contributed to agile Scrum teams, addressing scalability issues, implementing robust security measures, and crafting reusable code for future projects.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Bengal InfoTech",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Aug 2021",
    points: [
      "Led the entire implementation and deployment process, including code review, debugging, and issue resolution, ensuring the successful execution of software projects.",
      "Provided comprehensive software application engineering and maintenance throughout the development lifecycle, including the creation of unit test cases for testing and automation.",
      "Oversaw the implementation of automated build and deployment pipelines, managing development milestones from initiation to final delivery and actively engaging with customers to gather feedback and address concerns.",
      "Designed and implemented scalable applications for data extraction and analysis, authored code fixes and enhancements, and tested/deployed highly available software products for inclusion in future releases and patches.",
    ],
  },
];

const testimonials = [];

const projects = [];

export { services, technologies, experiences, testimonials, projects };
