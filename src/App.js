//PACKAGE
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//STYLE
import "./App.scss";
//COMPONENT
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import OpeningPage from "./containers/OpeningPage/OpeningPage";
import SignupPage from "./containers/SignupPage/SignupPage";
import TodolistPage from "./containers/TodolistPage/TodolistPage";
import Page404 from "./containers/Page404/Page404";

function App() {
  //HEADER OPERATIONS
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
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
