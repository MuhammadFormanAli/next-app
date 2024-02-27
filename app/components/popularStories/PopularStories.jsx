"use client";
import React, { useEffect, useState } from "react";
import StoryCard from "../storyCard/StoryCard";
import axios from "axios";

const PopularStories = () => {
  const [popularStories, setPopularStories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/stories?popular=true`)
      .then((res) => res.json())
      .then(data=>{
        setPopularStories(data)
      });
  }, []);

  console.log(popularStories)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {popularStories?.map((story) => (
        <StoryCard key={story?._id} story={story} />
      ))}
    </div>
  );
};

export default PopularStories;
