// Importerer Sanity-klienten fra client.js (sannsynligvis en konfigurert Sanity client-instans)
import { client } from "./sanityClient";

export async function fetchAllPersoner() {
  const data = await client.fetch(`*[_type == "personer"]{
    _id,
    personname,
    epost,
    image
    
  }`);
  return data;
}


