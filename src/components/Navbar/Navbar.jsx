import React from "react";
import "./Navbar.css";

export default function Navbar(){
    return(
        <>
            <div class="flex flex-rows h-24">
                <div class="basis-1/6 custom2 bg-[#d9d9d9] flex justify-center items-center">IMG</div>
                <div class="basis-1/2 custom2 text-[#D9D9D950] flex justify-center items-center">
                    <div class="pr-10">HOME</div>
                    <div class="px-10">ABOUT</div>
                    <div class="pl-10">GALLERY</div>
                </div>
                <div class="basis-1/6 custom2 text-[#D9D9D950] flex justify-center items-center">ADD+</div>
                <div class="basis-1/6 custom1 text-white flex justify-center items-center">SIGN UP</div>
            </div>
        </>
    );
}