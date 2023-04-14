export default function Card({data}) {
  
  return (
    <div>
        <h2>{data.title}</h2>
        <img src={data.img} alt="cartel"/>
        <p>{data.description}</p>
    </div>
  );
}
