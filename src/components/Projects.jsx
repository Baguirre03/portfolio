import ProjectCard from "./ProjectCard";
import aot from "../assets/aot.png";
import battleship from "../assets/battleship.png";
import cvApp from "../assets/cv-app.png";
import todo from "../assets/to-do.png";
import shop from '../assets/shop.png'
import "../styles/projects.css";

const projects = [
  {
    title: "TDD Shopping Cart",
    imgSrc: shop,
    tools: "React, React testing library, Vite, CSS",
    description: "Developed a test-driven development mock shopping cart using React and its testing library. Grabs items from a mock product API and displays them from a real-time fetch. Users can add to cart and view cart as well as incorporating React Router between the home and shop page",
    repo: "https://github.com/Baguirre03/shopping-cart",
    live: "https://the-super-cool-shop.netlify.app/",
  },
  {
    title: "Attack on Titan Memory Card Game",
    imgSrc: aot,
    tools: "React, Vite, CSS",
    description:
      "Developed a memory card game using an Attack on Titan API using React concepts such as useEffect for API integration and useState for dynamic DOM updates",
    repo: "https://github.com/Baguirre03/memory-card",
    live: "https://memory-card-rho.vercel.app/",
  },
  {
    title: "Battleship",
    imgSrc: battleship,
    tools: "JavaScript, CSS, HTML",
    description:
      "Battleship game made using TDD. Built a smart AI to play against using a recursive algorithm, along with an interactive game-board",
    repo: "https://github.com/Baguirre03/battleship",
    live: "https://baguirre03.github.io/battleship/",
  },
  {
    title: "To-do list",
    imgSrc: todo,
    tools: "JavaScript, HTML, CSS",
    description:
      "To-do list application that has the ability to save your information in local-storage. Can sort tasks by date, priority and current week. Prioritized code cleanliness using ES6 modules and SOLID principles, alongside responsive design.",
    repo: "https://github.com/Baguirre03/to-do",
    live: "https://baguirre03.github.io/to-do/",
  },
  {
    title: "This Project! (My portfolio)",
    tools: "React, Vite, CSS",
    description:
      "Made using React, implemented useEffect hook for animation on intro card. Designed using CSS modules for each section and responsive design with media queries.",
    repo: "https://github.com/Baguirre03/portfolio",
  },
];

export default function Projects({ name }) {
  return (
    <div name={name} className="projects-all">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} data={proj}></ProjectCard>
        ))}
      </div>
    </div>
  );
}
