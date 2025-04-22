// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import Personer from "./profilkort";
import Loggkort from './Loggkort';




export default function Home({personer, loggforing}) {



  return (
  <>
  <section id="flex-container">
  <h1>Velkommen til forsiden!</h1>
  {personer?.map((person) => (
        <Personer person={person} key={person._id} />
      ))}
</section>
<section >
    <h2>Arbeidslogg</h2>
          
    {loggforing?.map((loggForhome) => (
      <Loggkort loggForhome={loggForhome} key={loggForhome._id}/>
    ))}

  </section>


  </>
  )
}
