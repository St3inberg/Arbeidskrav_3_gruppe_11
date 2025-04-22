import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout     from './components/Layout.jsx';
import Home       from './components/Home.jsx';
import Profilkort from './components/ProfilSide.jsx';
import './components/styles.scss';
import { fetchAllPersoner, fetchWorkLog, } from './personerClient.js';

export default function App() {

  const [personer, setPersoner] = useState([]);
  const [loggforing, setLoggforing] = useState([]);

  const getAllPersoner = async () => {
  const data = await fetchAllPersoner();
  setPersoner(data)
};



  const getAllogger = async () => {
    const data = await fetchWorkLog();
    setLoggforing(data)
    console.log(data)
  }



useEffect(() => {
    getAllPersoner();
    getAllogger();
    
  }, []);

  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home personer={personer} loggforing={loggforing}/>} />
        <Route path="profile/:slug" element={<Profilkort  />} />
      </Route>
    </Routes>
   
  );
}
