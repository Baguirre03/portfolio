import Toolcard from "./ToolCard";

const tools = [
  { title: "JavaScript", src: "" },
  { title: "React", src: "" },
  { title: "HTML", src: "" },
  { title: "CSS", src: "" },
  { title: "Jest", src: "" },
  { title: "Git", src: "" },
  { title: "Webpack", src: "" },
  { title: "Vite", src: "" },
];

const skills = [
  "SEO",
  "Data analysis",
  "QA testing",
  "Unit testing",
  "Analytics",
];

function Tools({ name }) {
  return (
    <>
      <div name={name} className="tools">
        <ul>
          {tools.map((tool) => (
            <Toolcard key={tool.title} data={tool}></Toolcard>
          ))}
        </ul>
      </div>
      <div name={name} className="skills">
        <ul>
          {skills.map((skill) => (
            <Toolcard key={skill} data={skill}></Toolcard>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Tools;
