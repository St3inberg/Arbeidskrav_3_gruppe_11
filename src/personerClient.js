// Importerer Sanity-klienten fra client.js (sannsynligvis en konfigurert Sanity client-instans)
import { client } from "./sanityClient";

export async function fetchAllPersoner() {
  const data = await client.fetch(`*[_type=="personer" ]{
          personname, epost,
          "imageUrl": image.asset->url,
          _id,
          productslug
        }`);
        
  return data;
}

export async function fetchWorkLog() {
  const data = await client.fetch(`
    *[_type=="loggforing"] {
  dato,
    kommentar[0],
    _id,
      navn[0]->{
    personname
  },
}`);
    return data;
}

