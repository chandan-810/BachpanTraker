import React from "react";
import { memo } from "react";
import { useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import Sidebar from "../../common/Sidebar";
import AttendanceManager from "./AttendanceManager";
import HomeworkManager from "./HomeworkManager";
import Students from "./Students";
import Messages from "./Messages";
import Reports from "./Reports";
import NotFound from "../../common/NotFound";

const Teacher = () => {
  const params = useParams();
  const page = params.route;

  return (
    <div className="flex">
      <Sidebar
        btns={[
          { Title: "Dashboard", To: "/teacher/dashboard" },
          { Title: "Attendance", To: "/teacher/attendance" },
          { Title: "Homework", To: "/teacher/homework" },
          { Title: "Students", To: "/teacher/students" },
          { Title: "Messages", To: "/teacher/messages" },
          { Title: "Reports", To: "/teacher/reports" },
        ]}
      />
      <>
        {page == "dashboard" ? (
          <Dashboard />
        ) : page == "attendance" ? (
          <AttendanceManager />
        ) : page == "homework" ? (
          <HomeworkManager />
        ) : page == "students" ? (
          <Students />
        ) : page == "messages" ? (
          <Messages />
        ) : page == "reports" ? (
          <Reports />
        ) : (
          <NotFound redirectTo="/teacher/dashboard" />
        )}
      </>
    </div>
  );
};

export default memo(Teacher);
