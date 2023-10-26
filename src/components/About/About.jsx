import React from "react";
import "./About.css";

export default function About(){
    return(
        <>
            <div class="new3 flex flex-row">
                <div class="flex basis-2/3 flex-col">
                    <div class="new2 flex basis-1/3 items-end pb-16 pl-20 text-6xl text-white">About Us</div>
                    <div class="grid basis-2/3 grid-cols-2">
                        <div class="new1 p-5"></div>
                        <div class="new1 p-5"></div>
                        <div class="new1 p-5"></div>
                        <div class="new1 p-5"></div>
                    </div>
                </div>
                <div class="flex basis-1/3 flex-col">
                    <div class="new2 flex basis-5/6 items-center justify-center p-20 text-[#D9D9D950]">SOMETIMES IT’S JUST OUR FEELINGS THAT GET INVOLVED IN BETWEEN OUR HEART AND MIND, AND WE CAN’T TAKE THE DECISION WHICH IS RIGHT FOR US. IT MAKES THINGS A LITTLE BIT MESSY FOR SURE BUT WHO CARES, IT’S ALL ABOUT OUR MINDSET AND WHAT WE THINK ABOUT THE WORLD AROUND US. IT’S BETTER TO KEEP THINGS SIMPLE, AND NOT GET DISAPPOINTED.</div>
                    <div class="flex basis-1/6 items-center justify-center bg-[#D9D9D9] text-[#D060B19]">JOIN US NOW</div>
                </div>
            </div>
        </>
    );
}