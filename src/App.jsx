import React from "react";
import styles from "./style";

// importing components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Topbar from "./components/TopBar";
import Features from "./components/Features";
import GetStarted from "./components/GetStarted";
import Blog from "./components/Blog";

// Business,   Footer,  Clients,  Testimonials,  CTA,  CardDeal,  Billing,
//Hero, GetStarted,  FeedbackCard,  Button,
const App = () => {
  return (
    <div className="bg-black text-white scroll-smooth focus:scroll-autox  ">
      <Navbar />
      <Hero />
      <GetStarted />
      <Features />
      <Blog />
      <Topbar />
    </div>
  );
};

export default App;
