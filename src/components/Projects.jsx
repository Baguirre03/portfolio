import ProjectCard from "./ProjectCard";
import aot from "../assets/aot.png";
import battleship from "../assets/battleship.png";
import cvApp from "../assets/cv-app.png";
import "../styles/projects.css";

const projects = [
  {
    title: "Attack on Titan Memory Card Game",
    imgSrc: aot,
    tools: ["React", "Vite", "CSS"],
    description:
      "Developed a memory card game using an Attack on Titan API using React concepts such as useEffect for API integration and useState for dynamic DOM updates",
    repo: "https://github.com/Baguirre03/memory-card",
    live: "https://memory-card-rho.vercel.app/",
  },
  {
    title: "Battleship",
    imgSrc: battleship,
    tools: ["JavaScript", "CSS", "HTML"],
    description:
      "Battleship game made using TDD. Built a smart AI to play against, and interactive gameboard",
    repo: "https://github.com/Baguirre03/battleship",
    live: "https://baguirre03.github.io/battleship/",
  },
  {
    title: "CV-Application",
    imgSrc: cvApp,
    tools: ["React", "Vite", "CSS"],
    description:
      "Developed a CV application  that dynamically updates a mock resume in real-time as users inputer their information. Implemented using React and Vite while leveraged useState. Components used allowed in code-resuability",
    repo: "https://github.com/Baguirre03/cv-appp",
    live: "https://main--silly-sunburst-feb89a.netlify.app//",
  },
];

export default function Projects({ name }) {
  return (
    <div name={name} className="projects-all">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((proj) => (
          <ProjectCard key={proj} data={proj}></ProjectCard>
        ))}
      </div>
    </div>
  );
}
