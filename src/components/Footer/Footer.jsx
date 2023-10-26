import React from "react";
import "./Footer.css";

export default function Footer(){
    return(
        <>
            <div className="fontsm unique2 flex flex-row">
                <div className="new1 flex basis-2/3 flex-col justify-center gap-4 pl-20 pr-96">
                    <div className="flex flex-row gap-3">
                        <div className="items-center justify-center"><img src="assets/logo.svg" width="40rem"></img></div>
                        <div className="text-2xl text-white flex items-end">TOILE</div>
                    </div>
                    <div className="text-[#D9D9D950]">SOMETIMES IT’S JUST OUR FEELINGS THAT GET INVOLVED IN BETWEEN OUR HEART AND MIND, AND WE CAN’T TAKE THE DECISION WHICH IS RIGHT FOR US.</div>
                </div>
                <div className="new1 flex basis-1/3 flex-col justify-center gap-5 pl-20 text-[#D9D9D950]">
                    <div className="text-2xl">SOCIALS</div>
                    <div className="flex flex-row gap-7">
                        <div className="">1</div>
                        <div className="">2</div>
                        <div className="">3</div>
                        <div className="">4</div>
                    </div>
                    <div className="pt-8">© CREATED BY SWAPNONEEL SAHA</div>
                </div>
            </div>
        </>
    );
}