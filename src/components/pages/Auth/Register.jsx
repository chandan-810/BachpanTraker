import React, { useState, memo } from "react";
import Input from "../../common/Input";
import { IoMdPerson } from "react-icons/io";
import { RiAdminFill, RiParentFill } from "react-icons/ri";
import Logo from "../../../assets/logo.png";
import { handleError, handleSuccess } from "../../utils/utils";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [role, setRole] = useState(""); // Initially no role
  const [SignupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copysignupInfo = { ...SignupInfo };
    copysignupInfo[name] = value;
    setSignupInfo(copysignupInfo);
  };

  const hendleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = SignupInfo;
    if (!name || !email || !password) {
      return handleError("All are requrid");
    }
    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(SignupInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100  transition-colors duration-300">
      <div className="w-full max-w-md bg-white  rounded-3xl shadow-lg p-8 flex flex-col items-center">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-6">
          <img src={Logo} alt="Logo" className="h-24 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 ">
            Create an Account
          </h1>
        </div>

        {/* Role Selector */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700  mb-2">
            {role ? "Selected Role:" : "Please Select Your Role:"}
          </label>
          <div className="flex justify-around mb-6">
            <span
              onClick={() => handleRoleSelect("Teacher")}
              className={`flex flex-col items-center cursor-pointer transition ${
                role === "Teacher"
                  ? "text-blue-600  font-bold"
                  : "text-gray-700  hover:text-black "
              }`}
            >
              <IoMdPerson size={28} />
              <span className="text-sm mt-1">Teacher</span>
            </span>

            <span
              onClick={() => handleRoleSelect("Parent")}
              className={`flex flex-col items-center cursor-pointer transition ${
                role === "Parent"
                  ? "text-blue-600 font-bold"
                  : "text-gray-700 hover:text-black "
              }`}
            >
              <RiParentFill size={28} />
              <span className="text-sm mt-1">Parent</span>
            </span>

            <span
              onClick={() => handleRoleSelect("Admin")}
              className={`flex flex-col items-center cursor-pointer transition ${
                role === "Admin"
                  ? "text-blue-600 font-bold"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              <RiAdminFill size={28} />
              <span className="text-sm mt-1">Admin</span>
            </span>
          </div>
        </div>

        {/* Form - Show only after role is selected */}
        {role && (
          <form onSubmit={hendleSignup} className=" flex flex-col w-full gap-4">
            <Input
              name="name"
              type="text"
              minLength="3"
              placeholder="Full Name"
              onChange={handleChange}
              // required
              value={SignupInfo.name}
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              // required
              value={SignupInfo.email}
            />
            <Input
              name="password"
              type="password"
              minLength="6"
              placeholder="Password"
              onChange={handleChange}
              // required
              value={SignupInfo.password}
            />

            {/* Submit Button */}
            <div className="mt-6 bg-blue-500 rounded-2xl flex justify-end mr-44 text-white">
              <button
                type="submit"
                className="cursor-pointer w-full text-lg md:text-xl py-2 "
              >
                REGISTER
              </button>
            </div>

            {/* Link to Login */}
            <p className="text-center text-sm text-gray-600  mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline ">
                Login
              </a>
            </p>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default memo(Register);
