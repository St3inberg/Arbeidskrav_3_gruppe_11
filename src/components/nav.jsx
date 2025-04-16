// src/components/Nav.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../sanityClient'; 

const Nav = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "personer"]{ personname, productslug }`)
      .then((data) => setProfiles(data))
      .catch((error) => console.error('Error fetching profiles:', error));
  }, []);

  return (
    <nav>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.productslug.current}>
            <Link to={`/profile/${profile.productslug.current}`}>
              {profile.personname}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
