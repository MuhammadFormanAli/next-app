import Image from "next/image";
import React from "react";
import responsive from "@/public/assets/features/desktop/responsive.svg";
import noLimit from "@/public/assets/features/desktop/no-limit.svg";
import embed from "@/public/assets/features/desktop/embed.svg";

const MainFeatures = () => {
  return (
    <div className=" p-3 md:p-10 lg:p-32 flex flex-col lg:flex-row text-center ">
      {/* responsive design  */}
      <div className="flex flex-col items-center justify-between  p-4 ">
        <Image src={responsive} alt="ll" />
        <div>
          <h3 className="text-[18px] font-bold pt-7 pb-2 ">100% Responsive</h3>
          <p className="text-center text-[15px]">
            No matter which the device you’re on, our site is fully responsive
            and stories look beautiful on any screen.
          </p>
        </div>
      </div>

      {/* no photo limit  */}
      <div className="flex flex-col items-center justify-between  p-4">
        <Image src={noLimit} alt="ll" />
        <div>
          <h3 className="text-[18px] font-bold pt-7 pb-2 ">100% Responsive</h3>
          <p className="text-center text-[15px]">
            No matter which the device you’re on, our site is fully responsive
            and stories look beautiful on any screen.
          </p>
        </div>
      </div>

      {/* Available to Embed  */}
      <div className="flex flex-col items-center justify-between  p-4">
        <Image src={embed} alt="ll" />
        <div>
          <h3 className="text-[18px] font-bold pt-7 pb-2 ">100% Responsive</h3>
          <p className="text-center text-[15px]">
            No matter which the device you’re on, our site is fully responsive
            and stories look beautiful on any screen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainFeatures;
