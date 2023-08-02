import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoreContents from "./components/MoreContents";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/more/:id" element={<MoreContents />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
