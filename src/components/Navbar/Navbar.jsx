import React from "react";
import "./Navbar.css";

export default function Navbar(){
    return(
        <>
            <div className="fontsm flex-rows flex h-24">
                <div className="custom2 flex basis-1/6 items-center justify-center bg-[#d9d9d9]"><img src="assets/logo.svg" width="25rem"></img></div>
                <div className="custom2 flex basis-1/2 items-center justify-center text-[#D9D9D950]">
                    <div className="pr-10">HOME</div>
                    <div className="px-10">ABOUT</div>
                    <div className="pl-10">GALLERY</div>
                </div>
                <div className="custom2 flex basis-1/6 items-center justify-center text-[#D9D9D950]">ADD+</div>
                <div className="custom1 new2 flex basis-1/6 items-center justify-center text-white">SIGN UP</div>
            </div>
        </>
    );
}