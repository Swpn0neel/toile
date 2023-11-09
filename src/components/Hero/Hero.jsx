import { useState } from "react";
import { images } from "../../data/CarouselData";
import "./Hero.css";

export default function Hero() {
  const [currImg, setCurrImg] = useState(0);
  return (
    <>
      <div className="heroh grid grid-cols-3 grid-rows-3">
          
        <div className="custom2 col-span-2 row-span-2 flex flex-col justify-end gap-4 pb-16 pl-20">
          <p className="fontlg hoverable text-6xl text-white">The Magic</p>
          <p className="fontlg hoverable text-6xl text-white">you need the most</p>
        </div>

        <div className="custom2 flex row-span-2">
          <img src={images[currImg].img} className="w-full h-full object-cover"/>
        </div>

        <div className="custom2 col-span-2 flex items-center justify-center px-20">
          <p className="hoverable text-[#D9D9D950] hover:text-[#D9D9D9] transition-all duration-500">
                SOMETIMES IT’S JUST OUR FEELINGS THAT GET INVOLVED IN BETWEEN OUR
                HEART AND MIND, AND WE CAN’T TAKE THE DECISION WHICH IS RIGHT FOR
                US...
          </p>
        </div>
          
        <div className="flex flex-row">
          <div
              onClick={() => {
                const prevImg = currImg > 0 ? currImg - 1 : images.length - 1;
                setCurrImg(prevImg);
              }}
                className="custom2 hoverable basis-1/2 flex justify-center items-center py-16"
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
              className="custom1 hoverable new2 basis-1/2 flex justify-center items-center py-16"
          >
              <img
                src="assets/arrow.svg"
                className="h-20 hover:translate-x-5 transition-all duration-500"
              />
          </div>
        </div>
      </div>
    </>
  );
}
