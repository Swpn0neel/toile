// import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../utils/AuthContext";

export default function Navbar() {
  const { user, logoutUser } = useAuth();

  return (
    <>
      <div className="fontsm flex-rows flex h-28" id="home">
        <div className="custom2 hoverable flex basis-1/6 items-center justify-center bg-[#d9d9d9] hover:bg-[#060B19] transition-all duration-500">
          <img src="assets/logo.svg" width="32rem"></img>
        </div>
        <div className="custom2 flex basis-1/2 items-center justify-center text-[#D9D9D950]">
          <div className="pr-10 hover:text-[#d9d9d9] transition-all duration-100">
            <a href="#home" className="hover:cursor-none">
              HOME
            </a>
          </div>
          <div className="px-10 hover:text-[#d9d9d9] transition-all duration-100">
            <a href="#about" className="hover:cursor-none">
              ABOUT
            </a>
          </div>
          <div className="pl-10 hover:text-[#d9d9d9] transition-all duration-100">
            <a href="#gallery" className="hover:cursor-none">
              GALLERY
            </a>
          </div>
        </div>
        <Link
          to="contribute"
          className="custom2 flex basis-1/6 items-center justify-center cursor-none text-[#D9D9D950] hover:text-[#d9d9d9] transition-all duration-100"
        >
          ADD+
        </Link>
        {user ? (
          <button
            to="/"
            onClick={logoutUser}
            className="custom1 new2 hoverable flex basis-1/6 items-center justify-center text-white hover:bg-[#d9d9d9] hover:text-[#060B19] hover:cursor-none transition-all duration-500"
          >
            LOG OUT
          </button>
        ) : (
          <Link
            to="signup"
            className="custom1 new2 hoverable flex basis-1/6 items-center justify-center text-white hover:bg-[#d9d9d9] hover:text-[#060B19] hover:cursor-none transition-all duration-500"
          >
            SIGN UP
          </Link>
        )}
      </div>
    </>
  );
}
