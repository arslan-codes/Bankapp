import React from "react";
import styles from "./style";

// importing components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Topbar from "./components/TopBar";
import GetStarted from "./components/GetStarted";
// Business,   Footer,  Clients,  Testimonials,  CTA,  CardDeal,  Billing,
//Hero, GetStarted,  FeedbackCard,  Button,
const App = () => {
  return (
    <div className="bg-black text-white scroll-smooth focus:scroll-auto">
      <Navbar />
      <Hero />
      <GetStarted />
      <Topbar />
    </div>
  );
};

export default App;
