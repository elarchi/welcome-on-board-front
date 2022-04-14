//packages
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//style
import "./App.scss";
//components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import OpeningPage from "./containers/OpeningPage/OpeningPage";
import SignupPage from "./containers/SignupPage/SignupPage";
import TodolistPage from "./containers/TodolistPage/TodolistPage";

function App() {
  //__________header operation__________
  const [headerState, setHeaderState] = useState(0);
  /*Options:
  0: Opening page 
  1: Signup page*/

  return (
    <Router>
      <Header headerState={headerState} />
      <Routes>
        <Route
          path="/"
          element={<OpeningPage setHeaderState={setHeaderState} />}
        />
        <Route
          path="/signup"
          element={<SignupPage setHeaderState={setHeaderState} />}
        />
        <Route
          path="/todolist"
          element={<TodolistPage setHeaderState={setHeaderState} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
