import React from "react";
import "./Gallery.css";

export default function Gallery(){
    return(
        <>
            <div class="viewh flex flex-row">
                <div class="flex basis-2/3 flex-col">
                    <div class="new1 pb-16 pl-20 pt-28 text-6xl text-white">Gallery</div>
                    <div class="new1 py-64"></div>
                </div>
                <div class="flex basis-1/3 flex-col">
                    <div class="flex flex-col justify-center bg-[#D9D9D9] px-24 py-36 text-[#D060B19]">
                        <div class="pb-12 text-4xl font-bold">1/25</div>
                        <div class="pb-8 text-xl font-bold">THE HUNTERS IN THE SNOW</div>
                        <div class="">PIETER BRUEGEL THE ELDER WAS A FLEMISH LANDSCAPE PAINTER BORN AROUND 1525 IN BREUGEL. KNOWN FOR HIS PAINTING AND PRINT MAKING, BRUEGEL IS CONSIDERED BY SCHOLARS TO BE THE MOST PROMINENT FIGURE OF THE FLEMISH AND DUTCH RENAISSANCE.</div>
                    </div>
                    <div class="flex flex-row">
                        <div class="new1 basis-1/2 py-20"></div>
                        <div class="new1 basis-1/2 py-20"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
