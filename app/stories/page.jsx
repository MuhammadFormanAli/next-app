import React from 'react';
import FeaturedStory from './featuredStory/FeaturedStory';
import Stories from './allStories/Stories';


const page = () => {
    return (
        <div>
            <FeaturedStory />
            <Stories />
        </div>
    );
};

export default page;