// import React from "react";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
import Protect from "./Protect";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Protect Component={Dashboard} />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
