import React from "react";
import "./Auth.css";
import Cursor from "../components/Cursor/Cursor";

export default function Auth(){
    return(
        <>
            <div className="fontsm flex h-screen flex-row" id="auth">
                <div className="flex basis-2/12 flex-col">
                    <a href="../" className="hoverable sborder2 flex basis-2/6 items-center justify-center bg-[#D9D9D9] hover:cursor-none">
                        <img src="assets/arrow_alt.svg" className="h-20 rotate-180 hover:-translate-x-5 transition-all duration-500"></img>
                    </a>
                    <div className="hoverable flex basis-5/6 items-center justify-center">
                        <img src="assets/logo.svg" width="45rem" className="hover:scale-125 transition-all duration-500"></img>
                    </div>
                </div>
                <div className="sborder1 flex basis-8/12 flex-col">
                    <div className="sborder2 flex basis-5/12 items-end pb-16 pl-20">
                        <p className="fontlg hoverable text-6xl text-white">Sign Up</p>
                    </div>
                    <div className="flex basis-7/12 flex-col justify-center gap-8 bg-[#D9D9D9] pl-20 pr-64 text-[#060B1990]">
                        <div className="hoverable sborder3 pb-2 hover:text-[#060B19] transition-all duration-500">ENTER EMAIL ADDRESS</div>
                        <div className="hoverable sborder3 pb-2 hover:text-[#060B19] transition-all duration-500">ENTER YOUR PASSWORD</div>
                        <div className="hoverable sborder3 pb-2 hover:text-[#060B19] transition-all duration-500">CONFIRM YOUR PASSWORD</div>
                    </div>
                </div>
                <div className="flex basis-2/12 flex-col">
                    <div className="sborder2 hoverable flex basis-5/12 flex-col">
                        <div className="sborder2 flex basis-2/3 items-end justify-center px-12 pb-12 text-[#D9D9D950] hover:text-[#D9D9D9] transition-all duration-500">ALREADY HAVE AN ACCOUNT?</div>
                        <div className="flex basis-1/3 items-center justify-center text-[#D9D9D950] hover:bg-[#d9d9d9] hover:text-[#060B19] transition-all duration-500">SIGN IN</div>
                    </div>
                    <div className="hoverable flex basis-7/12 items-center justify-center">
                        <img src="assets/arrow.svg" className="h-20 hover:translate-x-5 transition-all duration-500"></img>
                    </div>
                </div>
            </div>
            <Cursor />
        </>
    );
}