import React, { useState } from "react";
import Home from "./components/pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import RefreshHandler from "./components/common/RefreshHandler";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="font-figtree min-w-screen bg-blue-50 min-h-screen flex flex-col  dark:bg-gray-800 transition-colors duration-300">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route index element={<PrivateRoute element={<Home />} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/sidebar" element={<Sidebar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
