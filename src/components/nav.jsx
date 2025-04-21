import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../sanityClient.js';

export default function Nav() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type=="personer"]{ personname, productslug, _id}`)
      .then((data) => {
        console.log('Sanity fetched profiles:', data);
        setProfiles(data);
      })
      .catch((err) => {
        console.error('Error fetching profiles:', err);
      });
  }, []);

  return (
    <nav id="nav">
      <ul>
        {profiles.map((p) => (
          <li key={p.productslug.current || p._id}>
            <Link to={`/profile/${p.productslug.current}`}>
              {p.personname}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
