import { Link, useParams } from "react-router-dom";

export default function ProductCard({person}) {
 

  return (
    <Link to={"profile/:slug"}>
      
      <article className="profilkort">
      {person.imageUrl && (
        <img src={person.imageUrl} alt={person.personname} />
      )}
        <h3 >{person.personname}</h3>
       <p >{person.epost}</p>

      </article>
    </Link>
  );
}