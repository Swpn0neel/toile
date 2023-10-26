import React from "react";
import "./Engage.css";

export default function Engage(){
    return(
        <>
            <div class="fontsm unique2 flex flex-row">
                <div class="fontlg new1 flex basis-2/3 flex-col justify-end gap-4 pb-16 pl-20 text-6xl text-white">
                    <div>This is</div>
                    <div>the time to join</div>
                </div>
                <div class="flex basis-1/3 flex-col">
                    <div class="flex basis-1/3 items-center justify-center bg-[#D9D9D980] text-[#D060B19]">GALLERY</div>
                    <div class="unique1 flex basis-1/3 items-center justify-center bg-[#D9D9D980] text-[#D060B19]">CONTRIBUTE</div>
                    <div class="unique1 flex basis-1/3 items-center justify-center bg-[#D9D9D9] text-[#D060B19]">JOIN US NOW</div>
                </div>
            </div>
        </>
    );
}