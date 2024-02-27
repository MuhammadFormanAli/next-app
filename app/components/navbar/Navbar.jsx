"use client";

import React, { useState } from "react";
import logo from "@/public/assets/shared/desktop/logo.svg";
import Image from "next/image";
import Link from "next/link";
import LoginButton from "../buttons/LoginButton";
import close from '/public/assets/shared/mobile/close.svg'
import menu from '/public/assets/shared/mobile/menu.svg'

const Navbar = () => {
  const [hide, setHide] = useState(false);


  const handleHide =(event)=>{
   event.preventDefault()
   setHide(!hide)
  }


  return (
    
      <div className="p-5 bg-white shadow md:flex md:items-center md:justify-between ">
        <div className="flex justify-between items-center ">
          <div className="text-2xl cursor-pointer">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>

          <div className="text-3xl cursor-pointer mx-2 md:hidden ">
            <button onClick={handleHide}>{hide?<svg xmlns="http://www.w3.org/2000/svg" width="20" height="6"><g fillRule="evenodd"><path d="M0 0h20v1H0zM0 5h20v1H0z"/></g></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"><path fillRule="evenodd" d="M14.718.075l.707.707L8.707 7.5l6.718 6.718-.707.707L8 8.207l-6.718 6.718-.707-.707L7.293 7.5.575.782l.707-.707L8 6.793 14.718.075z"/></svg>}</button>
          </div>
        </div>

        <ul
          className={` ${
            hide ? "top-[-450px] opacity-0" : "top-[70px] opacity-100"
          } absolute md:flex md:items-center md:static   bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7  transition-all ease-in duration-500`}
        >
          <li onClick={handleHide} className="mx-4 my-6 md:my-0">
            <Link
              href="/stories"
              className=" font-bold lg:tracking-[4px] hover:text-cyan-500 duration-500"
            >
              STORIES
            </Link>
          </li>
          <li onClick={handleHide} className="mx-3 my-4 md:my-0">
            <Link
              href="/features"
              className=" font-bold lg:tracking-[4px] hover:text-cyan-500 duration-500"
            >
              FEATURES
            </Link>
          </li>
          <li onClick={handleHide} className="mx-3 my-4 md:my-0">
            <Link
              href="/pricing"
              className=" font-bold lg:tracking-[4px] hover:text-cyan-500 duration-500"
            >
              PRICING
            </Link>
          </li>
          <li onClick={handleHide} className="mx-3 my-4 md:my-0">
            <Link
              href="/dashboard"
              className=" font-bold lg:tracking-[4px] hover:text-cyan-500 duration-500"
            >
              DASHBOARD
            </Link>
          </li>

          <LoginButton />
        </ul>
      </div>
  );
};

export default Navbar;
