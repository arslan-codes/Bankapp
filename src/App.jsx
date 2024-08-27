import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./style";

// Importing components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Topbar from "./components/TopBar";
import Features from "./components/Features";
import GetStarted from "./components/GetStarted";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

const HomePage = () => (
  <>
    <Topbar></Topbar>

    <Hero />

    <GetStarted />

    <Features />

    <Blog />
  </>
);

const App = () => {
  return (
    <div className="bg-black text-white tracking-tight scroll-smooth focus:scroll-autox ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/getStarted" element={<GetStarted />} />
          <Route path="/features" element={<Features />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
