import React, { useState } from "react";
import "./Gallery.css";
import {
  getUserDocuments,
  getFileView,
} from "../../utils/DatabaseFunctions";
import { galleryimages } from "../../data/GalleryData";

export default function Gallery() {
  const [currImg, setCurrImg] = useState(0);
  const [documents, setDocuments] = useState([]);
  const [imageSRC, setImageSRC] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch documents once on mount
  React.useEffect(() => {
    getUserDocuments().then((data) => {
      if (data && data.documents && data.documents.length > 0) {
        setDocuments(data.documents);
      } else {
        // Fallback to local data if database is empty
        setDocuments(galleryimages.map(img => ({
          ...img,
          image: img.img, // Mapping local 'img' to 'image' for consistency
          isLocal: true
        })));
      }
      setLoading(false);
    });
  }, []);

  // Update display values when index or documents change
  React.useEffect(() => {
    if (documents.length > 0 && documents[currImg]) {
      const doc = documents[currImg];
      setTitle(doc.title || "Untitled");
      setDescription(doc.description || "No description provided.");
      
      if (doc.isLocal) {
        setImageSRC(doc.image);
      } else {
        setImageSRC(getFileView(doc.image).href);
      }
    }
  }, [currImg, documents]);

  if (loading) {
    return (
      <div className="h-[108vh] flex items-center justify-center text-white text-2xl fontlg">
        LOADING ART...
      </div>
    );
  }

  return (
    <>
      <div className="fontsm sm:h-[108vh] flex max-sm:flex-col" id="gallery">
        <div className="flex basis-2/3 flex-col">
          <div className="new1 flex basis-1/3 items-end pt-24 pb-8 sm:pb-16 sm:pl-20 pl-8">
            <p className="fontlg hoverable text-4xl sm:text-6xl 2xl:text-8xl text-white">Gallery</p>
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
            <div className="hoverable flex flex-row sm:pb-12 pb-8 text-4xl 2xl:text-6xl font-bold">
              <p className="">{[currImg + 1]}</p> / <p>{documents.length}</p>
            </div>
            <div className="hoverable pb-8 text-xl 2xl:text-4xl font-bold">{title}</div>
            <div className="hoverable max-w-2xl 2xl:max-w-4xl 2xl:text-2xl">{description}</div>
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
                className="h-20 2xl:h-32 rotate-180 hover:-translate-x-5 transition-all duration-500"
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
                className="h-20 2xl:h-32 hover:translate-x-5 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
