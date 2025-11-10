import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Moments from "./pages/Moments";
import Plays from "./pages/Plays";
import Goals from "./pages/Goals";
import Examples from "./pages/Examples";
import Integrations from "./pages/Integrations";
import Pricing from "./pages/Pricing";
import StopFocusingLTV from "./pages/StopFocusingLTV";
import Blog from "./pages/Blog";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/moments" element={<Moments />} />
      <Route path="/plays" element={<Plays />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/examples" element={<Examples />} />
      <Route path="/integrations" element={<Integrations />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/ltv" element={<StopFocusingLTV />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default App;
