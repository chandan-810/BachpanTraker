import React, { useState, memo } from "react";
import Input from "../../common/Input";
import Button from "../../common/Button";
import { IoMdPerson } from "react-icons/io";
import { RiAdminFill, RiParentFill } from "react-icons/ri";
import Logo from "../../../assets/logo.png";

const Register = () => {
  const [role, setRole] = useState(""); // Initially no role
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    password: "",
  });

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 transition-colors duration-300">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-6">
          <img src="./logo.png" alt="Logo" className="h-24 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">
            Create an Account
          </h1>
        </div>

        {/* Role Selector */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {role ? "Selected Role:" : "Please Select Your Role:"}
          </label>
          <div className="flex justify-around mb-6">
            <span
              onClick={() => handleRoleSelect("Teacher")}
              className={`flex flex-col items-center cursor-pointer transition ${
                role === "Teacher"
                  ? "text-blue-600 font-bold"
                  : "text-gray-700 hover:text-black "
              }`}
            >
              <IoMdPerson size={28} />
              <span className="text-sm mt-1">Teacher</span>
            </span>

            <span
              onClick={() => handleRoleSelect("Parent")}
              className={`flex flex-col items-center cursor-pointer transition ${
                role === "Parent"
                  ? "text-blue-600  font-bold"
                  : "text-gray-700 hover:text-black"
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
          <form className="flex flex-col w-full gap-4">
            <Input
              name="fullName"
              type="text"
              minLength="3"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <Input
              name="mobile"
              type="tel"
              minLength="10"
              maxLength="10"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <Input
              name="password"
              type="password"
              minLength="6"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
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
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline 0">
                Login
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default memo(Register);
