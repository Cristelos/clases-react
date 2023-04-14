export default function Gallery({array}) {
    return (
      <div>
        {array && Array.isArray(array) && array.map((anime, index) => (
            <div key={index}>
              <h2>{anime.attributes.canonicalTitle}</h2>
              <img  src={anime.attributes.posterImage.original} alt={anime.attributes.canonicalTitle} width="50%" />
            </div>
          ))}
      </div>
    );
  }
  