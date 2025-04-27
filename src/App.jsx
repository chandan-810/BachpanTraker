import React from "react";
import Home from "./components/pages/Home";
import Login from "./components/auth/LoginForm";
import Register from "./components/pages/Auth/Register";
import Sidebar from "./components/common/Sidebar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/sidebar" element={<Sidebar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
