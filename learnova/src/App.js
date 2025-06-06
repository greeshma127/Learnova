import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomeSection from "./components/WelcomeSection";
import Footer from "./components/Footer";
import Courses from "./pages/Courses";
import Prices from "./pages/Prices";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomeSection />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/prices" element={<Prices/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
