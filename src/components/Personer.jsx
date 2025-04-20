import { Link, useParams } from "react-router-dom";

export default function ProductCard({person}) {
 

  return (
    <Link to={"/"}>
      <article>
        <h3>{person.personname}</h3>
       <p>{person.epost}</p>
      </article>
    </Link>
  );
}