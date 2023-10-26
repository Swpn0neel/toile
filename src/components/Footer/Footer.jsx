import React from "react";
import "./Footer.css";

export default function Footer(){
    return(
        <>
            <div class="fontsm unique2 flex flex-row">
                <div class="new1 flex basis-2/3 flex-col justify-center gap-4 pl-20 pr-96">
                    <div class="flex flex-row">
                        <div class=""></div>
                        <div class="text-2xl text-white">TOILE</div>
                    </div>
                    <div class="text-[#D9D9D950]">SOMETIMES IT’S JUST OUR FEELINGS THAT GET INVOLVED IN BETWEEN OUR HEART AND MIND, AND WE CAN’T TAKE THE DECISION WHICH IS RIGHT FOR US.</div>
                </div>
                <div class="new1 flex basis-1/3 flex-col justify-center gap-5 pl-20 text-[#D9D9D950]">
                    <div class="text-2xl">SOCIALS</div>
                    <div class="flex flex-row gap-7">
                        <div class="">1</div>
                        <div class="">2</div>
                        <div class="">3</div>
                        <div class="">4</div>
                    </div>
                    <div class="pt-8">© CREATED BY SWAPNONEEL SAHA</div>
                </div>
            </div>
        </>
    );
}