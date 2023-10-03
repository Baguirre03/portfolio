export default function Toolcard({ data }) {
  return (
    <div className="card">
      <h4>{data.title || data}</h4>
      {data.src && <img src={data.src} alt={data.title} />}
    </div>
  );
}
