// import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../utils/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="fontsm h-20 flex sm:h-28 " id="home">
        <div className="custom2 hoverable flex sm:basis-1/6 basis-2/5 items-center justify-center bg-[#d9d9d9] hover:bg-[#060B19] transition-all duration-500">
          <img src="assets/logo.svg" width="32rem"></img>
        </div>
        <div className="custom2 hidden sm:flex basis-1/2 items-center justify-center text-[#D9D9D950]">
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
          className="custom2 hidden sm:flex basis-1/6 items-center justify-center cursor-none text-[#D9D9D950] hover:text-[#d9d9d9] transition-all duration-100"
        >
          ADD+
        </Link>
        {user ? (
          <button
            to="/"
            onClick={logoutUser}
            className="custom1 new2 hoverable hidden sm:flex basis-1/6 items-center justify-center text-white hover:bg-[#d9d9d9] hover:text-[#060B19] hover:cursor-none transition-all duration-500"
          >
            LOG OUT
          </button>
        ) : (
          <Link
            to="signup"
            className="custom1 new2 hoverable hidden sm:flex basis-1/6 items-center justify-center text-white hover:bg-[#d9d9d9] hover:text-[#060B19] hover:cursor-none transition-all duration-500"
          >
            SIGN UP
          </Link>
        )}
        {/* hidden navbar */}
        <div className="flex sm:hidden hoverable justify-end items-center custom2 basis-3/5">
          <div className="pr-7">
            {isOpen ? (
              <RxCross2
                onClick={toggleNavbar}
                className="text-4xl text-[#D9D9D9]"
              />
            ) : (
              <GiHamburgerMenu
                onClick={toggleNavbar}
                className="text-3xl text-[#D9D9D9]"
              />
            )}
          </div>
        </div>
        {isOpen ? (
          <>
            <div className="absolute sm:hidden w-screen mt-20 z-10 h-[90vh] bg-[#060B19]">
              <div className="flex flex-col">
                <div className="border-down py-10 text-center text-[#D9D9D9] hover:text-[#d9d9d9] transition-all duration-100">
                  <a
                    href="#home"
                    onClick={toggleNavbar}
                    className="hover:cursor-none"
                  >
                    HOME
                  </a>
                </div>
                <div className="border-down py-10 text-center text-[#D9D9D9] hover:text-[#d9d9d9] transition-all duration-100">
                  <a
                    href="#about"
                    onClick={toggleNavbar}
                    className="hover:cursor-none"
                  >
                    ABOUT
                  </a>
                </div>
                <div className="border-down py-10 text-center text-[#D9D9D9] hover:text-[#d9d9d9] transition-all duration-100">
                  <a
                    href="#gallery"
                    onClick={toggleNavbar}
                    className="hover:cursor-none"
                  >
                    GALLERY
                  </a>
                </div>
                <div className="border-down py-10 text-center text-[#D9D9D9] hover:text-[#d9d9d9] transition-all duration-100">
                  <Link
                    to="contribute"
                    onClick={toggleNavbar}
                    className="hover:cursor-none"
                  >
                    ADD+
                  </Link>
                </div>
                <div className="border-down sm:hidden py-10 text-center text-white hover:bg-[#d9d9d9] hover:text-[#060B19] transition-all duration-500">
                  {user ? (
                    <button
                      to="/"
                      onClick={() => {
                        logoutUser();
                        toggleNavbar();
                      }}
                      className="hover:cursor-none"
                    >
                      LOG OUT
                    </button>
                  ) : (
                    <Link
                      to="signup"
                      onClick={toggleNavbar}
                      className="hover:cursor-none"
                    >
                      SIGN UP
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
