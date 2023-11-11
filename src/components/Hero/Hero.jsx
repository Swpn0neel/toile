import { useState } from "react";
import { images } from "../../data/CarouselData";
import "./Hero.css";

export default function Hero() {
  const [currImg, setCurrImg] = useState(0);
  // const [transition, setTransition] = useState("");
  return (
    <>
      <div className="sm:h-[85vh] grid sm:grid-cols-3 sm:grid-rows-3">
        <div className="custom2 col-span-2 max-sm:order-1 row-span-2 flex flex-col sm:pb-16 pb-10 justify-end gap-4 max-sm:pt-20 pl-8 sm:pl-20">
          <p className="fontlg hoverable sm:text-6xl text-5xl text-white">
            The Magic
          </p>
          <p className="fontlg hoverable sm:text-6xl text-5xl text-white">
            you need the most
          </p>
        </div>

        <div className="custom2 max-sm:order-3  flex max-sm:col-span-2 row-span-2">
          <img
            src={images[currImg].img}
            className="sm:w-full sm:h-full  object-cover"
          />
        </div>

        <div className="custom2 max-sm:order-4 col-span-2 flex items-center justify-center sm:px-20 max-sm:py-10 max-sm:pr-8 pl-8 sm:pl-20">
          <p className="hoverable text-[#D9D9D950] hover:text-[#D9D9D9] transition-all duration-500">
            SOMETIMES IT’S JUST OUR FEELINGS THAT GET INVOLVED IN BETWEEN OUR
            HEART AND MIND, AND WE CAN’T TAKE THE DECISION WHICH IS RIGHT FOR
            US...
          </p>
        </div>

        <div className="flex max-sm:order-3 max-sm:col-span-2 ">
          <div
            onClick={() => {
              const prevImg = currImg > 0 ? currImg - 1 : images.length - 1;
              setCurrImg(prevImg);
              // setTransition("transition-exiting");
            }}
            className="custom2 hoverable basis-1/2 flex justify-center items-center py-10 sm:py-16"
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
              // setTransition("transition-entering");
            }}
            className="custom1 hoverable new2 basis-1/2 flex justify-center items-center py-10 sm:py-16"
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
