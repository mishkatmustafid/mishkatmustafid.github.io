import {
  web,
  mobile,
  backend,
  creator,
  ucd,
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
  millow,
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
    id: "projects",
    title: "Projects",
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
    title: "Research Assistant",
    company_name: "University College - Dublin",
    icon: ucd,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Jul 2024",
    points: [
      "Enhanced code flow, debugging, and functionality for the HOLOS-IE prototype using WPF and C#, focusing on UI/UX improvements and MVVM design patterns.",
      "Developed frontend and backend components with C# and JavaScript, incorporating SQL and NoSQL databases, and designing RESTful and GraphQL APIs.",
      "Led the migration of HOLOS-IE from a desk-based to a web application, managing framework selection, backend architecture, and performance optimization.",
      "Produced comprehensive design documents and collected requirements for new features to streamline development and ensure alignment with project goals.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Tiger Trade",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Sep 2022",
    points: [
      "Developed secure Python code in the FastAPI framework, implementing token timeouts for enhanced authentication security.",
      "Engineered scrapers & crawlers for data retrieval from public domains, concurrently building APIs and data clients for efficient data consumption.",
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

const projects = [
  {
    name: "Millow",
    description:
      "A simple website for real estate market where buyers, sellers, inspectors, and lenders interact till the sale of the estate is complete.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "gray-text-gradient",
      },
      {
        name: "web3",
        color: "green-text-gradient",
      },
      {
        name: "hardhat",
        color: "yellow-text-gradient",
      },
    ],
    image: millow,
    source_code_link: "https://github.com/mishkatmustafid/millow",
    live_link: "https://millow-three.vercel.app",
  },
];

const businesses = [];

const awards = [];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  businesses,
  awards,
};
