import { useState } from "react";
import { images } from "../../data/CarouselData";
import "./Hero.css";

export default function Hero() {
  const [currImg, setCurrImg] = useState(0);
  return (
    <>
      <div className="flex-rows flex">
        <div className="custom2 flex basis-2/3 flex-col gap-4 justify-end pb-16 pl-20">
          <p className="fontlg hoverable text-6xl text-white">The Magic</p>
          <p className="fontlg hoverable text-6xl text-white">
            you need the most
          </p>
        </div>
        <div className="custom1 hoverable basis-1/3 justify-center">
          <img
            src={images[currImg].img}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-rows flex">
        <div className="custom2 flex basis-2/3 items-center justify-center px-20">
          <p className="fontsm hoverable text-[#D9D9D950] hover:text-[#D9D9D9] transition-all duration-500">
            SOMETIMES IT’S JUST OUR FEELINGS THAT GET INVOLVED IN BETWEEN OUR
            HEART AND MIND, AND WE CAN’T TAKE THE DECISION WHICH IS RIGHT FOR
            US...
          </p>
        </div>
        <div
          onClick={() => {
            const prevImg = currImg > 0 ? currImg - 1 : images.length - 1;
            setCurrImg(prevImg);
          }}
          className="custom2 hoverable basis-1/6 flex justify-center items-center py-16"
        >
          <img
            src="assets/arrow.svg"
            className="h-20 rotate-180 hover:-translate-x-5 transition-all duration-500"
          />
        </div>
        <div
          onClick={() => {
            const nextImg = currImg < images.length - 1 ? currImg + 1 : 0;
            setCurrImg(nextImg);
          }}
          className="custom1 hoverable new2 basis-1/6 flex justify-center items-center py-16"
        >
          <img
            src="assets/arrow.svg"
            className="h-20 hover:translate-x-5 transition-all duration-500"
          />
        </div>
      </div>
    </>
  );
}
