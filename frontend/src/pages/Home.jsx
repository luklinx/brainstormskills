import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import ImageGallery from "../components/ImageGallery/ImageGallery.jsx";
import FeaturedCourses from "../components/FeaturedCourses/FeaturedCourses.jsx";
import WhyUs from "../components/WhyUs/WhyUs.jsx";
import CelebrityQuotes from "../components/CelebrityQuotes/CelebrityQuotes.jsx";
import AwardingBodies from "../components/AwardingBodies/AwardingBodies.jsx";
import Faqs from "../components/Faqs/Faqs.jsx";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <ImageGallery />
      <FeaturedCourses />
      <WhyUs />
      <CelebrityQuotes />
      <AwardingBodies />
      <Faqs />
    </main>
  );
};

export default Home;
