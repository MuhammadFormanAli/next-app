import React from 'react';
import StoryCard from '../storyCard/StoryCard';

const PopularStories = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
        </div>
    );
};

export default PopularStories;