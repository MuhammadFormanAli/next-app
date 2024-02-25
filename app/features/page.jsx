import Image from "next/image";
import React from "react";
import featuresImage from "@/public/assets/features/desktop/hero.jpg";
import responsive from "@/public/assets/features/desktop/responsive.svg";
import noLimit from "@/public/assets/features/desktop/no-limit.svg";
import embed from "@/public/assets/features/desktop/embed.svg";
import customDomain from "@/public/assets/features/desktop/custom-domain.svg";
import boostExposure from "@/public/assets/features/desktop/boost-exposure.svg";
import dragDrop from "@/public/assets/features/desktop/drag-drop.svg";
import bgBeta from "@/public/assets/features/desktop/bg-beta.jpg";

const page = () => {
  return (
    <div>
      {/* features banner  */}
      <div className="flex flex-col-reverse md:grid grid-cols-12 bg-black h-full text-white  ">
        <div className=" py-16 px-8  col-span-12 md:col-span-7 lg:col-span-5 flex items-center justify-center md:flex-grow lg:flex-grow-0 ">
          <div className="max-w-[380px]">
            <h1 className="text-[32px] md:text-[40px] font-bold tracking-[4.17px] leading-[48px] ">
              FEATURES
            </h1>
            <p className="text-[15px] text-[#DFDFDF] my-4">
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories.
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

      {/* features list  */}
      <div className=" p-3 md:p-5 lg:p-32 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 text-center bg-white gap-2 ">
        {/* responsive design  */}
        <div className="flex flex-col items-center justify-between  p-4 border hover:shadow-md   ">
          <Image src={responsive} alt="ll" />
          <div>
            <h3 className="text-[18px] font-bold pt-7 pb-2 ">
              100% Responsive
            </h3>
            <p className="text-center text-[15px]">
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </div>
        </div>

        {/* no photo limit  */}
        <div className="flex flex-col items-center justify-between  p-4 border hover:shadow-md   ">
          <Image src={noLimit} alt="ll" />
          <div>
            <h3 className="text-[18px] font-bold pt-7 pb-2 ">
              100% Responsive
            </h3>
            <p className="text-center text-[15px]">
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </div>
        </div>

        {/* Available to Embed  */}
        <div className="flex flex-col items-center justify-between  p-4 border hover:shadow-md   ">
          <Image src={embed} alt="ll" />
          <div>
            <h3 className="text-[18px] font-bold pt-7 pb-2 ">
              100% Responsive
            </h3>
            <p className="text-center text-[15px]">
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </div>
        </div>

        {/* Custom Domain  */}
        <div className="flex flex-col items-center justify-between  p-4 border hover:shadow-md   ">
          <Image src={customDomain} alt="ll" />
          <div>
            <h3 className="text-[18px] font-bold pt-7 pb-2 ">Custom Domain</h3>
            <p className="text-center text-[15px]">
              With Photosnap subscriptions you can host your stories on your own
              domain. You can also remove our branding!
            </p>
          </div>
        </div>

        {/* Boost Your Exposure  */}
        <div className="flex flex-col items-center justify-between  p-4 border hover:shadow-md   ">
          <Image src={boostExposure} alt="ll" />
          <div>
            <h3 className="text-[18px] font-bold pt-7 pb-2 ">
              Boost Your Exposure
            </h3>
            <p className="text-center text-[15px]">
              Users that viewed your story or gallery can easily get notifed of
              new and featured stories with our built in mailing list.
            </p>
          </div>
        </div>

        {/* Drag & Drop Image */}
        <div className="flex flex-col items-center justify-between  p-4 border hover:shadow-md   ">
          <Image src={dragDrop} alt="ll" />
          <div>
            <h3 className="text-[18px] font-bold pt-7 pb-2 ">
              Drag & Drop Image
            </h3>
            <p className="text-center text-[15px]">
              Easily drag and drop your image and get beautiful shots everytime.
              No over the top tooling to add friction to creating stories.
            </p>
          </div>
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
                <g fill="none" fillRule="evenodd" stroke="#fff">
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
