import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import storyImg from '@/public/assets/stories/desktop/architecturals.jpg'

const StoryCard = ({story}) => {
    
    
    console.log(story)
    return (
        <div className='relative  transition-all duration-[.5s] cursor-pointer '>
            <img className='w-full h-full object-cover ' src={story?.thumbImage} alt="story image" />
            <div className='bg-black bg-opacity-25 hover:bg-opacity-50 transition-all duration-700 p-10 absolute  h-full w-full top-0 flex flex-col justify-end text-white '>
                
                <p className='font-bold text-[11px]'>{story?.date}</p>
                <h4 className='font-bold text-[18px]'>{story?.storyName}</h4>
                <h6 className='text-[13px]'>by {story?.writerName}</h6>
                <hr className='my-3'/>
             <Link href={`/stories/${story?._id}`}>
             <div className='flex justify-between items-center text-white hover:underline'>
               <p >READ STORY</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#fff"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
               </div>
             </Link>
            </div>
        </div>
    );
};

export default StoryCard;