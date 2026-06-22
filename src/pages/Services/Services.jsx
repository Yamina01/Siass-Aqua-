import { Helmet } from "react-helmet-async";

import ServicesHero from "../../components/ServicesHero/ServicesHero";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import OurProcessSection from "../../components/OurProcessSection/OurProcessSection";
import IndustriesSection from "../../components/IndustriesSection/IndustriesSection";
import CTASection from "../../components/CTASection/CTASection";
import WhyServicesSection from "../../components/WhyServiceSection/WhyServicesSection";

const ServicesPage = () => {
  return (
    <>

      <Helmet>

        <title>
          Water Treatment Services | Siass Aqua
        </title>

        <meta
          name="description"
          content="Explore Siass Aqua's water purification services including domestic RO systems, commercial water treatment, industrial purification and waste water management solutions."
        />

        <meta
          name="keywords"
          content="RO systems, water treatment services, industrial water purification, commercial water solutions, waste water management, Chennai, Tamil Nadu, Siass Aqua"
        />

      </Helmet>

      {/* Hero */}
      <ServicesHero />

      {/* Detailed Services */}
      <ServiceSection />

      {/* Why Choose Our Services */}
      <WhyServicesSection />

      {/* Working Process */}
      <OurProcessSection />

      {/* Industries Served */}
      <IndustriesSection />

      {/* Call To Action */}
      <CTASection />

    </>
  );
};

export default ServicesPage;

