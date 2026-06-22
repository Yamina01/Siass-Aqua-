import "./WhyServicesSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";

import {
  FaMicrochip,
  FaTools,
  FaBolt,
  FaHeadset,
  FaLeaf,
  FaSyncAlt
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaMicrochip />,
    title: "Advanced Technology",
    description:
      "Modern purification systems designed for superior performance."
  },
  {
    icon: <FaTools />,
    title: "Professional Installation",
    description:
      "Expert technicians ensure hassle-free setup and operation."
  },
  {
    icon: <FaBolt />,
    title: "Fast Delivery",
    description:
      "Quick response and timely execution for every project."
  },
  {
    icon: <FaHeadset />,
    title: "Reliable Support",
    description:
      "Dedicated after-sales support and maintenance services."
  },
  {
    icon: <FaLeaf />,
    title: "Energy Efficient",
    description:
      "Solutions designed to save water and reduce energy consumption."
  },
  {
    icon: <FaSyncAlt />,
    title: "Maintenance & AMC",
    description:
      "Comprehensive maintenance contracts for uninterrupted performance."
  }
];

const WhyServicesSection = () => {
  return (
    <section className="why-services">

      <div className="container">

        <SectionTitle
          subtitle="Why Choose Our Services"
          title="Reliable Solutions Tailored To Your Needs"
          description="Combining advanced technology, expert installation and dependable support to deliver the best water treatment experience."
        />

        <div className="why-services-grid">

          {reasons.map((reason, index) => (
            <div
              className="why-services-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >

              <div className="why-services-icon">
                {reason.icon}
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyServicesSection;

