// import React from "react";
import "./Gallery.css";
import { useState } from "react";
import { galleryimages } from "../../data/GalleryData";
export default function Gallery() {
  const [currImg, setCurrImg] = useState(0);
  return (
    <>
      <div className="fontsm viewh flex flex-row" id="gallery">
        <div className="flex basis-2/3 flex-col">
          <div className="new1 flex basis-1/3 items-end pb-16 pl-20">
            <p className="fontlg hoverable text-6xl text-white">Gallery</p>
          </div>
          <div className="new1 hoverable basis-2/3">
            <img
              src={galleryimages[currImg].img}
              className="w-full h-full object-cover opacity-100 hover:opacity-80 transition-all duration-500"
            />
          </div>
        </div>
        <div className="unique1 flex basis-1/3 flex-col">
          <div className="flex basis-3/5 flex-col justify-center bg-[#D9D9D9] px-24 py-36 text-[#D060B19]">
            <div className="hoverable flex flex-row pb-12 text-4xl font-bold">
              <p className="">{galleryimages[currImg].id}</p> /{" "}
              <p>{galleryimages.length}</p>
            </div>
            <div className="hoverable pb-8 text-xl font-bold">
              {galleryimages[currImg].title}
            </div>
            <div className="hoverable">
              {galleryimages[currImg].description}
            </div>
          </div>
          <div className="flex basis-2/5 flex-row">
            <div
              onClick={() => {
                const prevImg =
                  currImg > 0 ? currImg - 1 : galleryimages.length - 1;
                setCurrImg(prevImg);
            
              }}
              className="new1 hoverable basis-1/2 flex justify-center items-center"
            >
              <img
                src="assets/arrow.svg"
                className="h-20 rotate-180 hover:-translate-x-5 transition-all duration-500"
              />
            </div>
            <div
              onClick={() => {
                const nextImg =
                  currImg < galleryimages.length - 1 ? currImg + 1 : 0;
                setCurrImg(nextImg);
              }}
              className="new1 hoverable basis-1/2 flex justify-center items-center"
            >
              <img
                src="assets/arrow.svg"
                className="h-20 hover:translate-x-5 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
