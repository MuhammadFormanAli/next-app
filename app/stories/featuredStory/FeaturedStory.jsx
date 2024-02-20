import Image from "next/image";
import React from "react";
import featuredImg from '@/public/assets/stories/desktop/moon-of-appalacia.jpg'

const FeaturedStory = () => {
  return (
    <div className="static md:relative  md:h-[650px]">
        <Image className="h-full w-full object-cover" src={featuredImg} alt="featuredImg" />
        
      <div className="static md:absolute bg-black md:bg-opacity-25 p-4 md:p-24 md:top-0 w-full h-full ">

        <div className="max-w-[380px] h-full  text-white flex flex-col gap-1 md:gap-4 justify-center">

            <p className="text-[12px] font-bold tracking-[3px]">LAST MONTH’S FEATURED STORY</p>
          <h1 className="text-[32px] md:text-[40px] font-bold tracking-[4.17px] leading-[48px] ">
          HAZY FULL MOON OF APPALACHIA
          </h1>

          <div className="flex gap-5">
            <p className="font-bold text-[12px] tracking-[1px] ">March 2nd 2020</p> 
            <p className="font-bold text-[12px] tracking-[1px] ">by John Appleseed</p>
          </div>

          <p className="text-[15px] text-[#DFDFDF] my-4">
          The dissected plateau area, while not actually made up of geological mountains, is popularly called mountains especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.
          </p>

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
  );
};

export default FeaturedStory;
