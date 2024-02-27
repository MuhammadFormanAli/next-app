
import Link from "next/link";
import DeleteStoryButton from "./DeleteStoryButton";
import { useQuery } from "react-query";
import axios from "axios";
import Loader from "../loading/Loading";

const MyStories = ({ email }) => {

  const {data: myStories = [], isLoading:loading, refetch } = useQuery({
    queryKey: ['myStories'],
    queryFn: async() => {
        const res = await axios(`http://localhost:3000/api/stories?email=${email}`)
        return res.data;
    }
})

if (loading) {
  return <Loader/>
}

  return (
  
      <div>
        <div className="flex justify-end py-3">
        <Link className=" px-4 py-3 font-bold tracking-widest bg-black text-white" href='/add-story'>Upload A Story</Link>
        </div>
        {
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-fit">
            {myStories?.map((story) => (
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
                <Link href={`/update-story/${story?._id}`} className="hover:underline" >Edit Story</Link>
                <DeleteStoryButton id={story?._id} email = {email} refetch={refetch} />
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
