import React from "react";
import "./Navbar.css";

export default function Navbar(){
    return(
        <>
            <div className="fontsm flex-rows flex h-28">
                <div className="custom2 hoverable flex basis-1/6 items-center justify-center bg-[#d9d9d9] hover:bg-[#060B19] transition-all duration-500"><img src="assets/logo.svg" width="32rem"></img></div>
                <div className="custom2 flex basis-1/2 items-center justify-center text-[#D9D9D950]">
                    <div className="pr-10 hover:text-[#d9d9d9] transition-all duration-100">HOME</div>
                    <div className="px-10 hover:text-[#d9d9d9] transition-all duration-100">ABOUT</div>
                    <div className="pl-10 hover:text-[#d9d9d9] transition-all duration-100">GALLERY</div>
                </div>
                <div className="custom2 flex basis-1/6 items-center justify-center text-[#D9D9D950] hover:text-[#d9d9d9] transition-all duration-100">ADD+</div>
                <div className="custom1 new2 hoverable flex basis-1/6 items-center justify-center text-white hover:bg-[#d9d9d9] hover:text-[#060B19] transition-all duration-500">SIGN UP</div>
            </div>
        </>
    );
}