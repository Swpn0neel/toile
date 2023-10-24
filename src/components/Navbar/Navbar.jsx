import React from "react";
import "./Navbar.css";

export default function Navbar(){
    return(
        <>
            <div class="grid grid-cols-6">
                <div class="py-8 custom2 bg-[#d9d9d9] text-center">IMG</div>
                <div class="py-8 custom2 text-[#D9D9D950] col-span-3 flex justify-center">
                    <div class="pr-10">HOME</div>
                    <div class="px-10">ABOUT</div>
                    <div class="pl-10">GALLERY</div>
                </div>
                <div class="py-8 custom2 text-[#D9D9D950] text-center">ADD+</div>
                <div class="py-8 custom1 text-white text-center">SIGN UP</div>
            </div>
        </>
    );
}