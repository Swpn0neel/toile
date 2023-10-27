import React from "react";
import "./Gallery.css";

export default function Gallery(){
    return(
        <>
            <div className="fontsm viewh flex flex-row">
                <div className="flex basis-2/3 flex-col">
                    <div className="fontlg hoverable new1 flex basis-1/3 items-end pb-16 pl-20 text-6xl text-white">Gallery</div>
                    <div className="new1 basis-2/3"></div>
                </div>
                <div className="unique1 flex basis-1/3 flex-col">
                    <div className="flex basis-3/5 flex-col justify-center bg-[#D9D9D9] px-24 py-36 text-[#D060B19]">
                        <div className="pb-12 text-4xl font-bold">1/25</div>
                        <div className="pb-8 text-xl font-bold">THE HUNTERS IN THE SNOW</div>
                        <div>PIETER BRUEGEL THE ELDER WAS A FLEMISH LANDSCAPE PAINTER BORN AROUND 1525 IN BREUGEL. KNOWN FOR HIS PAINTING AND PRINT MAKING, BRUEGEL IS CONSIDERED BY SCHOLARS TO BE THE MOST PROMINENT FIGURE OF THE FLEMISH AND DUTCH RENAISSANCE.</div>
                    </div>
                    <div className="flex basis-2/5 flex-row">
                        <div className="new1 hoverable basis-1/2 flex justify-center items-center"><img src="assets/arrow.svg" className="h-20 rotate-180"></img></div>
                        <div className="new1 hoverable basis-1/2 flex justify-center items-center"><img src="assets/arrow.svg" className="h-20"></img></div>
                    </div>
                </div>
            </div>
        </>
    );
}
