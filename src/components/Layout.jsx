// src/components/Layout.jsx
import React from 'react';
import Nav from './nav.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <h1 className="logo">Gruppe 11</h1>
        <Nav />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
