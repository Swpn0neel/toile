import React from "react";
import "./Navbar.css";

export default function Navbar(){
    return(
        <>
            <div class="flex-rows flex h-24">
                <div class="custom2 flex basis-1/6 items-center justify-center bg-[#d9d9d9]"><img src="assets/logo.svg" width="25rem"></img></div>
                <div class="custom2 flex basis-1/2 items-center justify-center text-[#D9D9D950]">
                    <div class="pr-10">HOME</div>
                    <div class="px-10">ABOUT</div>
                    <div class="pl-10">GALLERY</div>
                </div>
                <div class="custom2 flex basis-1/6 items-center justify-center text-[#D9D9D950]">ADD+</div>
                <div class="custom1 new2 flex basis-1/6 items-center justify-center text-white">SIGN UP</div>
            </div>
        </>
    );
}