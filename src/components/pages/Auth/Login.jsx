import React from "react";
import { memo } from "react";
import Input from "../../common/Input";

const Login = () => {
  return (
    <div className="h-full bg-blue-100 w-fit m-auto rounded-4xl py-5 px-10 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center flex-col">
        <img src="./logo.png" alt="Logo" className="h-32" />
        <h1 className="font-bold text-gray-900 hover:text-black text-2xl">
          Welcome to SSM
        </h1>
      </div>
      <div>
        <Input type="tel" placeholder="Mobile Number" required />
      </div>
    </div>
  );
};

export default memo(Login);
