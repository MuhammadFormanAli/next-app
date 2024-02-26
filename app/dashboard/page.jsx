'use client'
import React, { useEffect, useState } from "react";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import { useUser } from "@auth0/nextjs-auth0/client";
import MyStories from "../components/myStories/MyStories";
import featuresImage from "@/public/assets/pricing/desktop/hero.jpg";
import Image from "next/image";


const Dashboard =  () => {
const {user, isLoading} = useUser()
const email = user?.email
console.log(user)

  return (
    <PrivateRoute>
        <div className="flex flex-col-reverse md:grid grid-cols-12 bg-black h-full text-white  ">
        <div className=" py-16 px-8  col-span-12 md:col-span-7 lg:col-span-5 flex items-center justify-center md:flex-grow lg:flex-grow-0 ">
          <div className="max-w-[380px]">
            <h1 className="text-[32px] lg:text-[40px] font-bold ">
              MD FORMAN ALI
            </h1>
            <p className="text-[15px] text-[#DFDFDF] my-4">
              {email}
            </p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 lg:col-span-7">
          <Image
            className="w-full h-full object-cover"
            src={featuresImage}
            alt="hero image"
          />
        </div>
      </div>
      <MyStories email={email} />
    </PrivateRoute>
  );
};

export default Dashboard;
