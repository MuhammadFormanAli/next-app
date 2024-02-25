import StoryCard from '@/app/components/storyCard/StoryCard';
import React from 'react';

const Stories = async () => {
    const res = await fetch('http://localhost:3000/api/stories')
    const stories = await res.json()
    // console.log(stories)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
                stories?.map(story =>  <StoryCard  key={story?._id} story={story} /> )
            }
            
        </div>
    );
};

export default Stories;