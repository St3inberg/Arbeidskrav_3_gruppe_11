
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../sanityClient.js';
import './Styles.scss';

export default function Profilkort() {
  const { slug } = useParams();
  const [profile, setProfile] = useState(null);
  const [logs, setLogs] = useState([]);

  
  useEffect(() => {
    client
      .fetch(
        `*[_type == "personer" && productslug.current == $slug][0]{
          _id,
          personname,
          biografi,
          interesser,
          "imageUrl": image.asset->url
        }`,
        { slug }
      )
      .then(setProfile)
      .catch(console.error);
  }, [slug]);

  
  useEffect(() => {
    if (!profile?._id) return;

    client
      .fetch(
        `*[_type=="loggforing" && references($personId)]|order(dato desc){
           _id,
           Oppgaven,
           kommentar[],
           dato
         }`,
        { personId: profile._id }
      )
      .then(setLogs)
      .catch(console.error);
  }, [profile]);

  if (!profile) return <div>Loading…</div>;

  return (
    <section className="profilside">
      <div className="profilside__header">
        {profile.imageUrl && (
          <img
            src={profile.imageUrl}
            alt={profile.personname}
            className="profilside__image"
          />
        )}
        <div className="profilside__info">
          <h2 className="profilside__name">{profile.personname}</h2>
          <p className="profilside__bio"><strong>Bio:</strong> {profile.biografi}</p>
        </div>
      </div>

      {profile.interesser?.length > 0 && (
        <div className="profilside__interesser">
          <strong>Interesser:</strong>
          <ul>
            {profile.interesser.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      )}

      {logs.length > 0 && (
        <div className="arbeidslogg-container">
          <h3>Arbeidslogg</h3>
          <table className="arbeidslogg-table">
            <thead>
              <tr>
                <th>Dato</th>
                
                <th>Kommentarer</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log._id}>
                  
                  <td>{new Date(log.dato).toLocaleDateString('no-NO')}</td>
                  <td>
                    {log.kommentar?.length > 0 ? (
                      <ul>
                        {log.kommentar.map((c, idx) => (
                          <li key={idx}>{c}</li>
                        ))}
                      </ul>
                    ) : (
                      <span>-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}