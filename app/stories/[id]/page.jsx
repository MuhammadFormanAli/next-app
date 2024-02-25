

import React from "react";
import PrivateRoute from "@/app/components/privateRoute/PrivateRoute";

const ReadStory = async ({ params }) => {
  const res = await fetch(
    `http://localhost:3000/api/stories?id=${params?.id}`
  );
  const story = await res.json();
  // console.log(story);

  return (
    <PrivateRoute>
      <div>
        <div className="static md:relative  md:h-[400px]">
          <img
            className="h-full w-full object-cover"
            src={story?.storyImage}
            alt="featuredImg"
          />

          <div className="static md:absolute bg-black md:bg-opacity-25 p-4 md:p-24 md:top-0 w-full h-full ">
            <div className="max-w-[380px] h-full  text-white flex flex-col gap-1 md:gap-4 justify-center">
              <h1 className="text-[32px] md:text-[40px] font-bold tracking-[4.17px] leading-[48px] ">
                {story?.storyName}
              </h1>

              <div className="flex gap-5">
                <p className="font-bold text-[12px] tracking-[1px] ">
                  {" "}
                  {story?.date}
                </p>
                <p className="font-bold text-[12px] tracking-[1px] ">
                  by {story?.writerName}
                </p>
              </div>

              <p className="text-[15px] text-[#DFDFDF] my-4">
                {story?.description}
              </p>
            </div>
          </div>
        </div>

        <div className="px-5 py-10 border m-3">
          {story?.story}
          <hr />
          {story?.story}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default ReadStory;
