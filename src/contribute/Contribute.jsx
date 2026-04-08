import React from "react";
import { Link } from "react-router-dom";
import "./Contribute.css";
import Cursor from "../components/Cursor/Cursor";
import { Toaster, toast } from "sonner";
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
  }, [image]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Uploading masterpiece...");
    
    try {
      const file = await uploadFile(image);
      if (!file) throw new Error("File upload failed");

      const userData = {
        title: title,
        description: description,
        image: file.$id,
      };

      await creatUserDocument(userData);
      
      toast.success("Art has been added to the collection", {
        id: loadingToast,
      });

      setImage(null);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add art: " + error.message, {
        id: loadingToast,
      });
    }
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
              className="h-20 2xl:h-32 max-sm:h-12 rotate-180 hover:-translate-x-5 transition-all duration-500"
            ></img>
          </Link>
          <div className="hoverable max-sm:border-b-2 max-sm:border-[#FFFFFF15] flex basis-5/6 items-center justify-center">
            <img
              src="assets/logo.svg"
              className="w-12 2xl:w-20 hover:scale-125 max-sm:scale-75 transition-all duration-500"
            ></img>
          </div>
        </div>
        <div className="sm:border-r-2 sm:border-l-2 border-[#FFFFFF15] flex basis-7/12 flex-col">
          <div className="border-b-2 border-[#FFFFFF15] flex basis-5/12 items-end sm:pb-16 max-sm:pt-24 pb-10 sm:pl-20 pl-8">
            <p className="fontlg hoverable text-6xl 2xl:text-8xl max-sm:text-5xl text-white">Contribute</p>
          </div>
          <div className="max-sm:border-b-2 border-[#FFFFFF15] flex basis-7/12 flex-col items-center justify-center">
            {preview ? (
              <div className="w-full h-full">
                <button
                  onClick={() => {
                    setImage(null);
                  }}
                  className="hoverable w-full h-full overflow-hidden"
                >
                  <img src={preview} alt="" className="h-full w-full object-cover"></img>
                </button>
              </div>
            ) : (
              <div className="max-sm:py-20">
                <label
                  htmlFor="customFileInput"
                  className="flex flex-col justify-center gap-3 cursor-none"
                >
                  <img src="/assets/plus.svg" className="hoverable h-8 2xl:h-12"></img>
                  <p className="text-[#D9D9D9] 2xl:text-3xl">[ADD YOUR IMAGE/]</p>
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
              <img src="/assets/plus.svg" className="h-8 2xl:h-12"></img>
            </div>
            <textarea
              required
              maxLength="250"
              placeholder="[ADD THE TITLE/]"
              className="basis-1/2 appearance-none resize-none outline-none w-full h-full px-5 sm:pb-5 bg-[#060B19] text-center text-[#D9D9D9] cursor-none 2xl:text-2xl"
              onChange={(e) => {
                let temp = e.target.value.toUpperCase();
                setTitle(temp);
              }}
              value={title}
            ></textarea>
          </div>
          <div className="sborder2 flex max-sm:pt-7 basis-1/2 flex-col items-center justify-center gap-3">
            <div className="hoverable basis-1/2 flex items-end">
              <img src="/assets/plus.svg" className="h-8 2xl:h-12"></img>
            </div>
            <textarea
              required
              maxLength="1000"
              placeholder="[ADD DESCRIPTION/]"
              className="basis-1/2 appearance-none resize-none outline-none w-full h-full px-5 sm:pb-5 bg-[#060B19] text-center text-[#D9D9D9] cursor-none 2xl:text-2xl"
              onChange={(e) => {
                setDescription(e.target.value.toUpperCase());
              }}
              value={description}
            ></textarea>
          </div>
          <div className="hoverable flex max-sm:py-8 basis-1/6 items-center justify-center bg-[#D9D9D9] text-[#060B19]">
            <input
              className="btn btn--secondary cursor-none 2xl:text-3xl"
              type="submit"
              value="ADD+"
            />
          </div>
        </form>
      </div>
      <Toaster richColors expand={false} position="top-right" />
      <Cursor />
    </>
  );
}
