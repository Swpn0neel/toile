// import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAuth } from "../utils/AuthContext";
import "./Signup.css";
import Cursor from "../components/Cursor/Cursor";

export default function Signup() {
  const registerForm = useRef(null);
  const navigate = useNavigate();
  const { user, registerUser } = useAuth();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = registerForm.current.name.value;
    const email = registerForm.current.email.value;
    const password = registerForm.current.password.value;
    const confirmPassword = registerForm.current.confirmPassword.value;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const userInfo = { name, email, password };
    registerUser(userInfo);
  };
  return (
    <>
      <div className="fontsm flex h-screen flex-row" id="signup">
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
        <div className="sborder1 flex basis-8/12 flex-col">
          <div className="sborder2 flex basis-5/12 items-end pb-16 pl-20">
            <p className="fontlg hoverable text-6xl text-white">Sign Up</p>
          </div>
          <form onSubmit={handleSubmit} ref={registerForm}>
            <div className="flex basis-7/12 flex-col justify-center gap-8 bg-[#D9D9D9] pl-20 pr-64 text-[#060B1990]">
              <input
                required
                type="text"
                name="name"
                placeholder="Enter name..."
                className="hoverable sborder3 pb-2 hover:text-[#060B19] transition-all duration-500"
              />
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
              <input
                type="password"
                required
                name="confirmPassword"
                placeholder="confirm Password"
                className="hoverable sborder3 pb-2 hover:text-[#060B19] transition-all duration-500"
              />
              <input type="submit" value="register" className="btn" />
            </div>
          </form>
        </div>
        <div className="flex basis-2/12 flex-col">
          <div className="sborder2 hoverable flex basis-5/12 flex-col">
            <div className="sborder2 flex basis-2/3 items-end justify-center px-12 pb-12 text-[#D9D9D950] hover:text-[#D9D9D9] transition-all duration-500">
              ALREADY HAVE AN ACCOUNT?
            </div>
            <Link
              to="/signin"
              className="flex basis-1/3 items-center justify-center text-[#D9D9D950] hover:bg-[#d9d9d9] hover:text-[#060B19] transition-all duration-500"
            >
              SIGN IN
            </Link>
          </div>
          <div className="hoverable flex basis-7/12 items-center justify-center">
            <img
              src="assets/arrow.svg"
              className="h-20 hover:translate-x-5 transition-all duration-500"
            ></img>
          </div>
        </div>
      </div>
      <Cursor />
    </>
  );
}
