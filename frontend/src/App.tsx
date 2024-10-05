import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SiteTitle from "./components/HomeComponents/SiteTitle";
import Home from "./components/HomeComponents/Home";
import ScrollingBanner from './components/ScrollingBanner/ScrollingBanner';
import Admin from "./components/AdminComponents/Admin";
import NavMenu from './components/NavBarComponents/NavMenu';
import Admin_Interface from "./components/AdminComponents/Admin_Interface";
import Club from "./components/ClubComponents/Club";
import About from "./components/AboutComponents/About";

const App: React.FC = () => {
  const names = [ 'Our Dev Team', 'Andrew Ptaszek', 'Zane Wolfe', 'Colin Sadowitz', 'Michael Carlson',
  'Our Dev Team', 'Andrew Ptaszek', 'Zane Wolfe', 'Colin Sadowitz', 'Michael Carlson',
  'Our Dev Team', 'Andrew Ptaszek', 'Zane Wolfe', 'Colin Sadowitz', 'Michael Carlson'];
  // Names for banner stored here

  return (
    <Router>
        <div/>
        {/* Scrolling Banner */}
       <ScrollingBanner names={names} />
        {/* Main Content */}
        <div>
        {/* Off-Canvas NavMenu */}
        <NavMenu />
        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/club" element={<Club />} />
          <Route path="/about" element={<About />} />
    	  <Route path="/admin-page" element={<Admin />} />
          <Route path="/admin-interface" element={<Admin_Interface/>} />
        </Routes>
        </div>
    </Router>
  );
};

export default App;
