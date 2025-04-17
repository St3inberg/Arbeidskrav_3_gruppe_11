// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import Profilkort from './components/profilkort.jsx';

export default function App() {
  return (
    <Routes>
      {/* Layout renders header/nav and an <Outlet> for child routes */}
      <Route path="/" element={<Layout />}>
        {/* index = Home at “/” */}
        <Route index element={<Home />} />
        {/* profile page at “/profile/:slug” */}
        <Route path="profile/:slug" element={<Profilkort />} />
      </Route>
    </Routes>
  );
}
