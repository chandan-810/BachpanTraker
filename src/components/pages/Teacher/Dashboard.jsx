import React from "react";
import { memo } from "react";
import Sidebar from "../../common/Sidebar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const homeworkArr = [
    { hw: "Mathematics - Chapter 5 Problems", due: "02/05/2025" },
    { hw: "Science - Lab Report", due: "03/05/2025" },
    { hw: "English - Essay Writting", due: "05/05/2025" },
  ];

  return (
    <div className="flex flex-col gap-10 p-2 md:p-5 w-full">
      <div className="shadow-lg rounded-4xl py-5 px-2 md:px-10">
        <h1 className="text-xl mb-4 md:text-2xl font-bold text-gray-800">
          Teacher Dashboard
        </h1>
        <div className="flex flex-wrap gap-5">
          <div className="bg-blue-300 hover:scale-95 duration-75 flex flex-col items-center justify-center h-40 w-56 p-5 rounded-4xl border shadow-2xl border-blue-500">
            <h2 className="text-xl text-blue-900 font-semibold">
              Mark Attendance
            </h2>
            <Link
              to="/teacher/attendance"
              className="text-lg text-blue-500 font-semibold hover:scale-105 duration-75"
            >
              Fill Now | Today
            </Link>
          </div>
          <div className="bg-blue-300 hover:scale-95 duration-75 flex flex-col items-center justify-center h-40 w-56 p-5 rounded-4xl border shadow-2xl border-blue-500">
            <h2 className="text-xl text-blue-900 font-semibold">
              Add Homework
            </h2>
            <Link
              to="/teacher/homework"
              className="text-lg text-blue-500 font-semibold hover:scale-105 duration-75"
            >
              Create Assignment
            </Link>
          </div>
          <div className="bg-blue-300 hover:scale-95 duration-75 flex flex-col items-center justify-center h-40 w-56 p-5 rounded-4xl border shadow-2xl border-blue-500">
            <h2 className="text-xl text-blue-900 font-semibold">Messages</h2>
            <Link
              to="/teacher/messages"
              className="text-lg text-blue-500 font-semibold hover:scale-105 duration-75"
            >
              Check Now
            </Link>
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded-4xl py-5 px-2 md:px-10">
        <h1 className="text-xl mb-4 md:text-2xl font-bold text-gray-800">
          Today's Attendance
        </h1>
        <div className="flex flex-wrap gap-5">
          <div className="w-56 h-40 items-center justify-center flex">
            {/* To change */}
            <div className="w-40 h-40 bg-green-500 relative overflow-hidden items-center justify-center flex rounded-full">
              <div className="w-16 h-16 bg-red-500 absolute right-0 top-0"></div>
              <div className="w-28 h-28 bg-white relative rounded-full"></div>
              <h1 className="absolute font-extrabold text-gray-900 text-2xl">
                {Math.round((26 / 30) * 100)}%
              </h1>
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-xl text-gray-800 font-medium">
              Total Students: 30
            </h3>
            <h3 className="text-xl text-gray-800 font-medium">Present: 26</h3>
            <h3 className="text-xl text-gray-800 font-medium">Absent: 4</h3>
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded-4xl py-5 px-2 md:px-10">
        <h1 className="text-xl mb-4 md:text-2xl font-bold text-gray-800">
          Recent Homework
        </h1>
        <div className="flex flex-col py-5 px-2 bg-blue-100 gap-5">
          {homeworkArr.map((hw) => {
            return (
              <div className="bg-blue-50 px-3 py-1 rounded-3xl flex flex-wrap md:flex-nowrap items-center justify-between ">
                <span className="w-full inline-block">{hw.hw}</span>
                <span className="w-40 inline-block">Due: {hw.due}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Dashboard);
