// import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="fontsm sm:h-[45vh] flex max-sm:flex-col">
        <div className="new1 flex basis-2/3 flex-col justify-center gap-4 sm:pl-20 pl-8 max-sm:pb-10 max-sm:pt-10 pt-20 pb-10 sm:pr-96 pr-10">
          <div className="flex flex-row gap-3">
            <div className="items-center justify-center max-sm:h-6 max-sm:w-6">
              <img src="assets/logo.svg" width="40rem" />
            </div>
            <div className="text-2xl text-white flex items-end">TOILE</div>
          </div>
          <div className="hoverable text-[#D9D9D950] hover:text-[#D9D9D9] transition-all duration-500 ">
            EMBARK ON A CAPTIVATING ODYSSEY THROUGH THE VAST REALM OF ARTISTIC EXPLORATION, 
            WHERE THE LUMINOUS TAPESTRY OF DESIGN INTERTWINES WITH THE VERY FABRIC OF 
            INSPIRATION.
          </div>
        </div>
        <div className="sm:new1 new2 flex basis-1/3 flex-col justify-center gap-5 sm:pl-20 pl-8 max-sm:pb-10  sm:pt-20 pb-10 text-[#D9D9D950]">
          <div className="text-2xl">SOCIALS</div>
          <div className="hoverable flex flex-row gap-7">
            <a href="https://twitter.com/swapnoneel123" className="hover:cursor-none">
              <img src="assets/socials/twitter.svg" alt="twitter" className="w-8" />
            </a>
            <a href="https://github.com/Swpn0neel/toile" className="hover:cursor-none">
              <img src="assets/socials/github.svg" alt="github" className="w-8" />
            </a>
            <a href="https://www.instagram.com/swapnoneel111/" className="hover:cursor-none">
              <img src="assets/socials/insta.svg" alt="instagram" className="w-8" />
            </a>
          </div>
          <div className="sm:pt-8 max-sm:pr-10">
            © CREATED BY SWAPNONEEL SAHA & ARINDAM MAJUMDER
          </div>
        </div>
      </div>
    </>
  );
}
