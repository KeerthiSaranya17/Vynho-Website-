import AboutHero from "../components/sections/aboutSection/AboutHero";
import AboutStory from "../components/sections/aboutSection/AboutCulture";
import AboutCTA from "../components/sections/aboutSection/AboutCTA";
import Overview from "../components/sections/aboutSection/AboutOverview";
import ProcessFlow from "../components/sections/aboutSection/AboutWork";
import Footer from "../components/layout/Footer";

const About = () => {
  return (
    <>
      <AboutHero />
      <Overview/>
      <AboutStory />
      <ProcessFlow/>
      <AboutCTA />
      <Footer/>s
    </>
  );
};

export default About;