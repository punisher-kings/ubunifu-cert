import Sign from "./components/Sign";
import Login from "./components/Login";
import Home from "./components/Home";
import Check from "./components/Check";
import Shop from "./components/Shop";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewProduct from "./components/view";
import AdminManager from "./Admin";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster />

      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Sign />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/" element={<Home />} />
          <Route path="/Check" element={<Check />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/view/:id" element={<ViewProduct />} />
          <Route path="/admin" element={<AdminManager />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
