import React from "react";
import "./Hero.css";

export default function Hero(){
    return(
        <>
            <div className="flex-rows flex">
                <div className="fontlg custom2 flex basis-2/3 flex-col gap-4 pb-16 pl-20 pt-64 text-6xl text-white">
                    <div>The Magic</div>
                    <div>you need the most</div>
                </div>
                <div className="custom1 basis-1/3 justify-center"><img src="assets/main.png" className="w-full h-full object-cover"></img></div>
            </div>
            <div className="flex-rows flex">
                <div className="fontsm custom2 flex basis-2/3 items-center justify-center px-20 text-[#D9D9D950]">SOMETIMES IT’S JUST OUR FEELINGS THAT GET INVOLVED IN BETWEEN OUR HEART AND MIND, AND WE CAN’T TAKE THE DECISION WHICH IS RIGHT FOR US...</div>
                <div className="custom2 basis-1/6 flex justify-center items-center py-16">
                    <img src="assets/arrow.svg" className="h-20 rotate-180"></img>
                </div>
                <div className="custom1 new2 basis-1/6 flex justify-center items-center py-16">
                    <img src="assets/arrow.svg" className="h-20"></img>
                </div>
            </div>
        </>
    );
}
