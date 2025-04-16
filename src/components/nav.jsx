import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../sanityClient';
import './Nav.css';

const Nav = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    
    client
      .fetch(`*[_type == "personer"]{ personname, productslug }`)
      .then(data => setProfiles(data))
      .catch(console.error);
  }, []);

  return (
    <nav className="navBar">
      <ul className="navList">
        {profiles.map(profile => (
          <li key={profile.productslug.current} className="navItem">
            <Link className="navLink" to={`/profile/${profile.productslug.current}`}>
              {profile.personname}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;