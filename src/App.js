import React from "react";
import AboutUs from "./pages/AboutUs";
import ServiceSection from "./components/ServiceSection";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Route, Routes, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyle />
      <ScrollTop />
      <Nav />

      <Routes Location={location} key={location.pathname}>
        <Route path="/" exact element={<AboutUs />} />

        <Route path="/work" element={<OurWork />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route path="/work/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
