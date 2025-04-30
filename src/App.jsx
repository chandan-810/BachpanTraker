import React from "react";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import Teacher from "./components/pages/Teacher/Teacher";
import NotFound from "./components/common/NotFound";

function App() {
  return (
    <div className="font-figtree min-w-screen bg-blue-50 min-h-screen flex flex-col transition-colors duration-300">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/teacher/:route" element={<Teacher />}></Route>
        <Route path="*" element={<NotFound redirectTo="/" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
