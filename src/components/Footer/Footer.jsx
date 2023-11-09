// import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="fontsm sm:unique2 flex max-sm:flex-col">
        <div className="new1 flex basis-2/3 flex-col justify-center gap-4 sm:pl-20 pl-8 max-sm:pb-10 max-sm:pt-10 pt-20 pb-10 sm:pr-96 pr-10">
          <div className="flex flex-row gap-3">
            <div className="items-center justify-center max-sm:h-6 max-sm:w-6">
              <img src="assets/logo.svg" width="40rem" />
            </div>
            <div className="text-2xl text-white flex items-end">TOILE</div>
          </div>
          <div className="hoverable text-[#D9D9D950] hover:text-[#D9D9D9] transition-all duration-500 ">
            SOMETIMES IT’S JUST OUR FEELINGS THAT GET INVOLVED IN BETWEEN OUR
            HEART AND MIND, AND WE CAN’T TAKE THE DECISION WHICH IS RIGHT FOR
            US.
          </div>
        </div>
        <div className="sm:new1 flex basis-1/3 flex-col justify-center gap-5 sm:pl-20 pl-8 max-sm:pb-10  sm:pt-20 pb-10 text-[#D9D9D950]">
          <div className="text-2xl">SOCIALS</div>
          <div className="hoverable flex flex-row gap-7">
            <div className="">1</div>
            <div className="">2</div>
            <div className="">3</div>
            <div className="">4</div>
          </div>
          <div className="sm:pt-8">
            © CREATED BY SWAPNONEEL SAHA & ARINDAM MAJUMDER
          </div>
        </div>
      </div>
    </>
  );
}
