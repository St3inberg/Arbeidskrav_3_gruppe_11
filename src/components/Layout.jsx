import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './nav.jsx';   

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <h1 className="logo">Gruppe 11</h1>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
