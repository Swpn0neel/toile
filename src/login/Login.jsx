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
      <div className="fontsm flex h-screen flex-row" id="login">
        <div className="flex basis-2/12 flex-col">
          <Link
            to="/"
            className="hoverable sborder2 flex basis-2/6 items-center justify-center bg-[#D9D9D9] hover:cursor-none"
          >
            <img
              src="assets/arrow_alt.svg"
              className="h-20 rotate-180 hover:-translate-x-5 transition-all duration-500"
            ></img>
          </Link>
          <div className="hoverable flex basis-5/6 items-center justify-center">
            <img
              src="assets/logo.svg"
              width="45rem"
              className="hover:scale-125 transition-all duration-500"
            ></img>
          </div>
        </div>
        <form onSubmit={handleSubmit} ref={loginForm} className="grid grid-cols-5">
          <div className="sborder1 flex col-span-4 flex-col">
            <div className="sborder2 flex basis-5/12 items-end pb-16 pl-20">
              <p className="fontlg hoverable text-6xl text-white">Sign In</p>
            </div>
            <div className="flex flex-col justify-center gap-8 basis-7/12 bg-[#D9D9D9] pl-20 pr-64 text-[#060B1990]">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="ENTER EMAIL"
                  className="hoverable sborder3 pb-2 hover:text-[#060B19] transition-all duration-500 bg-[#D9D9D9] w-96 cursor-none"
                />
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="ENTER PASSWORD"
                  className="hoverable sborder3 pb-2 hover:text-[#060B19] transition-all duration-500 bg-[#D9D9D9] w-96 cursor-none"
                />
              </div>
              {/* <form onSubmit={handleSubmit} ref={loginForm}>
                <div className="flex basis-7/12 flex-col justify-center gap-8 bg-[#D9D9D9] pl-20 pr-64 text-[#060B1990]">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Enter email..."
                    className="hoverable sborder3 pb-2 hover:text-[#060B19] transition-all duration-500"
                  />

                  <input
                    type="password"
                    required
                    name="password"
                    placeholder="Enter password..."
                    className="hoverable sborder3 pb-2 hover:text-[#060B19] transition-all duration-500"
                  />
                </div>
                <input type="submit" value="Login" className="btn" />
              </form> */}
            </div>
            <div className="flex basis-1/5 flex-col">
              <div className="sborder2 hoverable flex basis-5/12 flex-col">
                <div className="sborder2 flex basis-2/3 items-end justify-center px-12 pb-12 text-[#D9D9D950] hover:text-[#D9D9D9] transition-all duration-500">
                  DONT HAVE AN ACCOUNT?
                </div>
                <Link
                  to="/signup"
                  className="flex basis-1/3 items-center justify-center text-[#D9D9D950] hover:bg-[#d9d9d9] cursor-none hover:text-[#060B19] transition-all duration-500"
                >
                  SIGN UP
                </Link>
              </div>
              <button type="submit" value="Login" className="hoverable flex basis-7/12 items-center justify-center btn cursor-none">
                <img
                  src="assets/arrow.svg"
                  className="h-20 hover:translate-x-5 transition-all duration-500"
                ></img>
              </button>
            </div>
          </form>
      </div>
      <Cursor />
    </>
  );
}
