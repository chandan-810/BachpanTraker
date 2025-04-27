import React from "react";

function Sidebar() {
  const components = [
    "Dashboard",
    "Attendance",
    "Homework",
    "Students",
    "Messages",
    "Reports",
  ];

  return (
    <div>
      <div className="h-screen w-50 bg-gray-100 left-0 top-0 p-4">
        <div className="space-y-4">
          <nav className="space-y-4">
            {components.map((component, index) => (
              <a
                key={index}
                className="cursor-pointer block px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-md transition-colors"
              >
                {component}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
