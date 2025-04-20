// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import { fetchAllPersoner } from '../personerClient.js';
import Personer from "./Personer";



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
