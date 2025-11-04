import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Favorite from "./components/Favorite";
import Moment from "./components/Moment";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="">
      <div className="h-150 bg-primary px-5 pt-3.5">
        <Navbar />
        {/* hero section */}
        <Hero />
      </div>
      {/* favorite */}
      <Favorite />
      <Moment />
      <Footer />
    </div>
  );
};

export default App;
