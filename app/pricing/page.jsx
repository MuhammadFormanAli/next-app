import Image from "next/image";
import React from "react";
import featuresImage from "@/public/assets/pricing/desktop/hero.jpg";
import bgBeta from "@/public/assets/features/desktop/bg-beta.jpg";

const page = () => {
  return (
    <div className="bg-white">
      {/* pricing banner  */}
      <div className="flex flex-col-reverse md:grid grid-cols-12 bg-black h-full text-white  ">
        <div className=" py-16 px-8  col-span-12 md:col-span-7 lg:col-span-5 flex items-center justify-center md:flex-grow lg:flex-grow-0 ">
          <div className="max-w-[380px]">
            <h1 className="text-[32px] md:text-[40px] font-bold tracking-[4.17px] leading-[48px] ">
              PRICING
            </h1>
            <p className="text-[15px] text-[#DFDFDF] my-4">
              Create a your stories, Photosnap is a platform for photographers
              and visual storytellers. It’s the simple way to create and share
              your photos.
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

      {/* pricing  */}
      <div className=" p-4 md:p-20 flex flex-col lg:flex-row gap-8  items-center justify-center">


        {/* basics */}
        <div className="static md:relative flex flex-col  items-center gap-5 border md:block lg:flex lg:items-center p-8 w-full hover:bg-black hover:text-white transition-all duration-700 hover:scale-y-110 bg-[#f5f5f5] ">
          <h1 className="text-[32px] md:text-[40px] font-bold tracking-[2px] leading-[48px] ">Basic</h1>
          <p className="max-w-[270px] py-4 ">
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </p>

          <div className="static md:absolute lg:static md:top-[20px] md:right-[20px]">
            <h1 className="text-[32px] md:text-[40px] font-bold tracking-[3px] leading-[48px] ">$19.00</h1>
            <p className="text-center md:text-right lg:text-left">Per Month</p>
          </div>

          <button className='bg-black hover:bg-white hover:text-black px-6 py-3  tracking-[3px] font-bold text-white'>PICK PLANE</button>

        </div>

        
        {/* basics */}
        <div className="static md:relative flex flex-col  items-center gap-5 border md:block lg:flex lg:items-center p-8 w-full hover:bg-black hover:text-white transition-all duration-700 hover:scale-y-110 bg-[#f5f5f5] ">
          <h1 className="text-[32px] md:text-[40px] font-bold tracking-[2px] leading-[48px] ">Basic</h1>
          <p className="max-w-[270px] py-4 ">
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </p>

          <div className="static md:absolute lg:static md:top-[20px] md:right-[20px]">
            <h1 className="text-[32px] md:text-[40px] font-bold tracking-[3px] leading-[48px] ">$19.00</h1>
            <p className="text-center md:text-right lg:text-left">Per Month</p>
          </div>

          <button className='bg-black hover:bg-white hover:text-black px-6 py-3  tracking-[3px] font-bold text-white'>PICK PLANE</button>

        </div>

        
        {/* basics */}
        <div className="static md:relative flex flex-col  items-center gap-5 border md:block lg:flex lg:items-center p-8 w-full hover:bg-black hover:text-white transition-all duration-700 hover:scale-y-110 bg-[#f5f5f5] ">
          <h1 className="text-[32px] md:text-[40px] font-bold tracking-[2px] leading-[48px] ">Basic</h1>
          <p className="max-w-[270px] py-4 ">
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </p>

          <div className="static md:absolute lg:static md:top-[20px] md:right-[20px]">
            <h1 className="text-[32px] md:text-[40px] font-bold tracking-[3px] leading-[48px] ">$19.00</h1>
            <p className="text-center md:text-right lg:text-left">Per Month</p>
          </div>

          <button className='bg-black hover:bg-white hover:text-black px-6 py-3  tracking-[3px] font-bold text-white'>PICK PLANE</button>

        </div>

        

      

      </div>

      {/* we are in beta  */}
      <div className="relative h-[300px]">
        <Image
          className="h-full w-full object-cover"
          src={bgBeta}
          alt="featuredImg"
        />

        <div className="absolute bg-black bg-opacity-25 p-4 md:p-16 lg:p-28 top-0 w-full h-full ">
          <div className=" h-full  text-white flex flex-col md:flex-row gap-1 md:gap-4 justify-center md:justify-between items-center">
            <h1 className=" max-w-[350px] text-[32px] md:text-[40px] font-bold tracking-[4.17px] leading-[48px] ">
              We’re in beta. Get your invite today!
            </h1>

            <div className="flex gap-6 items-center text-white">
              <button className="text-[12px] font-bold tracking-[3px] hover:underline ">
                READ THE STORY
              </button>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fill-rule="evenodd" stroke="#fff">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
