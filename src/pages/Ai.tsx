import Footer from "../components/layout/Footer"
import { HeroSection } from "../components/sections/aiSection/AiHeroSection"
import { AudienceSection } from "../components/sections/aiSection/AudienceSection"
import { SpotlightSection } from "../components/sections/aiSection/SpotlightSection"
import { Helmet } from "react-helmet-async"

const Ai = () => {
  return (
    <>
    <Helmet>
        <title>AI Vynho</title>
        <meta
          name="description"
          content=" AI services and consulting for companies ready to build, automate,
              and scale."
        />
      </Helmet>
      <HeroSection/>
      <AudienceSection/>
      <SpotlightSection/>
      <Footer/>
    </>
  )
}

export default Ai