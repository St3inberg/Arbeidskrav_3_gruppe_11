// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import Personer from "./profilkort";





export default function Home({personer}) {



  return (
  <>
  <h1>Velkommen til forsiden!</h1>
  {personer?.map((person) => (
        <Personer person={person} key={person._id} />
      ))}


  
  </>
  )
}
