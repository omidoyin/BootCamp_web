import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import MoreContents from "./components/MoreContents";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/more/:id" element={<MoreContents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </HashRouter>
    </>
  );
}

export default App;
