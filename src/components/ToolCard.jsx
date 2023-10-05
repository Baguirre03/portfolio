export default function Toolcard({ data }) {
  return (
    <div className="card">
      {data.src && (
        <img className="tool-image" src={data.src} alt={data.title} />
      )}
      <p>{data.title || data}</p>
    </div>
  );
}
