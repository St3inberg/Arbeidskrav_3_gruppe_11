// src/components/Nav.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../sanityClient.js';

export default function Nav() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type=="personer"]{ personname, productslug }`)
      .then(setProfiles)
      .catch(console.error);
  }, []);

  return (
    <nav id="nav">
      <ul>
        {profiles.map((p) => (
          <li key={p.productslug.current}>
            <Link to={`/profile/${p.productslug.current}`}>
              {p.personname}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
