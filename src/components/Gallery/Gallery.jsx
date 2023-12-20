import React, { useState } from "react";
import "./Gallery.css";
import {
  getUserDocuments,
  getFile,
  getFileView,
} from "../../utils/DatabaseFunctions";
export default function Gallery() {
  const [currImg, setCurrImg] = useState(0);

  const [documents, setDocuments] = useState([]);
  const [imageSRC, setImageSRC] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    getUserDocuments([]).then((data) => {
      if (data) {
        setDocuments(data.documents);
        setTitle(data.documents[currImg].title);
        setDescription(data.documents[currImg].description);
        setImageSRC(getFileView(data.documents[currImg].image).href);
      }
    });
  }, [currImg]);

  // console.log(documents[currImg]);
  // console.log(imageID);
  // console.log(title);
  // console.log(description);
  // console.log(imageSRC);
  getFile();

  return (
    <>
      <div className="fontsm sm:h-[108vh] flex max-sm:flex-col" id="gallery">
        <div className="flex basis-2/3 flex-col">
          <div className="new1 flex basis-1/3 items-end pt-24 pb-8 sm:pb-16 sm:pl-20 pl-8">
            <p className="fontlg hoverable text-6xl text-white">Gallery</p>
          </div>
          <div className="new1 hoverable basis-2/3">
            <img
              src={imageSRC}
              className="w-full h-full object-cover opacity-100 hover:opacity-80 transition-all duration-500"
            />
          </div>
        </div>
        <div className="unique1 flex basis-1/3 flex-col">
          <div className="flex basis-3/4 flex-col bg-[#D9D9D9] sm:px-24 px-8 sm:pt-36 pt-10 max-sm:pb-10 text-[#D060B19]">
            <div className="hoverable flex flex-row sm:pb-12 pb-8 text-4xl font-bold">
              <p className="">{[currImg + 1]}</p> / <p>{documents.length}</p>
            </div>
            <div className="hoverable pb-8 text-xl font-bold">{title}</div>
            <div className="hoverable">{description}</div>
          </div>
          <div className="flex basis-1/4 flex-row ">
            <div
              onClick={() => {
                const prevImg =
                  currImg > 0 ? currImg - 1 : documents.length - 1;
                setCurrImg(prevImg);
              }}
              className="new1 hoverable basis-1/2 flex justify-center items-center max-sm:py-10"
            >
              <img
                src="assets/arrow.svg"
                className="h-20 rotate-180 hover:-translate-x-5 transition-all duration-500"
              />
            </div>
            <div
              onClick={() => {
                const nextImg =
                  currImg < documents.length - 1 ? currImg + 1 : 0;
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
