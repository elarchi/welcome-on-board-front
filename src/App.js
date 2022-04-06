// yarn add react-router-dom sass

//packages
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Home from "./containers/Home/Home";
import Signup from "./containers/Signup/Signup";
//style
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
