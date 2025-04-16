// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import nav from 'src\components\nav.jsx';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:slug" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
