import { useParams } from "react-router-dom";
import PageTitle from "./PageTitle";

export default function Resources({resources}) {
  const {slug} = useParams()

  const categoryProducts = resources.filter((resource) => resource.category === slug)
  console.log("hjelp", categoryProducts)

  return (
    <>
    <section id="liste"> 
    <h1>{categoryProducts[0].category}</h1>
    {categoryProducts.map((resource, index) => (
      <PageTitle
      resource={resource}
      key={`FCT_${index}`}
      />
    ))}
    </section>
    </>
  );
}