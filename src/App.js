// yarn add react-router-dom sass

//packages
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Header from "./components/Header/Header";
import Opening from "./containers/Opening/Opening";
import Signup from "./containers/Signup/Signup";
import Footer from "./components/Footer/Footer";
//style
import "./App.scss";

function App() {
  const [headerState, setHeaderState] = useState(0);
  //0: Home page
  //1: Signup page

  return (
    <Router>
      <Header headerState={headerState} />
      <Routes>
        <Route path="/" element={<Opening setHeaderState={setHeaderState} />} />
        <Route
          path="/signup"
          element={<Signup setHeaderState={setHeaderState} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
