import React from "react";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";

function App() {
  return (
    <div className="font-figtree min-w-screen bg-blue-50 min-h-screen flex flex-col  dark:bg-gray-800 transition-colors duration-300">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/sidebar" element={<Sidebar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
