import React from "react";
import "./Hero.css";

export default function Hero(){
    return(
        <>
            <div class="flex flex-rows">
                <div class="pl-20 pt-60 pb-16 text-white text-6xl custom2 basis-2/3 flex flex-col gap-4">
                    <div>The Magic</div>
                    <div>you need the most</div>
                </div>
                <div class="basis-1/3 custom1 justify-center"></div>
            </div>
            <div class="flex flex-rows">
                <div class="px-20 basis-2/3 custom2 text-[#D9D9D950] flex justify-center items-center">
                SOMETIMES IT’S JUST OUR FEELINGS THAT GET INVOLVED IN BETWEEN OUR HEART AND MIND, AND WE CAN’T TAKE THE DECISION WHICH IS RIGHT FOR US...
                </div>
                <div class="basis-1/6 py-20 custom2 justify-center"></div>
                <div class="basis-1/6 py-20 custom1 justify-center"></div>
            </div>
        </>
    );
}
