
import LoginButton from "./components/buttons/LoginButton";
import Hero from "./components/hero/Hero";
import MainFeatures from "./components/mainFeatures/MainFeatures";
import PopularStories from "./components/popularStories/PopularStories";


export default function Home() {
  

  return (
    <>
      <Hero />
      <PopularStories />
      <MainFeatures />
      <LoginButton />
    </>
  );
}
