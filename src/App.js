// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HorizontalNav from './components/HorizontalNav';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';
import Settings from './pages/Settings/Settings'; 
import Communauty from './pages/Communauty/Communauty';

const App = () => {
  return (
    <div className='App-wrapper'>
      <HorizontalNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/communauty" element={<Communauty/>} />
        <Route path="/error" element={<NotFound />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
