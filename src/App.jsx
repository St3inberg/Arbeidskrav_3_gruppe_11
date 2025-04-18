import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout     from './components/Layout.jsx';
import Home       from './components/Home.jsx';
import Profilkort from './components/profilkort.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profile/:slug" element={<Profilkort />} />
      </Route>
    </Routes>
  );
}
