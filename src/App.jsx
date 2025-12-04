import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ToysPage from "./pages/ToysPage";
import ClothingPage from "./pages/ClothingPage";
import FeedingPage from "./pages/FeedingPage";
import DiapersPage from "./pages/DiapersPage";
import BagsPage from "./pages/BagsPage";
import BoyFashionPage from "./pages/BoyFashionPage";
import GirlFashionPage from "./pages/GirlFashionPage";

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boysfashion" element={<BoyFashionPage />} />
        <Route path="/girlsfashion" element={<GirlFashionPage />} />
        <Route path="/toys" element={<ToysPage />} />
        <Route path="/clothing" element={<ClothingPage />} />
        <Route path="/feeding" element={<FeedingPage />} />
        <Route path="/diapers" element={<DiapersPage />} />
        <Route path="/bags" element={<BagsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
