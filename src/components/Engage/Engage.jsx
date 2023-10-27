import React from "react";
import "./Engage.css";

export default function Engage(){
    return(
        <>
            <div className="fontsm unique2 flex flex-row">
                <div className="fontlg new1 flex basis-2/3 flex-col justify-end gap-4 pb-16 pl-20 text-6xl text-white">
                    <div className="hoverable">This is</div>
                    <div className="hoverable">the time to join</div>
                </div>
                <div className="flex basis-1/3 flex-col bg-[url('/assets/main.png')]">
                    <div className="flex basis-1/3 items-center justify-center bg-[#D9D9D980] text-[#D060B19] hover:bg-[#D9D9D9] transition-all duration-500">GALLERY</div>
                    <div className="unique1 flex basis-1/3 items-center justify-center bg-[#D9D9D980] text-[#D060B19] hover:bg-[#D9D9D9] transition-all duration-500">CONTRIBUTE</div>
                    <div className="unique1 hoverable flex basis-1/3 items-center justify-center bg-[#D9D9D9] text-[#D060B19]">JOIN US NOW</div>
                </div>
            </div>
        </>
    );
}