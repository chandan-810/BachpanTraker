import React from "react";
import { Link, useParams } from "react-router-dom";

function Sidebar({ btns }) {
  // console.log(btns);
  const params = useParams();
  const page = params.route;

  return (
    <div>
      <div className="h-screen w-50 bg-sky-50 left-0 top-0 p-4">
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
    </div>
  );
}

export default Sidebar;
