
import React from "react";
import StoryCard from "../storyCard/StoryCard";

const PopularStories = async () => {
  const res = await fetch("http://localhost:3000/api/stories?popular=true");
  const popularStories = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {popularStories?.map((story) => (
        <StoryCard key={story?._id} story={story} />
      ))}
    </div>
  );
};

export default PopularStories;
