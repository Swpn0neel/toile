import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import "./Login.css";
import Cursor from "../components/Cursor/Cursor";

export default function Login() {
  const navigate = useNavigate();
  const { user, loginUser } = useAuth();
  const loginForm = useRef(null);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    const userInfo = { email, password };

    loginUser(userInfo);
  };
  return (
    <>
      <div className="fontsm flex h-screen max-sm:flex-col" id="login">
        <div className="flex basis-2/12 sm:flex-col">
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
        <form
          onSubmit={handleSubmit}
          ref={loginForm}
          className="grid max-sm:grid-cols-1 sm:grid-cols-5"
        >
          <div className="sm:border-r-2 sm:border-l-2 border-[#FFFFFF15] flex col-span-4 flex-col">
            <div className="flex basis-5/12 items-end sm:pb-16 max-sm:pt-24 pb-10 sm:pl-20 pl-8">
              <p className="fontlg hoverable text-6xl text-white">Sign In</p>
            </div>
            <div className="flex flex-col justify-center gap-8 basis-7/12 bg-[#D9D9D9] sm:pl-20 sm:pr-64 max-sm:py-24 px-8 text-[#060B1990]">
              <input
                required
                type="email"
                name="email"
                placeholder="ENTER EMAIL"
                className="hoverable outline-none sborder3 pb-2 hover:text-[#060B19] transition-all duration-500 bg-[#D9D9D9] sm:w-[700px] cursor-none"
              />
              <input
                type="password"
                required
                name="password"
                placeholder="ENTER PASSWORD"
                className="hoverable outline-none sborder3 pb-2 hover:text-[#060B19] transition-all duration-500 bg-[#D9D9D9] sm:w-[700px] cursor-none"
              />
            </div>
          </div>
          <div className="flex basis-1/5 sm:flex-col flex-col-reverse">
            <div className="hoverable flex basis-5/12 sm:flex-col">
              <div className="border-b-2 border-[#FFFFFF15] max-sm:border-r-2 max-sm:border-[#FFFFFF15] flex basis-2/3 max-sm:basis-3/5 items-end justify-center sm:px-12 max-sm:px-8 sm:pb-12 text-[#D9D9D950] hover:text-[#D9D9D9] max-sm:py-10 transition-all duration-500">
                DONT HAVE AN ACCOUNT?
              </div>
              <Link
                to="/signup"
                className="border-b-2 border-[#FFFFFF15] flex basis-1/3 max-sm:basis-2/5 items-center justify-center text-[#D9D9D950] hover:bg-[#d9d9d9] cursor-none hover:text-[#060B19] transition-all duration-500"
              >
                SIGN UP
              </Link>
            </div>
            <button
              type="submit"
              value="Login"
              className="hoverable max-sm:border-b-2 max-sm:border-[#FFFFFF15] flex basis-7/12 max-sm:py-6 sm:items-center justify-center btn cursor-none"
            >
              <img
                src="assets/arrow.svg"
                className="sm:h-20 h-16 hover:translate-x-5 transition-all duration-500"
              />
            </button>
          </div>
        </form>
      </div>
      <Cursor />
    </>
  );
}
