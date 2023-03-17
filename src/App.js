import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home.js";
import About from "./components/About";
import Courses from "./components/Courses";
import Programs from "./components/Programs";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Programs" element={<Programs />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
