import React from "react";
import { Link } from "react-router-dom";
import "./Contribute.css";
import Cursor from "../components/Cursor/Cursor";
import {
  creatUserDocument,
  //   getUserDocuments,
  //   updateUserDocument,
  //   deleteUserDocument,
  uploadFile,
  getFile,
  //   deleteFile,
  //   getFilePreview,
} from "../utils/DatabaseFunctions";

export default function Contribute() {
  const [image, setImage] = React.useState();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    getFile();
    console.log(image);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadFile(image).then((file) => {
      // console.log("The File Id is " + file.$id);
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
            <div className="hoverable">
              <img src="/assets/plus.svg" className="h-8"></img>
            </div>
            <div className="text-[#D9D9D950] transition-all duration-500 hover:text-[#D9D9D9]">
              [ADD YOUR IMAGE/]
            </div>
            {/* Added functionality */}
            <img src={image} alt="" />
            {console.log(image)}
            <input
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              type="file"
            />
            {/* <button onClick={() => uploadFile(image)}>Upload</button> */}
            {/* Till here */}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex basis-1/4 flex-col">
            <div className="sborder2 flex basis-1/3 flex-col items-center justify-center gap-3">
              <div className="hoverable">
                <img src="/assets/plus.svg" className="h-8"></img>
              </div>
              <div className="text-[#D9D9D950] transition-all duration-500 hover:text-[#D9D9D9]">
                [ADD THE TITLE/]
              </div>
              <textarea
                required
                maxLength="250"
                placeholder="[ADD THE TITLE/]"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
              ></textarea>
            </div>
            <div className="sborder2 flex basis-1/2 flex-col items-center justify-center gap-3">
              <div className="hoverable">
                <img src="/assets/plus.svg" className="h-8"></img>
              </div>
              <div className="text-[#D9D9D950] transition-all duration-500 hover:text-[#D9D9D9]">
                [ADD DESCRIPTION/]
              </div>
              <textarea
                required
                maxLength="250"
                placeholder="[ADD DESCRIPTION/]"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              ></textarea>
            </div>
            <div className="hoverable flex basis-1/6 items-center justify-center bg-[#D9D9D9] text-[#060B19]">
              <input
                className="btn btn--secondary"
                type="submit"
                value="ADD+"
              />
            </div>
          </div>
        </form>
      </div>
      <Cursor />
    </>
  );
}
