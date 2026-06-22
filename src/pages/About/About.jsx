import { Helmet } from "react-helmet-async";

import AboutHero from "../../components/AboutHero/AboutHero";
import CTASection from "../../components/CTASection/CTASection";
import MissionVisionSection from "../../components/MissionVisionSection/MissionVisionSection";
import OurProcessSection from "../../components/OurProcessSection/OurProcessSection";
import OurStory from "../../components/OurStory/OurStory";
import TrustSection from "../../components/TrustSection/TrustSection";

const About = () => {
  return (
    <>

      <Helmet>

        <title>
          About Us | Siass Aqua
        </title>

        <meta
          name="description"
          content="Learn about Siass Aqua and our 20+ years of experience providing reliable water purification solutions for homes, hospitals, schools, offices and industries."
        />

        <meta
          name="keywords"
          content="about Siass Aqua, water treatment company, water purification experts, Chennai, Tamil Nadu"
        />

      </Helmet>

      <AboutHero />

      <OurStory />

      <MissionVisionSection />

      <TrustSection />

      <OurProcessSection />

      <CTASection />

    </>
  );
};

export default About;



