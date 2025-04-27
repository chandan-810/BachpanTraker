import React from "react";
import Home from "./components/pages/Home";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="font-figtree min-w-screen bg-blue-50 min-h-screen flex flex-col">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
