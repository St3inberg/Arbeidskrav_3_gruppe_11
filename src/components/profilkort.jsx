// src/components/Profilkort.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../sanityClient.js';

export default function Profilkort() {
  const { slug } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="personer" && productslug.current == $slug][0]{
          personname, epost, biografi, interesser,
          "imageUrl": image.asset->url
        }`,
        { slug }
      )
      .then(setProfile)
      .catch(console.error);
  }, [slug]);

  if (!profile) return <div>Loading…</div>;

  return (
    <section className="profilkort">
      <h2>{profile.personname}</h2>
      {profile.imageUrl && (
        <img src={profile.imageUrl} alt={profile.personname} />
      )}
      <p><strong>Epost:</strong> {profile.epost}</p>
      <p><strong>Bio:</strong> {profile.biografi}</p>
      <p>
        <strong>Interesser:</strong>{' '}
        {profile.interesser?.join(', ')}
      </p>
    </section>
  );
}
