import profile from "../assets/profile.jpg";
import "../styles/about.css";

export default function About({ name }) {
  return (
    <div name={name} className="about">
      <div className="left-about">
        <h2>About 👋</h2>
        <p>
          Hey! I am currently a university student at{" "}
          <a href="https://www.luc.edu/">Loyola University Chicago</a>. Here I
          am studying marketing with a minor in computer science. About halfway
          through my collegiate journey and some marketing internships, I found
          that coding was a better fit for me. Since then, I have been learning
          web development via{" "}
          <a href="https://www.theodinproject.com/">The Odin Project</a>.
        </p>
        <p>
          There I am also an active community member and contribute as much as I
          can since its an open source curriculum! Apart from coding and
          marketing, I love to do Wordle, listen to music and podcasts, and
          doodle, and take photos with my film camera (as seen above).
        </p>
      </div>
      <div className="right-about">
        <img className="me-image" src={profile} alt="me" />
      </div>
    </div>
  );
}
