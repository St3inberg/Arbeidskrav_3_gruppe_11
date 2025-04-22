// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import Personer from "./profilkort";





export default function Home({personer}) {



  return (
  <>
  
  {personer?.map((person) => (
        <Personer person={person} key={person._id} />
      ))}


  
  </>
  )
}
