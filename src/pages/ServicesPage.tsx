import Footer from "../components/layout/Footer"
import ServicesSection from "../components/sections/ServicesSection"
import { Helmet } from "react-helmet-async"

const ServicesPage = () => {
  return (
    <>
    <Helmet>
        <title>Services Vynho</title>
        <meta
          name="description"
          content="Services Vynho provided"
        />
      </Helmet>
      <ServicesSection/>
      <Footer/>
      {/* <ServicesCard/> */}
    </>
  )
}

export default ServicesPage