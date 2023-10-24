import React from "react";
import "./About.css";

export default function Hero(){
    return(
        <>
            <div class="flex flex-row new3">
                <div class="basis-2/3 flex flex-col">
                    <div class="pl-20 pb-16 pt-36 text-white text-6xl basis-1/3 new2">About Us</div>
                    <div class="basis-2/3 grid grid-cols-2">
                    <div class="p-5 new1"></div>
                    <div class="p-5 new1"></div>
                    <div class="p-5 new1"></div>
                    <div class="p-5 new1"></div>
                    </div>
                </div>
                <div class="basis-1/3 flex flex-col">
                    <div class="p-20 basis-5/6 flex justify-center items-center text-[#D9D9D950]">
                    SOMETIMES IT’S JUST OUR FEELINGS THAT GET INVOLVED IN BETWEEN OUR HEART AND MIND, AND WE CAN’T TAKE THE DECISION WHICH IS RIGHT FOR US. IT MAKES THINGS A LITTLE BIT MESSY FOR SURE BUT WHO CARES, IT’S ALL ABOUT OUR MINDSET AND WHAT WE THINK ABOUT THE WORLD AROUND US. IT’S BETTER TO KEEP THINGS SIMPLE, AND NOT GET DISAPPOINTED.
                    </div>
                    <div class="basis-1/6 flex justify-center items-center bg-[#D9D9D9] text-[#D060B19]">JOIN US NOW</div>
                </div>
            </div>
        </>
    );
}