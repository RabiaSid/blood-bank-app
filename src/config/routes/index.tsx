import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "../../pages/auth/sign-in-and-sign-up";
import AppHome from "../../pages/app-home";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="app-home" element={<AppHome />} />
        </Routes>
      </Router>
    </>
  );
}
