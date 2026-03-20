import React from "react";
import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import DoctorLogin from "./pages/DoctorLogin.jsx";
import UserLogin from "./pages/UserLogin.jsx";

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
      </Routes>
    </>
  );
}
