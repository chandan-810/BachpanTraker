import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

function Sidebar({ btns }) {
  // console.log(btns);
  const params = useParams();
  const page = params.route;

  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <div className="md:hidden duration-100 hover:scale-125 z-10 m-5 right-0 top-0 fixed">
        <button onClick={handleSidebar}>
          {showSidebar ? <MdClose size={20} /> : <MdMenu size={20} />}
        </button>
      </div>
      <div className="min-h-screen hidden h-full md:inline-block shadow-2xl w-50 bg-sky-50 left-0 top-0 p-4">
        <div className="space-y-4">
          <nav className="space-y-4">
            {btns.map((btn, index) => {
              let selected = false;
              if (page == btn.Title.toLowerCase()) {
                selected = true;
              }
              return (
                <Link
                  key={index}
                  to={btn.To}
                  className={
                    "cursor-pointer block px-4 py-2 text-gray-600 duration-100 hover:bg-sky-100  rounded-md transition-colors " +
                    (selected ? " bg-sky-100" : "")
                  }
                >
                  {btn.Title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      {showSidebar && (
        <div
          onClick={handleSidebar}
          className="h-full w-full fixed top-0 bottom-0 left-0 right-0 z-30"
        ></div>
      )}
      {showSidebar && (
        <div className="min-h-full duration-100 backdrop-blur-3xl fixed top-0 bottom-0 left-0 z-50 h-full md:hidden shadow-2xl w-50 bg-sky-50 p-4">
          <div className="space-y-4">
            <nav className="space-y-4">
              {btns.map((btn, index) => {
                let selected = false;
                if (page == btn.Title.toLowerCase()) {
                  selected = true;
                }
                return (
                  <Link
                    key={index}
                    to={btn.To}
                    className={
                      "cursor-pointer block px-4 py-2 text-gray-600 duration-100 hover:bg-sky-100  rounded-md transition-colors " +
                      (selected ? " bg-sky-100" : "")
                    }
                  >
                    {btn.Title}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
