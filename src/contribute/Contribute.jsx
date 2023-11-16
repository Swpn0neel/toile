import React from "react";
import { Link } from "react-router-dom";
import "./Contribute.css";
import Cursor from "../components/Cursor/Cursor";
import {
  creatUserDocument,
  uploadFile,
  getFile,
} from "../utils/DatabaseFunctions";

export default function Contribute() {
  const [image, setImage] = React.useState();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const preview = image ? URL.createObjectURL(image) : null;
  console.log(preview);

  React.useEffect(() => {
    getFile();
    console.log(image);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadFile(image).then((file) => {
      const temp = String(file.$id);

      const userData = {
        title: title,
        description: description,
        image: temp,
      };
      creatUserDocument(userData);
    });
  };
  return (
    <>
      <div className="fontsm flex h-screen max-sm:flex-col">
        <div className="flex basis-1/6 sm:flex-col">
          <Link
            to="/"
            className="hoverable sborder2 flex basis-2/6 items-center justify-center bg-[#D9D9D9] hover:cursor-none"
          >
            <img
              src="assets/arrow_alt.svg"
              className="h-20 max-sm:h-12 rotate-180 hover:-translate-x-5 transition-all duration-500"
            ></img>
          </Link>
          <div className="hoverable max-sm:border-b-2 max-sm:border-[#FFFFFF15] flex basis-5/6 items-center justify-center">
            <img
              src="assets/logo.svg"
              width="45rem"
              className="hover:scale-125 max-sm:scale-75 transition-all duration-500"
            ></img>
          </div>
        </div>
        <div className="sm:border-r-2 sm:border-l-2 border-[#FFFFFF15] flex basis-7/12 flex-col">
          <div className="border-b-2 border-[#FFFFFF15] flex basis-5/12 items-end sm:pb-16 max-sm:pt-24 pb-10 sm:pl-20 pl-8">
            <p className="fontlg hoverable text-6xl max-sm:text-5xl text-white">Contribute</p>
          </div>
          <div className="max-sm:border-b-2 border-[#FFFFFF15] flex basis-7/12 flex-col items-center justify-center gap-3">
            {preview ? (
              <div className="">
                {/* <img src={preview} alt="" className="h-full w-full"></img> */}
                <button
                  onClick={() => {
                    setImage(null);
                  }}
                  className="hoverable"
                >
                  <img src={preview} alt="" className="h-full w-full object-cover"></img>
                  {/* <img src="/assets/plus.svg" className="h-8 rotate-45 absolute z-10 left-auto top-1/2"></img> */}
                </button>
              </div>
            ) : (
              <div className="max-sm:py-20">
                <label
                  htmlFor="customFileInput"
                  className="flex flex-col justify-center gap-3 cursor-none"
                >
                  <img src="/assets/plus.svg" className="hoverable h-8"></img>
                  <p className="text-[#D9D9D9]">[ADD YOUR IMAGE/]</p>
                </label>
                <input
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  id="customFileInput"
                  style={{ display: "none" }}
                  placeholder="[ADD YOUR IMAGE/]"
                  className="text-[#D9D9D950] hover:text-[#D9D9D9] cursor-none"
                />
              </div>
            )}
            {/* <img src={preview} alt="" /> */}

            {/* Till here */}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex basis-1/4 flex-col">
          <div className="sborder2 max-sm:pt-7  flex basis-1/3 flex-col items-center justify-center gap-3">
            <div className="hoverable basis-1/2 flex items-end">
              <img src="/assets/plus.svg" className="h-8"></img>
            </div>
            <textarea
              required
              maxLength="250"
              placeholder="[ADD THE TITLE/]"
              className="basis-1/2 appearance-none resize-none outline-none w-full h-full px-5 sm:pb-5 bg-[#060B19] text-center text-[#D9D9D9] cursor-none"
              onChange={(e) => {
                let temp = e.target.value.toUpperCase();
                setTitle(temp);
              }}
              value={title}
            ></textarea>
          </div>
          <div className="sborder2 flex max-sm:pt-7 basis-1/2 flex-col items-center justify-center gap-3">
            <div className="hoverable basis-1/2 flex items-end">
              <img src="/assets/plus.svg" className="h-8"></img>
            </div>
            <textarea
              required
              maxLength="1000"
              placeholder="[ADD DESCRIPTION/]"
              className="basis-1/2 appearance-none resize-none outline-none w-full h-full px-5 sm:pb-5 bg-[#060B19] text-center text-[#D9D9D9] cursor-none"
              onChange={(e) => {
                setDescription(e.target.value.toUpperCase());
              }}
              value={description}
            ></textarea>
          </div>
          <div className="hoverable flex max-sm:py-8 basis-1/6 items-center justify-center bg-[#D9D9D9] text-[#060B19]">
            <input
              className="btn btn--secondary cursor-none"
              type="submit"
              value="ADD+"
            />
          </div>
        </form>
      </div>
      <Cursor />
    </>
  );
}
