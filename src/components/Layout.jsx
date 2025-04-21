import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from './nav.jsx';

export default function Layout() {
  return (
    <>
      <header className="site-header">
        
        <Link to="/" className="logo">
          Gruppe 11
        </Link>
        <Nav />
      </header>
      <main>
        <section id="flex-container">
        {<Outlet />}</section>
      </main>
    </>
  );
}
