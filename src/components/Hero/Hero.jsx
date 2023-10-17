import React from "react";
import "./Hero.css";

export default function Hero(){
    return(
        <>
            <div class="grid grid-cols-6">
                <div class="pl-20 pt-60 pb-16 text-white text-6xl custom2 col-span-4 flex flex-col  gap-4">
                    <div>The Magic</div>
                    <div>you need the most</div>
                </div>
                <div class="pt-60 custom1 col-span-2 justify-center"></div>
            </div>
            <div class="grid grid-cols-6">
                <div class="py-20 px-20 custom2 text-[#D9D9D950] col-span-4 flex justify-center">
                    SOMETIMES IT’S JUST OUR FEELINGS THAT GET INVOLVED IN BETWEEN OUR HEART AND MIND, AND WE CAN’T TAKE THE DECISION WHICH IS RIGHT FOR US...
                </div>
                <div class="py-20 custom1 justify-center"></div>
                <div class="py-20 custom1 justify-center"></div>
            </div>
        </>
    );
}
