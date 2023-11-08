// import React from "react";
import { Link } from "react-router-dom";
import "./Engage.css";

export default function Engage() {
  return (
    <>
      <div className="fontsm sm:unique2 flex max-sm:flex-col">
        <div className="fontlg new1 flex basis-2/3 flex-col justify-end gap-4 sm:pb-16 pt-20 max-sm:pb-10 sm:pl-20 pl-8 sm:text-6xl text-4xl text-white">
          <span className="hoverable">This is</span>
          <span className="hoverable">the time to join</span>
        </div>
        <div className="flex basis-1/3 flex-col bg-[url('/assets/main.png')]">
          <a
            href="#gallery"
            className="flex basis-1/3 items-center justify-center bg-[#D9D9D980] text-[#D060B19] hover:bg-[#D9D9D9] hover:cursor-none transition-all duration-500 max-sm:py-8"
          >
            GALLERY
          </a>
          <Link
            to="/contribute"
            className="unique1 flex basis-1/3 items-center justify-center bg-[#D9D9D980] text-[#D060B19] hover:bg-[#D9D9D9] transition-all duration-500 cursor-none max-sm:py-8"
          >
            CONTRIBUTE
          </Link>
          <Link
            to="/signup"
            className="unique1 hoverable flex basis-1/3 items-center justify-center bg-[#D9D9D9] text-[#D060B19] hover:cursor-none max-sm:py-8"
          >
            JOIN US NOW
          </Link>
        </div>
      </div>
    </>
  );
}
