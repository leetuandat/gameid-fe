import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import News from './pages/News';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
