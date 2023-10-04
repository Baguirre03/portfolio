/* eslint-disable react/jsx-key */
export default function ProjectCard({ data }) {
  return (
    <div className="project-card">
      <h4>{data.title}</h4>
      <img className="project-image" src={data.imgSrc} alt="" />
      <ul>
        Tools:{" "}
        {data.tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
      <p>{data.description}</p>
      <button>
        <a href={data.repo}>Repository</a>
      </button>
      <button>
        <a href={data.live}>Live</a>
      </button>
    </div>
  );
}
