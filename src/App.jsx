import Sign from "./components/Sign";
import Login from "./components/Login";
import Home from "./components/Home";
import Check from "./components/Check";
import Contact from "./components/Contact";
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
          <Route path="/sign" element={<Sign />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/" element={<Home />} />
          <Route path="/check" element={<Check />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/view/:id" element={<ViewProduct />} />
          <Route path="/Admin" element={<AdminManager />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
