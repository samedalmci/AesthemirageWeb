import React from "react";
import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import DoctorLogin from "./pages/DoctorLogin.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import SpecialistShowcase from "./pages/specialist-showcase.jsx";
import FindSpecialist from "./pages/find-specialist.jsx";
import MainDocPanel from "./pages/DoctorControlPanel/MainDocPanel.jsx";
import MainUserPanel from "./pages/UserControlPanel/MainUserPanel.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/doktor-giris"
          element={
            <>
              <DoctorLogin />
              <Footer />
            </>
          }
        />
        <Route
          path="/giris"
          element={
            <>
              <UserLogin />
              <Footer />
            </>
          }
        />
        <Route
          path="/specialist-showcase"
          element={
            <>
              <Navbar />
              <SpecialistShowcase />
              <Footer />
            </>
          }
        />
        <Route
          path="/find-specialist"
          element={
            <>
              <Navbar />
              <FindSpecialist />
              <Footer />
            </>
          }
        />
        <Route path="/doctor-panel" element={<MainDocPanel />} />
        <Route path="/user-panel" element={<MainUserPanel />} />
      </Routes>
    </>
  );
}
