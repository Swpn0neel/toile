import React from "react";
import "./Hero.css";

export default function Hero(){
    return(
        <>
            <div className="flex-rows flex">
                <div className="fontlg custom2 flex basis-2/3 flex-col gap-4 pb-16 pl-20 pt-64 text-6xl text-white">
                    <div className="hoverable">The Magic</div>
                    <div className="hoverable">you need the most</div>
                </div>
                <div className="custom1 hoverable basis-1/3 justify-center"><img src="assets/main.png" className="w-full h-full object-cover"></img></div>
            </div>
            <div className="flex-rows flex">
                <div className="custom2 flex basis-2/3 items-center justify-center px-20">
                    <p className="fontsm hoverable text-[#D9D9D950] hover:text-[#D9D9D9] transition-all duration-500">SOMETIMES IT’S JUST OUR FEELINGS THAT GET INVOLVED IN BETWEEN OUR HEART AND MIND, AND WE CAN’T TAKE THE DECISION WHICH IS RIGHT FOR US...</p>
                </div>
                <div className="custom2 hoverable basis-1/6 flex justify-center items-center py-16">
                    <img src="assets/arrow.svg" className="h-20 rotate-180 hover:-translate-x-5 transition-all duration-500"></img>
                </div>
                <div className="custom1 hoverable new2 basis-1/6 flex justify-center items-center py-16">
                    <img src="assets/arrow.svg" className="h-20 hover:translate-x-5 transition-all duration-500"></img>
                </div>
            </div>
        </>
    );
}
