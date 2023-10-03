import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Attack on Titan Memory Card Game",
    imgSrc: "../assets/aot.png",
    tools: ["React", "Vite", "CSS"],
    description:
      "Developed a memory card game using an Attack on Titan API using React concepts such as useEffect for API integration and useState for dynamic DOM updates",
    repo: "https://github.com/Baguirre03/memory-card",
    live: "https://memory-card-rho.vercel.app/",
  },
  {
    title: "Battleship",
    imgSrc: "../assets/battleship.png",
    tools: ["JavaScript", "CSS", "HTML"],
    description:
      "Battleship game made using TDD. Built a smart AI to play against, and interactive gameboard",
    repo: "https://github.com/Baguirre03/battleship",
    live: "https://baguirre03.github.io/battleship/",
  },
  {
    title: "CV-Application",
    imgSrc: "../assets/cv-app.png",
    tools: ["React", "Vite", "CSS"],
    description:
      "Developed a CV application  that dynamically updates a mock resume in real-time as users inputer their information. Implemented using React and Vite while leveraged useState. Components used allowed in code-resuability",
    repo: "https://github.com/Baguirre03/cv-appp",
    live: "https://main--silly-sunburst-feb89a.netlify.app//",
  },
];

export default function Projects({ name }) {
  return (
    <div name={name}>
      {projects.map((proj) => (
        <ProjectCard key={proj} data={proj}></ProjectCard>
      ))}
    </div>
  );
}
