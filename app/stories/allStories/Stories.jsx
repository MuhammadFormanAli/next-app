'use client'
import StoryCard from '@/app/components/storyCard/StoryCard';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';


const Stories = () => {

    const {data: stories = [], isLoading:loading, refetch } = useQuery({
        queryKey: ['stories'],
        queryFn: async() => {
            const res = await axios(`http://localhost:3000/api/stories`)
            return res.data;
        }
    })

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {stories?.map(story =>  <StoryCard  key={story?._id} story={story} /> )} 
        </div>

    );
};

export default Stories;