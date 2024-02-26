import Link from "next/link";
import { useEffect, useState } from "react";
import DeleteStoryButton from "./DeleteStoryButton";

const MyStories = ({ email }) => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/stories?email=${email}`)
      .then((res) => res.json())
      .then((result) => {
        const stories = result;
        setStories(stories);
        console.log(result);
      });
  }, [email]);

  return (
  
      <div>
        <p className="text-center font-bold text-lg">MY STORIES: {stories?.length}</p>
        {
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-fit">
            {stories?.map((story) => (
              <div key={story?._id}>
                     <div className='relative  transition-all duration-[.5s] cursor-pointer '>
            <img className='w-full h-full object-cover ' src={story?.thumbImage} alt="story image" />
            <div className='bg-black bg-opacity-25 hover:bg-opacity-50 transition-all duration-700 p-10 absolute  h-full w-full top-0 flex flex-col justify-end text-white '>
                
                <p className='font-bold text-[11px]'>{story?.date}</p>
                <h4 className='font-bold text-[18px]'>{story?.storyName}</h4>
                <h6 className='text-[13px]'>by {story?.writerName}</h6>
                <hr className='my-3'/>
            
             <Link href={`/stories/${story?._id}`}>
             <div className='flex justify-between items-center text-white hover:underline'>
               <p >SEE STORY</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#fff"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
               </div>
             </Link>
             <div className="flex justify-between items-center border p-1 font-bold ">
                <button className="hover:underline" >Edit Story</button>
                <DeleteStoryButton id={story?._id} email = {email} />
             </div>

            </div>
        </div>
              </div>
            ))}
          </div>
        }
      </div>

  
  );
};
export default MyStories;
