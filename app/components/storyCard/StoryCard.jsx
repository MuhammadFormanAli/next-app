import Image from 'next/image';
import React from 'react';
import storyImg from '@/public/assets/stories/desktop/architecturals.jpg'

const StoryCard = () => {
    return (
        <div className='relative hover:translate-y-[-12px] transition-all duration-[.5s] cursor-pointer '>
            <Image className='w-full' src={storyImg} alt="story image" />
            <div className='bg-black bg-opacity-25 hover:bg-opacity-50 transition-all duration-700 p-10 absolute  h-full w-full top-0 flex flex-col justify-end text-white '>
                <h4 className='font-bold text-[18px]'>Architecturals</h4>
                <h6 className='text-[13px]'>by Samantha Brooke</h6>
                <hr className='my-3'/>
               <div className='flex justify-between items-center text-white'>
               <p >READ STORY</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="#fff"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
               </div>
            </div>
        </div>
    );
};

export default StoryCard;