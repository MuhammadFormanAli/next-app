
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/page";
import MainFeatures from "./components/mainFeatures/MainFeatures";
import PopularStories from "./components/popularStories/PopularStories";


export default function Home() {
  return (
    <>
      <Hero />
      <PopularStories />
      <MainFeatures />
      <Footer />
    </>
  );
}
