import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Bio.jpeg";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [pageState, setPageState] = useState("Sign In");
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign In");
      }
    });
  }, [auth]);
  function PathMatchRoute(route) {
    return route === location.pathname;
  }
  return (
    <div className=" bg-white border-b shadow-sm sticky top-0 z-40">
      <header className=" flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src={logo}
            alt="BiOrganix-Bliss"
            className="cursor-pointer h-16"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`py-3 cursor-pointer text-sm font-semibold ${
                PathMatchRoute("/")
                  ? "text-black border-b-red-600"
                  : "text-gray-500 border-b-transparent"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>

            <li
              className={`py-3 cursor-pointer text-sm font-semibold ${
                PathMatchRoute("/Sign-In") || PathMatchRoute("/Profile")
                  ? "text-black border-b-red-600"
                  : "text-gray-500 border-b-transparent"
              }`}
              onClick={() => navigate("/Profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
