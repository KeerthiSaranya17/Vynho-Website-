
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import MarqueeLogoStrip from "../components/sections/MarqueeSection";
import StatsSection from "../components/sections/Stats";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Vynho | Software Development & AI Solutions</title>
        <meta
          name="description"
          content="Vynho builds software, SaaS platforms, AI solutions, and digital products for businesses worldwide."
        />
      </Helmet>

    <HeroSection/>
    <MarqueeLogoStrip/>
    <TestimonialsSection/>
    <StatsSection/>
    <Footer/>
    </>
  );
};

export default Home;
