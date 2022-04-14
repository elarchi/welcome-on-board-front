//packages
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//style
import "./App.scss";
//components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Opening from "./containers/Opening/Opening";
import Signup from "./containers/Signup/Signup";
import Todolist from "./containers/Todolist/Todolist";

function App() {
  //__________header operation__________
  const [headerState, setHeaderState] = useState(0);
  /*Different options:
  0: Opening page 
  1: Signup page*/

  return (
    <Router>
      <Header headerState={headerState} />
      <Routes>
        <Route path="/" element={<Opening setHeaderState={setHeaderState} />} />
        <Route
          path="/signup"
          element={<Signup setHeaderState={setHeaderState} />}
        />
        <Route
          path="/todolist"
          element={<Todolist setHeaderState={setHeaderState} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
