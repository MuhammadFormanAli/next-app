"use client";

import Link from "next/link";
import featuredImg from "@/public/assets/stories/desktop/moon-of-appalacia.jpg";
import Image from "next/image";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import { useUser } from "@auth0/nextjs-auth0/client";

const UploadStory = () => {
  const { user} = useUser();

  const handleStoryUpload = (event) => {
    event.preventDefault();
    const form = event.target;
    const storyName = form.storyName.value;
    const description = form.description.value;
    const story = form.story.value;
    const image1 = form.storyImage.files[0];
    const image2 = form.thumbImage.files[0];

    // console.log(storyName, description, story, storyImage, thumbImage);

    if (!story || !storyName || !description || !image1 || !image2) {
      return alert("All Fields Are Required");
    }

    const imageStorageKey = "f5de0f96ef15566b396729f30a0f2e28";
    const formData = new FormData();
    formData.append("image", image1);

    const formData2 = new FormData();
    formData2.append("image", image2);

    fetch(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          
          const storyImage = result.data.url;
          console.log(storyImage)
          fetch(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`, {
            method: "POST",
            body: formData2,
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.success) {

                const thumbImage = result.data.url;
                console.log(thumbImage);
                const storyDetails = {
                  storyName,
                  description,
                  story,
                  writerName: user,
                  storyImage,
                  thumbImage,
                };
                fetch("http://localhost:3000/api/stories", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(storyDetails),
                })
                  .then((res) => res.json())
                  .then((result) => {
                    if(result._id){
                      console.log("Result from backend", result);
                      alert('story update success')
                    }
                  });
              }
            });
        }
      });

  };

  return (
    <PrivateRoute>
      <div>
      <div className="relative p-10 bg-white bg-opacity-20 text-black">
        <Image
          className="absolute top-0 left-0 w-full h-full -z-50 object-cover"
          src={featuredImg}
          alt="image"
        />

        <form
          onSubmit={handleStoryUpload}
          className="z-10 flex flex-col gap-4 p-4 border border-black "
        >
          <h1 className="font-bold text-lg">Add Story</h1>
          <hr className="border border-black" />

          <div className="flex flex-col md:flex-row justify-between gap-4  ">
            <div className="flex flex-col w-full border border-black p-2 ">
              <label htmlFor="storyName">Story Name</label>
              <input
                className=" py-1 bg-transparent  outline-none"
                type="text"
                name="storyName"
                id="storyName"
                placeholder="Enter Name Of Your Story"
                required
              />
            </div>

            <div className="flex flex-col w-full border border-black p-2 ">
              <label htmlFor="description">Description</label>
              <input
                className=" py-1 bg-transparent outline-none"
                type="text"
                name="description"
                id="description"
                placeholder="Enter Description"
                required
              />
            </div>
          </div>

          <div className="flex flex-col w-full border border-black p-2 ">
            <label htmlFor="story">Story</label>
            <textarea
              className=" py-1 bg-transparent  outline-none"
              name="story"
              id="story"
              placeholder="Write Your Story"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4  ">
            <div className="flex flex-col w-full border border-black p-2 ">
              <label htmlFor="name">Upload Story Image</label>
              <input
                className=" py-1 bg-transparent  outline-none"
                type="file"
                name="storyImage"
                id="storyImage"
                required
              />
            </div>

            <div className="flex flex-col w-full border border-black p-2 ">
              <label htmlFor="thumbImage">Upload Thumb Image</label>
              <input
                className=" py-1 bg-transparent outline-none"
                type="file"
                name="thumbImage"
                id="thumbImage"
                required
              />
            </div>
          </div>

          <input
            className="w-full p-2  text-white text-lg font-bold hover:text-white hover:bg-black border border-black  transition-all duration-1000 "
            type="submit"
            value="Upload Story"
          />
        </form>
      </div>
    </div>
    </PrivateRoute>
  );
};

export default UploadStory;
