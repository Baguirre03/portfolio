import { Link } from "react-router-dom";
import PhotoCard from "./PhotoCard";

const photoArray = [{}];

export default function Photos() {
  return (
    <>
      <header>
        Return here{" "}
        <Link to="/">
          <button>Home</button>
        </Link>
      </header>
      <main>
        {photoArray.map((photo) => {
          return <PhotoCard key={photo.name} src={photo.src}></PhotoCard>;
        })}
      </main>
    </>
  );
}
