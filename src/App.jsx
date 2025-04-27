import React from "react";
import Home from "./components/pages/Home";
import Login from "./components/auth/LoginForm";
import Register from "./components/pages/Auth/Register";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";

function App() {
  return (
    <div className="font-figtree min-w-screen bg-blue-50 min-h-screen flex flex-col">
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
