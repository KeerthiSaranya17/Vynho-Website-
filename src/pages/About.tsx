import AboutHero from "../components/sections/aboutSection/AboutHero";
import AboutStory from "../components/sections/aboutSection/AboutCulture";
import AboutCTA from "../components/sections/aboutSection/AboutCTA";
import Overview from "../components/sections/aboutSection/AboutOverview";
import ProcessFlow from "../components/sections/aboutSection/AboutWork";
import Footer from "../components/layout/Footer";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
    <Helmet>
        <title>About Vynho</title>
        <meta
          name="description"
          content="Details about the company VYNHO"
        />
      </Helmet>
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