import React from "react";
import heroImg1 from "@/public/assets/home/desktop/create-and-share.jpg";
import heroImg2 from "@/public/assets/home/desktop/beautiful-stories.jpg";
import heroImg3 from "@/public/assets/home/desktop/designed-for-everyone.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      {/* hero section one  */}
      <div className="flex flex-col-reverse md:grid grid-cols-12 bg-black h-full text-white  ">
        <div className=" py-16 px-8  col-span-12 md:col-span-7 lg:col-span-5 flex items-center justify-center md:flex-grow lg:flex-grow-0 ">
          <div className="max-w-[380px]">
            <h1 className="text-[32px] md:text-[40px] font-bold tracking-[4.17px] leading-[48px] ">
              Create and share your photo stories.{" "}
            </h1>
            <p className="text-[15px] text-[#DFDFDF] my-4">
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <button className="text-[12px] font-bold tracking-[3px] ">
              GET AN INVITE
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-7">
          <Image
            className="w-full h-full object-cover"
            src={heroImg1}
            alt="hero image"
          />
        </div>
      </div>

      {/* hero section two  */}
      <div className="flex flex-col-reverse md:grid grid-cols-12 bg-white h-full   ">
        <div className="col-span-12 md:col-span-5 lg:col-span-7">
          <Image
            className="w-full h-full object-cover"
            src={heroImg2}
            alt="hero image"
          />
        </div>
        <div className=" text-black py-16 px-8  col-span-12 md:col-span-7 lg:col-span-5 flex items-center justify-center md:flex-grow lg:flex-grow-0 ">
          <div className="max-w-[380px]">
            <h1 className="text-[40px] font-bold tracking-[4.17px] leading-[48px]  ">
              BEAUTIFUL STORIES EVERY TIME.
            </h1>
            <p className="text-[15px] my-4">
            We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.
            </p>
            <button className="text-[32px] md:text-[40px] font-bold tracking-[3px] ">
            VIEW THE STORIES
            </button>
          </div>
        </div>
      </div>

      {/* hero section Three  */}
      <div className="flex flex-col-reverse md:grid grid-cols-12 bg-white h-full  text-black ">
        <div className=" py-16 px-8  col-span-12 md:col-span-7 lg:col-span-5 flex items-center justify-center md:flex-grow lg:flex-grow-0 ">
          <div className="max-w-[380px]">
            <h1 className="text-[32px] md:text-[40px] font-bold tracking-[4.17px] leading-[48px] ">
            DESIGNED FOR EVERYONE
            </h1>
            <p className="text-[15px] my-4">
            Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. 
            </p>
            <button className="text-[12px] font-bold tracking-[3px] ">
            VIEW THE STORIES
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-7">
          <Image
            className="w-full h-full object-cover"
            src={heroImg3}
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
