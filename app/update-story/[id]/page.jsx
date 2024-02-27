"use client";
import featuredImg from "@/public/assets/stories/desktop/moon-of-appalacia.jpg";
import Image from "next/image";
import PrivateRoute from "../../components/privateRoute/PrivateRoute";
import { useUser } from "@auth0/nextjs-auth0/client";

import { useQuery } from "react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UpdateStory = ({ params }) => {
  const router = useRouter()
  const { user } = useUser();

  const {data: story = []} = useQuery({
    queryKey: ['story'],
    queryFn: async() => {
        const res = await axios(`http://localhost:3000/api/stories?id=${params?.id}`)
        return res.data;
    }
})


  const handleStoryUpdate = async (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedStory = form.story.value;
    console.log(updatedStory)

    const res = await axios.put(`http://localhost:3000/api/stories?email=${user?.email}&id=${story?._id}`,{updatedStory})
     const data =  res.data;
     if(data){
      router.push('/dashboard')
      toast.success(`Update Successful!`);
     }
     console.log(data)

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
            onSubmit={handleStoryUpdate}
            className="z-10 flex flex-col gap-4 p-4 border border-black font-bold "
          >
            <h1 className="font-bold text-lg">Update Story</h1>
            <hr className="border border-black" />

            <div className="flex flex-col md:flex-row justify-between gap-4  ">
              <div className="flex flex-col w-full border border-black p-2 font-bold ">
                <label htmlFor="writerName">Writer Name</label>
                <input
                  type="text"
                  className=" py-1 bg-transparent  outline-none"
                  name="writerName"
                  id="writerName"
                  defaultValue={story?.writerName}
                  readOnly
                />
              </div>
              <div className="flex flex-col w-full border border-black p-2 font-bold ">
                <label htmlFor="writerEmail">Writer Email</label>
                <input
                  type="email"
                  className=" py-1 bg-transparent  outline-none"
                  name="writerEmail"
                  id="writerEmail"
                  defaultValue={story?.writerEmail}
                  readOnly
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4  ">
              <div className="flex flex-col w-full border border-black p-2 ">
                <label htmlFor="storyName">Story Name</label>
                <input
                  className=" py-1 bg-transparent  outline-none"
                  type="text"
                  name="storyName"
                  id="storyName"
                  defaultValue={story?.storyName}
                  readOnly
                />
              </div>

              <div className="flex flex-col w-full border border-black p-2 ">
                <label htmlFor="description">Description</label>
                <input
                  className=" py-1 bg-transparent outline-none"
                  type="text"
                  name="description"
                  id="description"
                  defaultValue={story?.description}
                  readOnly
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
                defaultValue={story?.story}
                required
              />
            </div>
            <input
              className="w-full p-2  text-white text-lg font-bold hover:text-white hover:bg-black border border-black  transition-all duration-1000 "
              type="submit"
              value="Update Story"
            />
          </form>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default UpdateStory;
