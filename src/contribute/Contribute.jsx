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
      <div className="fontsm flex h-screen flex-row">
        <div className="flex basis-1/6 flex-col">
          <Link
            to="/"
            className="sborder2 hoverable flex basis-1/3 items-center justify-center bg-[#D9D9D9] hover:cursor-none"
          >
            <img
              src="assets/arrow_alt.svg"
              className="h-20 rotate-180 hover:-translate-x-5 transition-all duration-500"
            ></img>
          </Link>
          <div className="hoverable flex basis-2/3 items-center justify-center">
            <img
              src="assets/logo.svg"
              width="45rem"
              className="hover:scale-125 transition-all duration-500"
            ></img>
          </div>
        </div>
        <div className="sborder1 flex basis-7/12 flex-col">
          <div className="sborder2 flex basis-5/12 items-end pb-16 pl-20">
            <p className="fontlg hoverable text-6xl text-white">Contribute</p>
          </div>
          <div className="flex basis-7/12 flex-col items-center justify-center gap-3">
            {/* Added functionality */}
            {/* {preview && (
              <div className="flex basis-1/2 items-center justify-center gap-3">
                <img src={preview} alt="" className="h-96 w-96"></img>
                <button
                  onClick={() => {
                    setImage(null);
                  }}
                  className="hoverable"
                >
                  <img src="/assets/plus.svg" className="h-8"></img>
                </button>
              </div>
            )} */}

            {preview ? (
              <div className="">
                <img src={preview} alt="" className="h-full w-full"></img>
                <button
                  onClick={() => {
                    setImage(null);
                  }}
                  className="hoverable"
                >
                  <img src="/assets/plus.svg" className="h-8"></img>
                </button>
              </div>
            ) : (
              <div className="">
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
          <div className="sborder2 flex basis-1/3 flex-col items-center justify-center gap-3">
            <div className="hoverable basis-1/2 flex items-end">
              <img src="/assets/plus.svg" className="h-8"></img>
            </div>
            <textarea
              required
              maxLength="250"
              placeholder="[ADD THE TITLE/]"
              className="basis-1/2 appearance-none resize-none outline-none w-full h-full px-5 pb-5 bg-[#060B19] text-center text-[#D9D9D9] cursor-none"
              onChange={(e) => {
                let temp = e.target.value.toUpperCase();
                setTitle(temp);
              }}
              value={title}
            ></textarea>
          </div>
          <div className="sborder2 flex basis-1/2 flex-col items-center justify-center gap-3">
            <div className="hoverable basis-1/2 flex items-end">
              <img src="/assets/plus.svg" className="h-8"></img>
            </div>
            <textarea
              required
              maxLength="1000"
              placeholder="[ADD DESCRIPTION/]"
              className="basis-1/2 appearance-none resize-none outline-none w-full h-full px-5 pb-5 bg-[#060B19] text-center text-[#D9D9D9] cursor-none"
              onChange={(e) => {
                setDescription(e.target.value.toUpperCase());
              }}
              value={description}
            ></textarea>
          </div>
          <div className="hoverable flex basis-1/6 items-center justify-center bg-[#D9D9D9] text-[#060B19]">
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
