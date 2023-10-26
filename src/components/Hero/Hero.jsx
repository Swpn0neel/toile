import React from "react";
import "./Hero.css";

export default function Hero(){
    return(
        <>
            <div class="flex-rows flex">
                <div class="fontlg custom2 flex basis-2/3 flex-col gap-4 pb-16 pl-20 pt-64 text-6xl text-white">
                    <div>The Magic</div>
                    <div>you need the most</div>
                </div>
                <div class="custom1 basis-1/3 justify-center"><img src="assets/main.png" class="w-full h-full object-cover"></img></div>
            </div>
            <div class="flex-rows flex">
                <div class="fontsm custom2 flex basis-2/3 items-center justify-center px-20 text-[#D9D9D950]">SOMETIMES IT’S JUST OUR FEELINGS THAT GET INVOLVED IN BETWEEN OUR HEART AND MIND, AND WE CAN’T TAKE THE DECISION WHICH IS RIGHT FOR US...</div>
                <div class="custom2 basis-1/6 justify-center py-24"></div>
                <div class="custom1 new2 basis-1/6 justify-center py-24"></div>
            </div>
        </>
    );
}
