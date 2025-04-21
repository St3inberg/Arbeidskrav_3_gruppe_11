// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import Personer from "./Personer";
import ArbidsLogg from './LoggHome';
import LoggHome from './LoggHome';




export default function Home({personer, loggforing}) {



  return (
  <>
  <h1>Velkommen til forsiden!</h1>
  {personer?.map((person) => (
        <Personer person={person} key={person._id} />
      ))}

  <LoggHome/>
  
  </>
  )
}
