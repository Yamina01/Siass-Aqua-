import { Helmet } from "react-helmet-async";

import Hero from "../../components/Hero/Hero";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import IndustriesSection from "../../components/IndustriesSection/IndustriesSection";
import WhyChooseUsSection from "../../components/WhyChooseUsSection/WhyChooseUsSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import CTASection from "../../components/CTASection/CTASection";
import BackToTop from "../../components/BackToTop/BackToTop";

const Home = () => {
  return (
    <div>

      <Helmet>

        <title>
          Siass Aqua | The Complete Water Solution
        </title>

        <meta
          name="description"
          content="Siass Aqua provides reliable water purification and water treatment solutions for homes, hospitals, schools, offices and industries with over 20 years of experience."
        />

        <meta
          name="keywords"
          content="water purification, RO systems, industrial water treatment, commercial water solutions, waste water management, Chennai, Tamil Nadu, Siass Aqua"
        />

      </Helmet>

      <Hero />

      <ServiceSection />

      <IndustriesSection />

      <WhyChooseUsSection />

      <ProjectsSection />

      <CTASection />

      <BackToTop />

    </div>
  );
};

export default Home;

