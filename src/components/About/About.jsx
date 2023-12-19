// import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="fontsm new3 flex max-sm:flex-col" id="about">
        <div className="flex basis-2/3 flex-col">
          <div className="new2 flex basis-1/3 items-end sm:pb-16 pb-10 sm:pl-20 pl-8">
            <p className="fontlg hoverable text-6xl text-white">About Us</p>
          </div>
          <div className="grid basis-2/3 grid-cols-2">
            <div className="new1">
              <img
                src="assets/about/img1.png"
                className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-all duration-500"
              ></img>
            </div>
            <div className="new1">
              <img
                src="assets/about/img2.png"
                className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-all duration-500"
              ></img>
            </div>
            <div className="new1">
              <img
                src="assets/about/img3.png"
                className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-all duration-500"
              ></img>
            </div>
            <div className="new1">
              <img
                src="assets/about/img4.png"
                className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-all duration-500"
              ></img>
            </div>
          </div>
        </div>
        <div className="flex basis-1/3 flex-col">
          <div className="new2 flex basis-5/6 items-center justify-center sm:p-20 max-sm:py-10 px-8 py-8 text-[#D9D9D950]">
            <p className="hoverable text-[#D9D9D950] hover:text-[#D9D9D9] transition-all duration-500">
            EMBARK ON A CAPTIVATING ODYSSEY THROUGH THE VAST REALM OF ARTISTIC EXPLORATION, 
            WHERE THE LUMINOUS TAPESTRY OF DESIGN INTERTWINES WITH THE VERY FABRIC OF 
            INSPIRATION. IN THIS ENRICHING JOURNEY, DELVE INTO THE KALEIDOSCOPIC WORLD 
            OF RENOWNED ARTISTS, WHOSE MASTERPIECES SERVE AS PORTALS TO PROFOUND 
            UNDERSTANDING AND CREATIVE TRANSCENDENCE.
              {/* SOMETIMES IT’S JUST OUR FEELINGS THAT GET INVOLVED IN BETWEEN OUR
              HEART AND MIND, AND WE CAN’T TAKE THE DECISION WHICH IS RIGHT FOR
              US. IT MAKES THINGS A LITTLE BIT MESSY FOR SURE BUT WHO CARES,
              IT’S ALL ABOUT OUR MINDSET AND WHAT WE THINK ABOUT THE WORLD
              AROUND US. IT’S BETTER TO KEEP THINGS SIMPLE, AND NOT GET
              DISAPPOINTED. */}
            </p>
          </div>
          <Link
            to="/signup"
            className="flex hoverable sm:basis-1/6 items-center max-sm:h-24 justify-center cursor-none bg-[#D9D9D9] text-[#D060B19]"
          >
            JOIN US NOW
          </Link>
        </div>
      </div>
    </>
  );
}
