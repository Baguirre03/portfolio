export default function PhotoCard({ src, key }) {
  return (
    <div key={key} className="photo-holder">
      <img src={src}></img>
    </div>
  );
}
