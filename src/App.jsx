import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout     from './components/Layout.jsx';
import Home       from './components/Home.jsx';
import Profilkort from './components/profilkort.jsx';
import './components/styles.scss';
import { fetchAllPersoner } from './personerClient.js';

export default function App() {

  const [personer, setPersoner] = useState([]);
  const getAllPersoner = async () => {
  const data = await fetchAllPersoner();
  setPersoner(data)

  
};
useEffect(() => {
    getAllPersoner();
  }, []);

  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home personer={personer}/>} />
        <Route path="profile/:slug" element={<Profilkort />} />
      </Route>
    </Routes>
   
  );
}
