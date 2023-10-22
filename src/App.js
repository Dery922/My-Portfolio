import React from "react";
import AboutUs from "./pages/AboutUs";
import ServiceSection from "./components/ServiceSection";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />

        <Route path="/work" element={<OurWork />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route path="/work/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
