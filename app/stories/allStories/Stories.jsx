import StoryCard from '@/app/components/storyCard/StoryCard';
import React from 'react';

const Stories = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
        </div>
    );
};

export default Stories;